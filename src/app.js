const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
const nunjucks = require('koa-nunjucks-2');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();

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

app.listen(3001, () => {
  console.log('listen 3001');
});
