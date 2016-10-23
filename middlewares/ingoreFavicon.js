import path from 'path';
import fs from 'fs';

const resolve = path.resolve;

/* handle favicon in case of 404 not found */
export default function ignoreFavicon(ignoreFavicon) {
  return async (ctx, next) => {
    if (!ignoreFavicon) {
      return await next();
    }

    if ('/favicon.ico' != ctx.path) {
      await next();
    } else {
      // resolve a relative path into an absolute path
      ignoreFavicon = resolve(ignoreFavicon);

      let icon;
      const maxAge = 86400000;
      const cacheControl = `public, max-age=${maxAge / 1000 | 0}`;

      return async (ctx, next) => {
        if ('/favicon.ico' != ctx.path) {
          await next();
        }

        if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
          ctx.status = 'OPTIONS' == ctx.method ? 200 : 405;
          ctx.set('Allow', 'GET, HEAD, OPTIONS');
        } else {
          // lazily read the icon
          if (!icon) icon = fs.readFileSync(path);
          ctx.set('Cache-Control', cacheControl);
          ctx.type = 'image/x-icon';
          ctx.body = icon;
        }
      }
    }
  };
}
