
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import TimeTabSelector from '../components/TimeTabSelector';
import ReadinessCard from '../components/ReadinessCard';
import SleepCard from '../components/SleepCard';
import GlucoseCard from '../components/GlucoseCard';
import InsightNotification from '../components/InsightNotification';
import { getDayData, generateAIInsights } from '../utils/mockData';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'lastNight' | 'lastWeek'>('today');
  const [data, setData] = useState(getDayData());
  const [notifications, setNotifications] = useState(generateAIInsights(1)); // Get just one insight for notification
  
  // Get day data when tab changes
  useEffect(() => {
    // In a real app, we'd fetch different data based on the activeTab
    setData(getDayData());
  }, [activeTab]);
  
  return (
    <div className="bg-oura-background text-oura-text min-h-screen p-4 pb-20">
      <header className="py-4">
        <h1 className="text-2xl font-bold text-center">Blood Sugar Sync</h1>
        <div className="flex justify-between mt-2">
          <span className="text-oura-textSecondary">{format(new Date(), 'EEEE, MMMM d')}</span>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <TimeTabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>
      
      <div className="mt-6">
        <ReadinessCard data={data.readiness} />
        <SleepCard data={data.sleep} />
        <GlucoseCard 
          glucoseData={data.glucose}
          insight={data.insights[0]}
        />
      </div>

      {/* Show notification (in a real app, this would be conditionally displayed) */}
      {notifications.length > 0 && <InsightNotification insight={notifications[0]} />}
    </div>
  );
};

export default Dashboard;
