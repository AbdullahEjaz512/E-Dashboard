import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const Products = () => {
  const [products] = useState([
    { id: 1, name: 'Premium Dashboard UI', category: 'Digital', price: '$99.00', stock: 'Unlimited', sales: 1234 },
    { id: 2, name: 'React Component Lib', category: 'Development', price: '$49.00', stock: 'Unlimited', sales: 856 },
    { id: 3, name: 'E-Commerce Template', category: 'Template', price: '$79.00', stock: 'Unlimited', sales: 543 },
    { id: 4, name: 'Admin Dashboard Pro', category: 'Admin', price: '$129.00', stock: 'Unlimited', sales: 321 },
    { id: 5, name: 'Figma Design System', category: 'Design', price: '$59.00', stock: 'Unlimited', sales: 987 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600">
            <Filter className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                📦
              </div>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                {product.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
            
            <div className="mt-auto space-y-3 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sales</span>
                <span className="font-semibold text-gray-900">{product.sales}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Stock</span>
                <span className="font-semibold text-green-600">{product.stock}</span>
              </div>
              <button className="w-full mt-2 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                Edit Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
