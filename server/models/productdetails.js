const mongoose = require('mongoose');
const shortid = require('shortid');

const productSchema = new mongoose.Schema({
  productCategory: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    unique: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  origin: {
    type: String,
    required: true
  },
  costOfSupplies: {
    type: Number,
    required: true,
    min: 0
  }
});

productSchema.pre('save', function(next) {
  if (!this.idNumber) {
    this.idNumber = shortid.generate();
  }
  next();
});

const saleSchema = new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantitySold: {
      type: Number,
      required: true,
      min: 1
    },
    totalPrice: {
      type: Number,
      min: 0
    },
    date: {
      type: Date,
      default: Date.now
    }
});
  
const Product = mongoose.model('Product', productSchema);
const Sale = mongoose.model('Sale', saleSchema);

module.exports = { Product, Sale };
