const mongoose = require('mongoose');

const Category = mongoose.model('Category');

class CategoryModel {
  /**
   * 添加分类
   * @param {*} name 分类名称
   * @param {*} abbr 缩写
   */
  async addCategory(val) {
    // console.log(val);
    return new Category(val).save((err, cates) => {
      if (err) {
        return err;
      }

      return cates;
    });
  }

  async deleteCategory(val) {
    return Category.remove(val, (err) => {
      if (err) {
        return err;
      }

      return {
        meta: {
          status: '200',
          message: '删除成功',
        },
      };
    });
  }

  async updateCategory(val) {
    const {
      _id,
      name,
      shortName,
    } = val;

    return Category.update({
      _id,
    }, {
      name,
      shortName,
    }, (err) => {
      if (err) {
        return err;
      }

      return {
        meta: {
          status: '200',
          message: '更新成功',
        },
      };
    });
  }

  async getCategoryList() {
    return Category.find();
  }
}

module.exports = new CategoryModel();
