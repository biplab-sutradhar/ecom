import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { fetchProducts } from '../services/api.js';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-2 text-gray-600">Discover our amazing collection</p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default HomePage;