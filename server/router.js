const userController = require('./controller/user');
const categoryController = require('./controller/category');
const articleController = require('./controller/article');

module.exports = (router) => {
  router.prefix('/api');
  router
    .get('/profile', userController.profile)
    .post('/login', userController.login)
    .post('/register', userController.register)
    .post('/logout', userController.logout)
    .get('/category/list', categoryController.categoryList)
    .post('/category/add', categoryController.addCategory)
    .post('/category/delete', categoryController.deleteCategory)
    .post('/category/update', categoryController.updateCategory)
    .post('/article/save', articleController.saveArticle)
    .post('/article/list', articleController.getArticleList);
};
