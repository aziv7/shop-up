import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  category: String,
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product;
