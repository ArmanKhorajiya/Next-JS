
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Electronics",
        "Books",
        "Furniture",
        "Accessories",
        "Other",
      ],
    },

    condition: {
      type: String,
      required: true,
      enum: ["Like New", "Good", "Fair"],
    },

    type: {
      type: String,
      required: true,
      enum: ["Sale", "Free", "Exchange"],
    },

    price: {
      type: Number,
      min: 0,
      default: 0,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    seller: {
      type: String,
      required: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema);

export default Product;
