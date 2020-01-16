const Router = require('koa-router');
const BookRouter = require('./v1/book');

const router = new Router({
  prefix: '/v1',
});

router.use(BookRouter.routes());
module.exports = router;
