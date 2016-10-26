import DemoModel from '../models/demo';

exports.index = async (ctx, next) => {
  await ctx.render('index.html');
};

// diff between Schema.statics & Schema.methods
exports.demo = async (ctx, next) => {
  let demo = new DemoModel({'demo': 'demo'});
  demo.callInEntity();
  DemoModel.callInModel();
  ctx.body = {result: 'hello world!'};
};

exports.getDemo = async (ctx, next) => {
  let result = await DemoModel._read(ctx.request.query);
  if(result && result.success) {
    console.log(result);
    ctx.body = {result};
  } else {
    ctx.body = {result};
  }
};

exports.setDemo = async (ctx, next) => {
  let result = await DemoModel._create(ctx.request.query);
  if(result && result.success) {
    ctx.body = {result};
  } else {
    ctx.body = {result};
  }
};

exports.delDemo = async (ctx, next) => {
  console.log(ctx.request.query);
  let result = await DemoModel._delete(ctx.request.query);
  if(result && result.success) {
    ctx.body = {result};
  } else {
    ctx.body = {result};
  }
};

exports.updateDemo = async (ctx, next) => {
  console.log(ctx.request.query);
  let result = await DemoModel._update(ctx.request.query);
  if(result && result.success) {
    ctx.body = {result};
  } else {
    ctx.body = {result};
  }
};