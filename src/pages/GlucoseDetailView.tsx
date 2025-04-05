
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeTabSelector from '../components/TimeTabSelector';
import DetailedGlucoseChart from '../components/DetailedGlucoseChart';
import SleepStagesVisual from '../components/SleepStagesVisual';
import AIInsightPanel from '../components/AIInsightPanel';
import { generateLastNightData, generateAIInsights } from '../utils/mockData';

const GlucoseDetailView = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'lastNight' | 'lastWeek'>('lastNight');
  const navigate = useNavigate();
  
  // Get simulated data
  const lastNightData = generateLastNightData();
  const insights = generateAIInsights(1);
  
  return (
    <div className="bg-oura-background text-oura-text min-h-screen p-4">
      <header className="py-4">
        <div className="flex items-center mb-4">
          <button className="mr-2" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Blood Sugar & Sleep</h1>
        </div>
        
        <TimeTabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
      
      <div className="mt-6">
        <div className="oura-card mb-4">
          <h2 className="text-lg font-medium mb-2">Glucose Impact on Sleep Quality</h2>
          
          <DetailedGlucoseChart data={lastNightData} />
          
          <div className="flex justify-between text-xs text-oura-textSecondary mt-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
              <span>Glucose</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span>HRV</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-0.5 bg-red-500 mr-1 stroke-dasharray-2"></div>
              <span>Threshold</span>
            </div>
          </div>
        </div>
        
        <div className="oura-card mb-4">
          <SleepStagesVisual 
            startTime={new Date(new Date().setHours(22, 0, 0))}
            endTime={new Date(new Date().setHours(8, 0, 0))}
          />
        </div>
        
        <div className="oura-card mb-4">
          <AIInsightPanel insight={insights[0]} isFullView={true} />
        </div>
      </div>
    </div>
  );
};

export default GlucoseDetailView;
