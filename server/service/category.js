const CategoryModel = require('../model/Category');

class CategoroyService {
  async categoryList() {
    const data = await CategoryModel.getCategoryList();

    return {
      data,
    };
  }

  async addCategory(val) {
    const data = await CategoryModel.addCategory(val);

    return {
      data,
    };
  }

  async deleteCategory(val) {
    const data = await CategoryModel.deleteCategory(val);

    return {
      data,
    };
  }

  async updateCategory(val) {
    const data = await CategoryModel.updateCategory(val);

    return {
      data,
    };
  }
}

module.exports = new CategoroyService();
