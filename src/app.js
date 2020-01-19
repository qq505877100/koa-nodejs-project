const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const nunjucks = require('koa-nunjucks-2');
const serve = require('koa-static');
const path = require('path');
const catchGlobalException = require('./middlewares/catchGlobalException');
const app = new Koa();

// 注册一个全局异常处理中间件
app.use(catchGlobalException);
app.use(bodyparser());
app.use(serve(__dirname, 'public'));
app.use(
  nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true,
    },
  })
);
app.use(router.routes());

app.listen(3000, () => {
  console.log('listen 3000');
});
