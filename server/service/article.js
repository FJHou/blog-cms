const ArticleModel = require('../model/Article');

class ArticleService {
  async saveArticle(val) {
    const data = await ArticleModel.saveArticle(val);

    return {
      data,
    };
  }
  async getArticleList() {
    const data = await ArticleModel.getArticleList();

    return data;
  }
}

module.exports = new ArticleService();
