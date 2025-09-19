import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <Link to={`/productimfro/${product.productid}`}>
      <div
        className="bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
        style={{ width: "350px", height: "450px" }}
      >
        {/* Image */}
        {product.image && product.image.length > 0 ? (
          <div className="w-full h-[60%] overflow-hidden">
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
          </div>
        ) : (
          <div className="w-full h-[60%] flex items-center justify-center bg-gray-200 text-gray-500">
            No Image
          </div>
        )}

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold truncate text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-500 mt-1 line-clamp-3">
              {product.describtion}
            </p>
          </div>
          <p className="text-green-700 font-bold mt-1 text-lg">
            LKR {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
