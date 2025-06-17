import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: String,
  subheading: String,
  productImages: [String],
  video: String,
  amount:Number,
  productFeatures: [
    {
      image: String,
      title: String,
      subheading: String
    }
  ], // ✅ Now this matches your request format

  specifications: [
    {
      category: String,
      data: {
        type: Map,
        of: String
      }
    }
  ],
  downloads: {
    android: String,
    ios: String,
    pdfManual: String
  }
}, { timestamps: true });


export default mongoose.models.ProductView || mongoose.model("ProductView", ProductSchema);;
