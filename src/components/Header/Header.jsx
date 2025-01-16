import { Link } from 'react-router-dom'; 
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">E-Commerce Store</Link>
        </h1>
        <nav className="flex space-x-4">
          
          <Link to="/cart" className="text-lg hover:text-gray-200">
            Cart ({cart.length})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
