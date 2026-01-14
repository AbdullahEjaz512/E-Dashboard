const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Visits</h3>
          <p className="text-3xl font-bold text-blue-600">24.5k</p>
          <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Bounce Rate</h3>
          <p className="text-3xl font-bold text-blue-600">42.5%</p>
          <p className="text-sm text-gray-500 mt-1">-2.1% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Page Views</h3>
          <p className="text-3xl font-bold text-blue-600">102.4k</p>
          <p className="text-sm text-gray-500 mt-1">+5.4% from last month</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-96 flex items-center justify-center">
        <p className="text-gray-400 font-medium">Detailed Analytics Chart Placeholder</p>
      </div>
    </div>
  );
};

export default Analytics;
