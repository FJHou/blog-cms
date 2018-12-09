const mongoose = require('mongoose');

const Article = mongoose.model('Article');

class ArticleModel {
  async saveArticle(data) {
    return new Article(data).save((err, cates) => {
      if (err) {
        return err;
      }

      console.log(cates);
    });
  }

  async getArticleList() {
    return Article.find();
  }
}

module.exports = new ArticleModel();
