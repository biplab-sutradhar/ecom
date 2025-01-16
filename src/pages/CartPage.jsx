import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          <p className="mt-2 text-gray-600">{cart.length} items in your cart</p>
        </header>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
            <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-violet-600 font-semibold">${item.price}</p>
                  </div>
                  <button
                    className="flex-shrink-0 text-sm font-medium text-red-600 hover:text-red-800 transition-colors px-4 py-2 rounded-md hover:bg-red-50"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gray-50 rounded-b-lg">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-gray-900">Total</span>
                <span className="text-2xl font-bold text-violet-600">
                  ${calculateTotal()}
                </span>
              </div>
              <button className="mt-6 w-full bg-violet-600 text-white py-3 px-4 rounded-md hover:bg-violet-700 transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;