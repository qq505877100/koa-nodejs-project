const BookService = require('../service/bookServic');

const getBookInfo = async (ctx) => {
  const bookInfo = await BookService.getBookInfo();
  ctx.body = {
    name: bookInfo,
  };
};

module.exports = {getBookInfo};
