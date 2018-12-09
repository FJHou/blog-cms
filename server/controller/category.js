const categoryService = require('../service/category');

class CategoryController {
  async categoryList(ctx) {
    const res = await categoryService.categoryList();

    return ctx.body = res.data;
  }

  async addCategory(ctx) {
    const res = await categoryService.addCategory(ctx.request.body);

    return ctx.response.body = {
      status: 200,
      message: '添加成功',
      data: res,
    };
  }

  async deleteCategory(ctx) {
    const res = await categoryService.deleteCategory(ctx.request.body);

    return ctx.response.body = res;
  }

  async updateCategory(ctx) {
    const res = await categoryService.updateCategory(ctx.request.body);

    return ctx.response.body = res;
  }
}

module.exports = new CategoryController();
