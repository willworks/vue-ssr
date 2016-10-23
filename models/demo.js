import mongoose from 'mongoose';
import DAO from '../services/dao';

/**
 * define schema
 */
const DemoSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: String},
  sex: {type: String},
  createdtime: {type: Date, default: Date.now(), require: true, unique: true}
});

/**
 * extends Schema
 */
const DemoSchemaExt = new DAO(DemoSchema);

/**
 * create model from schema
 */
const Demo = mongoose.model('Demo', DemoSchemaExt.extend());

/**
 * init model, so it can be used in DAO by this
 */
DemoSchemaExt.init(Demo);

module.exports = Demo;