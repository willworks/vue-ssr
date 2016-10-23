import path from 'path';

let env = (process.env.NODE_ENV || 'local').toLowerCase();
let file = path.resolve(__dirname, 'config.' + env + '.js');
let config;

try {
  config = module.exports = require(file);
  console.log(`Load config: [${env}] ${file}`);
} catch (err) {
  try {
    env = 'local';
    file = path.resolve(__dirname, 'config.' + env + '.js');
    config = module.exports = require(file);
    console.warn(`load config instead: [${env}] ${file}`);
  } catch (err) {
    console.error(`Cannot load config: [${env}] ${file}`);
    throw err;
  }
}
