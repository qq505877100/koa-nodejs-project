const Router = require('koa-router');
const bookControler = require('../../controler/book');
const bookRouter = new Router({prefix: '/book'});

bookRouter.get('/latest', bookControler.getBookInfo);
bookRouter.get('/first', bookControler.getFirstBook);


// asd test
module.exports = bookRouter;

