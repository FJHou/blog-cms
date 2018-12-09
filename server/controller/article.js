const ArticleService = require('../service/article');

class ArticleController {
  async saveArticle(ctx) {
    const res = await ArticleService.saveArticle(ctx.request.body);
    console.log(res);
    return ctx.response.body = {
      status: 200,
      message: '添加成功',
    };
  }

  async getArticleList(ctx) {
    const res = await ArticleService.getArticleList();

    return ctx.response.body = {
      status: 200,
      message: '查询成功',
      data: res,
    };
  }
}

module.exports = new ArticleController();
