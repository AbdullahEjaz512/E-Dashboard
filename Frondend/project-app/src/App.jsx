import React, { useState } from 'react'

function App() {
  const [stats] = useState([
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true },
    { title: 'Total Users', value: '2,345', change: '+12.5%', positive: true },
    { title: 'Total Orders', value: '1,234', change: '+8.3%', positive: true },
    { title: 'Conversion Rate', value: '3.2%', change: '-2.1%', positive: false },
  ])

  const [recentOrders] = useState([
    { id: '#ORD-001', customer: 'John Doe', product: 'Premium Plan', amount: '$99', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Basic Plan', amount: '$49', status: 'Pending' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Pro Plan', amount: '$149', status: 'Completed' },
    { id: '#ORD-004', customer: 'Sarah Williams', product: 'Premium Plan', amount: '$99', status: 'Processing' },
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">E-Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                Notifications
              </button>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                AE
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Abdullah Ejaz!</h2>
          <p className="text-gray-600">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className={`text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 95].map((height, i) => (
                <div key={i} className="flex-1 bg-blue-600 rounded-t hover:bg-blue-700 transition-colors" 
                     style={{ height: `${height}%` }}
                     title={`Month ${i + 1}`}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between text-xs text-gray-600">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Active Users</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">New Signups</span>
                  <span className="font-semibold">456</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Returning Users</span>
                  <span className="font-semibold">789</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App