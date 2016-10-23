/* response time */
export default function resTime() {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    // options is config.responseTime
    console.log('resTime', Date.now() - start);
  };
}
