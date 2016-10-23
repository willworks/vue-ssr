import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from '../config/config.default';

/**
 * use bluebird(faster & fn) promise instead of ES6 promise
 * see http://programmers.stackexchange.com/questions/278778/why-are-native-es6-promises-slower-and-more-memory-intensive-than-bluebird
 */
global.mongoose = mongoose;
global.Promise = bluebird;
mongoose.Promise = bluebird;

exports.dbHandler = function () {
  try {
    // mongodb handler
    mongoose.connect(`mongodb://${config.MONGODB.HOST}:${config.MONGODB.PORT}/${config.MONGODB.NAME}`);
    mongoose.connection.on('connected', function () {
      console.log('Mongoose connected to ' + config.MONGODB.HOST + ':' + config.MONGODB.PORT + '/' + config.MONGODB.NAME);
    });
    mongoose.connection.on('error',function (err) {
      console.log('Mongoose connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function () {
      console.log('Mongoose disconnected');
    });
    process.on('SIGINT', function() {
      mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};