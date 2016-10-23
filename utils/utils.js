/**
 * promisify
 */
function promisify(fn, exec) {
  return new Promise(function (res, rej) {
    fn = fn || function (err, html) {
        if (err) {
          return rej(err);
        }
        res(html);
      };
    exec(fn);
  });
}