
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clock, Share2, Heart, BarChart2, ArrowRight, Users, User, Home, Smartphone } from 'lucide-react';

const StravaPulseFlowchart = () => {
  return (
    <div className="my-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Strava Pulse Feature Flow</h2>
      
      <div className="space-y-8">
        {/* Entry Point */}
        <div className="flex flex-col items-center">
          <div className="w-48 rounded-lg bg-[#fc4c02]/10 border border-[#fc4c02]/30 p-3 text-center">
            <div className="flex justify-center mb-2">
              <Smartphone className="h-5 w-5 text-[#fc4c02]" />
            </div>
            <div className="text-sm font-medium">User Opens Strava App</div>
          </div>
          <div className="h-6 border-l border-gray-300"></div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex flex-col items-center">
          <div className="w-64 rounded-lg bg-gray-100 border border-gray-200 p-3">
            <div className="text-sm font-medium text-center mb-2">Main Navigation</div>
            <div className="flex justify-between px-4">
              <div className="flex flex-col items-center">
                <Home className="h-4 w-4 text-gray-600 mb-1" />
                <span className="text-xs">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-4 w-4 text-gray-600 mb-1" />
                <span className="text-xs">Groups</span>
              </div>
              <div className="flex flex-col items-center">
                <Activity className="h-4 w-4 text-[#fc4c02] mb-1" />
                <span className="text-xs text-[#fc4c02]">Pulse</span>
              </div>
              <div className="flex flex-col items-center">
                <User className="h-4 w-4 text-gray-600 mb-1" />
                <span className="text-xs">You</span>
              </div>
            </div>
          </div>
          <div className="h-6 border-l border-gray-300"></div>
        </div>
        
        {/* Pulse Dashboard */}
        <div className="flex flex-col items-center">
          <div className="w-72 rounded-lg bg-[#fc4c02]/10 border border-[#fc4c02]/30 p-3">
            <div className="text-center mb-2 font-medium">Pulse Dashboard</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded p-2 text-center border border-gray-200">
                <div className="flex justify-center mb-1">
                  <Activity className="h-4 w-4 text-[#fc4c02]" />
                </div>
                <span className="text-xs">Recovery Score</span>
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200">
                <div className="flex justify-center mb-1">
                  <Heart className="h-4 w-4 text-[#fc4c02]" />
                </div>
                <span className="text-xs">Recovery Metrics</span>
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200">
                <div className="flex justify-center mb-1">
                  <BarChart2 className="h-4 w-4 text-[#fc4c02]" />
                </div>
                <span className="text-xs">Training Load</span>
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200">
                <div className="flex justify-center mb-1">
                  <Share2 className="h-4 w-4 text-[#fc4c02]" />
                </div>
                <span className="text-xs">Shareable Cards</span>
              </div>
            </div>
          </div>
          <div className="h-6 border-l border-gray-300"></div>
        </div>
        
        {/* Data Sources */}
        <div className="flex flex-col items-center">
          <div className="w-80 rounded-lg bg-blue-50 border border-blue-200 p-3">
            <div className="text-sm font-medium text-center mb-3">Data Sources</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded p-2 text-center border border-gray-200 text-xs">
                Apple Health
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200 text-xs">
                Oura Ring
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200 text-xs">
                Strava Activities
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200 text-xs">
                User Historical Data
              </div>
            </div>
          </div>
          <div className="h-6 border-l border-gray-300"></div>
        </div>
        
        {/* User Decision */}
        <div className="flex flex-col items-center">
          <div className="w-72 rounded-lg bg-green-50 border border-green-200 p-3">
            <div className="text-sm font-medium text-center mb-3">User Decision</div>
            <div className="flex gap-4 justify-center">
              <div className="bg-white rounded p-2 text-center border border-gray-200 flex-1 text-xs">
                Schedule Workout
              </div>
              <div className="bg-white rounded p-2 text-center border border-gray-200 flex-1 text-xs">
                Take Rest Day
              </div>
            </div>
          </div>
        </div>
        
        {/* Future Features */}
        <div className="mt-8 border-t border-dashed border-gray-300 pt-6">
          <div className="text-center text-sm font-medium mb-4 text-gray-500">Future Expansion</div>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-gray-50 rounded-full px-3 py-1 text-center border border-gray-200 text-xs">
              Glucose Integration
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1 text-center border border-gray-200 text-xs">
              AI Coach
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1 text-center border border-gray-200 text-xs">
              Recovery Challenges
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1 text-center border border-gray-200 text-xs">
              Brand Partnerships
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaPulseFlowchart;
