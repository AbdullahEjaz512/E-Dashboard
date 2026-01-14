import { useState } from 'react';
import { Search, Filter, Check, Clock, XCircle, Package, ChevronDown } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: '#ORD-001', customer: 'John Doe', product: 'Premium Plan', amount: '$99.00', status: 'Completed', date: 'Jan 15, 2024', avatar: 'JD' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Basic Plan', amount: '$49.00', status: 'Pending', date: 'Jan 15, 2024', avatar: 'JS' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Pro Plan', amount: '$149.00', status: 'Completed', date: 'Jan 14, 2024', avatar: 'MJ' },
    { id: '#ORD-004', customer: 'Sarah Williams', product: 'Premium Plan', amount: '$99.00', status: 'Processing', date: 'Jan 14, 2024', avatar: 'SW' },
    { id: '#ORD-005', customer: 'Robert Brown', product: 'Basic Plan', amount: '$49.00', status: 'Cancelled', date: 'Jan 13, 2024', avatar: 'RB' },
    { id: '#ORD-006', customer: 'Emily Davis', product: 'Business Plan', amount: '$199.00', status: 'Completed', date: 'Jan 13, 2024', avatar: 'ED' },
    { id: '#ORD-007', customer: 'Michael Chen', product: 'Premium Plan', amount: '$99.00', status: 'Pending', date: 'Jan 12, 2024', avatar: 'MC' },
    { id: '#ORD-008', customer: 'Lisa Anderson', product: 'Basic Plan', amount: '$49.00', status: 'Processing', date: 'Jan 12, 2024', avatar: 'LA' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showStatusMenu, setShowStatusMenu] = useState(null);

  const statusConfig = {
    'Completed': { color: 'bg-green-50 text-green-700 border-green-100', icon: Check },
    'Pending': { color: 'bg-yellow-50 text-yellow-700 border-yellow-100', icon: Clock },
    'Processing': { color: 'bg-blue-50 text-blue-700 border-blue-100', icon: Package },
    'Cancelled': { color: 'bg-red-50 text-red-700 border-red-100', icon: XCircle },
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    setShowStatusMenu(null);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: 'Total Orders', value: orders.length, color: 'text-blue-600' },
    { label: 'Completed', value: orders.filter(o => o.status === 'Completed').length, color: 'text-green-600' },
    { label: 'Pending', value: orders.filter(o => o.status === 'Pending').length, color: 'text-yellow-600' },
    { label: 'Processing', value: orders.filter(o => o.status === 'Processing').length, color: 'text-blue-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track all customer orders</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by order ID, customer, or product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => {
                const StatusIcon = statusConfig[order.status].icon;
                return (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                          {order.avatar}
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">{order.customer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative">
                        <button
                          onClick={() => setShowStatusMenu(showStatusMenu === order.id ? null : order.id)}
                          className={`px-3 py-1.5 inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border ${statusConfig[order.status].color} cursor-pointer hover:opacity-80 transition-opacity`}
                        >
                          <StatusIcon className="w-3.5 h-3.5" />
                          {order.status}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                        
                        {showStatusMenu === order.id && (
                          <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10 animate-in fade-in zoom-in duration-200">
                            {Object.keys(statusConfig).map((status) => {
                              const Icon = statusConfig[status].icon;
                              return (
                                <button
                                  key={status}
                                  onClick={() => handleStatusChange(order.id, status)}
                                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                                >
                                  <Icon className="w-4 h-4" />
                                  {status}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filteredOrders.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No orders found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
