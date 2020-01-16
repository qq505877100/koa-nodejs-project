const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx);
  ctx.body = {
    key: 'hello world!',
  };
});

app.listen(3001, () => {
  console.log('listen 3001');
});
