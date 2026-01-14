import { User, Mail, MapPin, Building, Camera } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div className="relative pt-12 flex flex-col sm:flex-row items-end sm:items-center gap-6">
            <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
                        AE
                    </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors shadow-sm">
                    <Camera className="w-4 h-4" />
                </button>
            </div>
            <div className="flex-1 mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Abdullah Ejaz</h3>
                <p className="text-gray-600">Admin &bull; Product Manager</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> abdullah@example.com</span>
                    <span className="flex items-center gap-1"><Building className="w-4 h-4" /> TechCorp Inc.</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> New York, USA</span>
                </div>
            </div>
            <div className="mb-2">
                <button 
                  onClick={() => alert('Save functionality would go here')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
                >
                    Save Changes
                </button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Details Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" defaultValue="Abdullah" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" defaultValue="Ejaz" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" defaultValue="abdullah@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
                </div>
                <div className="md:col-span-2 space-y-2">
                   <label className="text-sm font-medium text-gray-700">Bio</label>
                   <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24 transition-shadow" defaultValue="Product Manager with 5+ years of experience in SaaS applications."></textarea>
                </div>
            </div>
        </div>

        {/* Change Password / Account Status */}
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Account Security</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                    </div>
                    <button className="w-full py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors">
                        Update Password
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
