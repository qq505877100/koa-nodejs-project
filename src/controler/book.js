const BookService = require('../service/bookServic');

const getBookInfo = async (ctx) => {
  const bookInfo = await BookService.getBookInfo();
  await ctx.render('home/index', {bookName: bookInfo});
 /*  ctx.body = {
    name: bookInfo,
  }; */
};

module.exports = {getBookInfo};
