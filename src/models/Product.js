import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  productName: String,
  productSubheading: String,
  productFeatures: [String],
  productImages: [String],
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
