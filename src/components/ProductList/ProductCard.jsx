 
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
        <p className="text-violet-600 font-bold text-xl mt-2">${product.price}</p>
        <button
          className="w-full mt-3 bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;