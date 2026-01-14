import { useState } from 'react';
import { Search, Filter, Plus, PenSquare, Trash2, X, Check } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Dashboard UI', category: 'Digital', price: '$99.00', stock: 'Unlimited', sales: 1234 },
    { id: 2, name: 'React Component Lib', category: 'Development', price: '$49.00', stock: 'Unlimited', sales: 856 },
    { id: 3, name: 'E-Commerce Template', category: 'Template', price: '$79.00', stock: 'Unlimited', sales: 543 },
    { id: 4, name: 'Admin Dashboard Pro', category: 'Admin', price: '$129.00', stock: 'Unlimited', sales: 321 },
    { id: 5, name: 'Figma Design System', category: 'Design', price: '$59.00', stock: 'Unlimited', sales: 987 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Digital',
    price: '',
    stock: 'Unlimited'
  });

  const categories = ['All', 'Digital', 'Development', 'Template', 'Admin', 'Design'];

  const handleAddProduct = (e) => {
    e.preventDefault();
    const id = products.length + 1;
    // Format price if user didn't add $
    let formattedPrice = newProduct.price;
    if (!formattedPrice.startsWith('$')) {
        formattedPrice = `$${formattedPrice}`;
    }

    const productToAdd = {
        id,
        sales: 0,
        ...newProduct,
        price: formattedPrice
    };

    setProducts([productToAdd, ...products]);
    setIsModalOpen(false);
    setNewProduct({ name: '', category: 'Digital', price: '', stock: 'Unlimited' });
  };

  const handleDelete = (id, productName) => {
    if(confirm(`Are you sure you want to delete ${productName}?`)) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleEdit = (productName) => {
    // For now, keep as mock, or we could implement edit modal reusing the add modal
    alert(`Edit feature for ${productName} coming soon!`);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          
          <div className="relative">
            <button 
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className={`p-2 border rounded-lg hover:bg-gray-50 transition-colors ${selectedCategory !== 'All' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-600'}`}
            >
                <Filter className="w-5 h-5" />
            </button>
            
            {showFilterMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Filter by Category</div>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setShowFilterMenu(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex justify-between items-center"
                        >
                            <span className={selectedCategory === cat ? 'font-medium text-blue-600' : 'text-gray-700'}>
                                {cat}
                            </span>
                            {selectedCategory === cat && <Check className="w-4 h-4 text-blue-600" />}
                        </button>
                    ))}
                </div>
            )}
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      {/* Filter Chips - visible if a filter is active */}
      {selectedCategory !== 'All' && (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Filtered by:</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} className="hover:text-blue-600 ml-1">
                    <X className="w-3 h-3" />
                </button>
            </span>
            <button onClick={() => setSelectedCategory('All')} className="text-sm text-blue-600 hover:underline ml-2">Clear all</button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => handleEdit(product.name)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <PenSquare className="w-4 h-4" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(product.id, product.name)}
                  className="flex items-center justify-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
                No products found matching your criteria.
            </div>
        )}
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Add New Product</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddProduct} className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Product Name</label>
                <input 
                  type="text" 
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                  placeholder="e.g. Dashboard Clean"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <select 
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                    >
                        {categories.filter(c => c !== 'All').map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Price</label>
                    <input 
                        type="text" 
                        required
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        placeholder="$0.00"
                    />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Stock Status</label>
                <select 
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                >
                    <option value="Unlimited">Unlimited</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
