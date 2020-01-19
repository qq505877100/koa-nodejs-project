const BookService = require('../service/bookServic');
const { ParamsErrorException } = require('../model/CatchException');

const getBookInfo = async (ctx) => {
  const bookInfo = await BookService.getBookInfo();
  // await ctx.render('home/index', {bookName: bookInfo});
  throw new ParamsErrorException('自定义异常发生', 111);

  ctx.body = {
    name: bookInfo,
  };
};

const getFirstBook = async (ctx) => {
  const bookInfo = await BookService.getBookInfo();
  // await ctx.render('home/index', {bookName: bookInfo});
  // throw new Error('未知异常发生');
  ctx.body = {
    name: '我是第一本書記！！！',
  };
};

module.exports = {getBookInfo, getFirstBook};
