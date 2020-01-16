const Router = require('koa-router');
const bookControler = require('../../controler/book');
const bookRouter = new Router({prefix: '/book'});

bookRouter.get('/latest', bookControler.getBookInfo);

module.exports = bookRouter;

