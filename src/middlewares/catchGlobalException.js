const { CatchException } = require('../model/CatchException');
const catchGlobalException = async (ctx, next) => {
  try {
    // 有坑，一定要await next 因为接下来的中间件是异步的，不过不用的话，就不能等到后面的执行完毕捕获异常了
    // 之前就是没有加，导致一直捕获不到异常，而是直接接口报错
    await next();
  } catch(error) {
    if(error instanceof CatchException) {
      // weizhi 异常未知
      ctx.body = '发生自定义异常啦';
      ctx.status = 400;
    } else {
      // 自定义异常处理
      ctx.body = '发生未知异常啦';
      ctx.status = 400;
    }
  }
}

module.exports = catchGlobalException;