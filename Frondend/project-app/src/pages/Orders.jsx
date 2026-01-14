import { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [orders] = useState([
    { id: '#ORD-001', customer: 'John Doe', product: 'Premium Plan', amount: '$99.00', status: 'Completed', date: 'Jan 15, 2024' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Basic Plan', amount: '$49.00', status: 'Pending', date: 'Jan 15, 2024' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Pro Plan', amount: '$149.00', status: 'Completed', date: 'Jan 14, 2024' },
    { id: '#ORD-004', customer: 'Sarah Williams', product: 'Premium Plan', amount: '$99.00', status: 'Processing', date: 'Jan 14, 2024' },
    { id: '#ORD-005', customer: 'Robert Brown', product: 'Basic Plan', amount: '$49.00', status: 'Cancelled', date: 'Jan 13, 2024' },
    { id: '#ORD-006', customer: 'Emily Davis', product: 'Pro Plan', amount: '$149.00', status: 'Completed', date: 'Jan 12, 2024' },
    { id: '#ORD-007', customer: 'Michael Wilson', product: 'Premium Plan', amount: '$99.00', status: 'Completed', date: 'Jan 12, 2024' },
    { id: '#ORD-008', customer: 'Jessica Taylor', product: 'Basic Plan', amount: '$49.00', status: 'Pending', date: 'Jan 11, 2024' },
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-50 text-green-700 border-green-100';
      case 'Pending': return 'bg-yellow-50 text-yellow-700 border-yellow-100';
      case 'Processing': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Cancelled': return 'bg-red-50 text-red-700 border-red-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-blue-600 bg-transparent hover:bg-blue-50 p-2 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
