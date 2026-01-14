import React from 'react';
import { Mail, Phone, MoreHorizontal } from 'lucide-react';

const Customers = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Premium', status: 'Active', spent: '$1,200' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Basic', status: 'Active', spent: '$800' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Business', status: 'Inactive', spent: '$2,500' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Premium', status: 'Active', spent: '$3,100' },
    { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Basic', status: 'Active', spent: '$200' },
    { id: 6, name: 'Sarah Brown', email: 'sarah@example.com', role: 'Business', status: 'Active', spent: '$5,400' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                      customer.status === 'Active' 
                        ? 'bg-green-50 text-green-700 border-green-100' 
                        : 'bg-gray-100 text-gray-600 border-gray-100'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{customer.spent}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button className="text-gray-400 hover:text-blue-600"><Mail className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-green-600"><Phone className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-4 h-4" /></button>
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

export default Customers;
