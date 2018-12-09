const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  meta: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  title: String,
  category: Array,
  description: String,
  article: String,
  body: String,
});

articleSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = Date.now();
    this.meta.updatedAt = Date.now();
  } else {
    this.meta.updatedAt = Date.now();
  }

  next();
});

mongoose.model('Article', articleSchema);
