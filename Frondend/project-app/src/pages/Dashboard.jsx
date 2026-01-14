import { useState } from 'react';
import { TrendingUp, Users, ShoppingBag, CreditCard, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('Last 7 Days');

  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 6500 },
    { month: 'Mar', revenue: 4500 },
    { month: 'Apr', revenue: 8000 },
    { month: 'May', revenue: 5500 },
    { month: 'Jun', revenue: 7000 },
    { month: 'Jul', revenue: 8500 },
    { month: 'Aug', revenue: 6000 },
    { month: 'Sep', revenue: 7500 },
    { month: 'Oct', revenue: 9000 },
    { month: 'Nov', revenue: 7000 },
    { month: 'Dec', revenue: 9500 },
  ];

  const [stats] = useState([
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true, icon: CreditCard },
    { title: 'Total Users', value: '2,345', change: '+12.5%', positive: true, icon: Users },
    { title: 'Total Orders', value: '1,234', change: '+8.3%', positive: true, icon: ShoppingBag },
    { title: 'Conversion Rate', value: '3.2%', change: '-2.1%', positive: false, icon: TrendingUp },
  ]);

  const [recentOrders] = useState([
    { id: '#ORD-001', customer: 'John Doe', product: 'Premium Plan', amount: '$99.00', status: 'Completed', date: 'Jan 15, 2024' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Basic Plan', amount: '$49.00', status: 'Pending', date: 'Jan 15, 2024' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Pro Plan', amount: '$149.00', status: 'Completed', date: 'Jan 14, 2024' },
    { id: '#ORD-004', customer: 'Sarah Williams', product: 'Premium Plan', amount: '$99.00', status: 'Processing', date: 'Jan 14, 2024' },
    { id: '#ORD-005', customer: 'Robert Brown', product: 'Basic Plan', amount: '$49.00', status: 'Cancelled', date: 'Jan 13, 2024' },
  ]);

  const handleDownloadReport = () => {
    // Generate CSV data
    const csvData = [
      ['Dashboard Report', timeRange],
      [''],
      ['Metric', 'Value', 'Change'],
      ['Total Revenue', '$45,231', '+20.1%'],
      ['Total Users', '2,345', '+12.5%'],
      ['Total Orders', '1,234', '+8.3%'],
      ['Conversion Rate', '3.2%', '-2.1%'],
      [''],
      ['Revenue by Month'],
      ['Month', 'Revenue'],
      ...revenueData.map(d => [d.month, `$${d.revenue}`]),
      [''],
      ['Recent Orders'],
      ['Order ID', 'Customer', 'Product', 'Amount', 'Status', 'Date'],
      ...recentOrders.map(o => [o.id, o.customer, o.product, o.amount, o.status, o.date])
    ];

    // Convert to CSV string
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    
    // Create download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `dashboard-report-${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Welcome back, Abdullah Ejaz! Here&apos;s what&apos;s happening today.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="flex-1 sm:flex-none text-sm border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 cursor-pointer"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
          <button 
            onClick={handleDownloadReport}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-default">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`flex items-center text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.positive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={256}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* User Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="space-y-6">
            <div className="group cursor-default">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Direct Traffic</span>
                <span className="text-gray-900 font-bold">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 group-hover:w-[50%]" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Detailed Referrals</span>
                <span className="text-gray-900 font-bold">32%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:w-[40%]" style={{ width: '32%' }}></div>
              </div>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Social Media</span>
                <span className="text-gray-900 font-bold">23%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all duration-1000 group-hover:w-[30%]" style={{ width: '23%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Upcoming Tasks</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-600">Review weekly reports</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-gray-600">Meeting with dev team</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Update product roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
          <button onClick={() => navigate('/orders')} className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
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
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      {order.customer}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border 
                      ${order.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-100' : 
                        order.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                        order.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                        'bg-red-50 text-red-700 border-red-100'}`}>
                      {order.status}
                    </span>
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

export default Dashboard;
