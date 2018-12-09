const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId

const categorySchema = new Schema({
  name: String,
  shortName: String,
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
});

categorySchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = Date.now();
    this.meta.updatedAt = Date.now();
  } else {
    this.meta.updatedAt = Date.now();
  }

  next();
});

mongoose.model('Category', categorySchema);
