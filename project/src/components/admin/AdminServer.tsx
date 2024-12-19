import React, { useState } from 'react';
import { Server, Database, Settings } from 'lucide-react';

export default function AdminServer() {
  const [serverStatus, setServerStatus] = useState('online');
  const [databaseStatus, setDatabaseStatus] = useState('connected');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Server Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Server Status Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Node.js Server</h3>
            <Server className="h-6 w-6 text-green-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Status</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                serverStatus === 'online' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {serverStatus}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Uptime</span>
              <span>24h 13m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Memory Usage</span>
              <span>456MB / 1GB</span>
            </div>
          </div>
        </div>

        {/* Database Status Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Database</h3>
            <Database className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Status</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                databaseStatus === 'connected' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {databaseStatus}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Connections</span>
              <span>23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Storage Usage</span>
              <span>2.3GB / 5GB</span>
            </div>
          </div>
        </div>

        {/* Settings Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Settings</h3>
            <Settings className="h-6 w-6 text-gray-600" />
          </div>
          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Debug Mode</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              </label>
            </div>
            <div>
              <label className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Maintenance Mode</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              </label>
            </div>
            <button className="btn btn-primary w-full mt-4">
              Apply Changes
            </button>
          </div>
        </div>
      </div>

      {/* Logs Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Server Logs</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm h-64 overflow-y-auto">
          <div className="space-y-2">
            <div className="text-green-400">[INFO] Server started successfully</div>
            <div className="text-blue-400">[DEBUG] Database connection established</div>
            <div className="text-yellow-400">[WARN] High memory usage detected</div>
            <div className="text-red-400">[ERROR] Failed to process request: /api/products</div>
          </div>
        </div>
      </div>
    </div>
  );
}