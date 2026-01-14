import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Eye, MousePointer, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days');

  // Traffic data over time
  const trafficData = [
    { date: 'Jan 1', visits: 4200, pageViews: 8400, bounceRate: 42 },
    { date: 'Jan 5', visits: 3800, pageViews: 7600, bounceRate: 45 },
    { date: 'Jan 10', visits: 5100, pageViews: 10200, bounceRate: 38 },
    { date: 'Jan 15', visits: 6200, pageViews: 12400, bounceRate: 35 },
    { date: 'Jan 20', visits: 5800, pageViews: 11600, bounceRate: 40 },
    { date: 'Jan 25', visits: 7100, pageViews: 14200, bounceRate: 32 },
    { date: 'Jan 30', visits: 8500, pageViews: 17000, bounceRate: 28 },
  ];

  // Traffic sources
  const trafficSources = [
    { name: 'Direct', value: 4500, percentage: 45, color: '#3B82F6' },
    { name: 'Organic Search', value: 3200, percentage: 32, color: '#10B981' },
    { name: 'Social Media', value: 1500, percentage: 15, color: '#F59E0B' },
    { name: 'Referral', value: 800, percentage: 8, color: '#8B5CF6' },
  ];

  // User demographics
  const demographicsData = [
    { age: '18-24', users: 1200 },
    { age: '25-34', users: 3500 },
    { age: '35-44', users: 2800 },
    { age: '45-54', users: 1500 },
    { age: '55+', users: 800 },
  ];

  // Page performance
  const pagePerformance = [
    { page: '/dashboard', views: 12500, avgTime: '3:24' },
    { page: '/products', views: 8200, avgTime: '4:12' },
    { page: '/analytics', views: 5600, avgTime: '2:45' },
    { page: '/customers', views: 4100, avgTime: '3:05' },
    { page: '/settings', views: 2300, avgTime: '1:52' },
  ];

  const stats = [
    { title: 'Total Visits', value: '24.5k', change: '+12.3%', positive: true, icon: Users, color: 'blue' },
    { title: 'Page Views', value: '102.4k', change: '+5.4%', positive: true, icon: Eye, color: 'green' },
    { title: 'Bounce Rate', value: '42.5%', change: '-2.1%', positive: true, icon: MousePointer, color: 'purple' },
    { title: 'Avg. Duration', value: '3m 24s', change: '+8.7%', positive: true, icon: TrendingUp, color: 'orange' },
  ];

  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
          <p className="text-sm text-gray-500 mt-1">Track your website performance and user behavior</p>
        </div>
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="text-sm border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${colorMap[stat.color]}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`flex items-center text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm text-gray-500 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Traffic Overview Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">Traffic Overview</h3>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-600">Visits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600">Page Views</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              labelStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="visits" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorVisits)" />
            <Area type="monotone" dataKey="pageViews" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorPageViews)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="flex items-center justify-center mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                  <span className="text-sm text-gray-600">{source.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-900">{source.value.toLocaleString()}</span>
                  <span className="text-xs text-gray-500 w-12 text-right">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Demographics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">User Demographics</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={demographicsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="age" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              />
              <Bar dataKey="users" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Page Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Top Pages Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Page</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Views</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Avg. Time</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pagePerformance.map((page, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 text-sm font-medium text-gray-900">{page.page}</td>
                  <td className="py-4 text-sm text-gray-600 text-right">{page.views.toLocaleString()}</td>
                  <td className="py-4 text-sm text-gray-600 text-right">{page.avgTime}</td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-blue-500 h-full rounded-full" 
                          style={{ width: `${(page.views / 12500) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-10 text-right">
                        {Math.round((page.views / 12500) * 100)}%
                      </span>
                    </div>
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

export default Analytics;
