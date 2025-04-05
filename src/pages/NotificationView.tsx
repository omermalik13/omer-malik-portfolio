
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateAIInsights } from '../utils/mockData';
import { format } from 'date-fns';

const NotificationView = () => {
  const navigate = useNavigate();
  const insights = generateAIInsights(5); // Get multiple insights for the notifications screen
  
  return (
    <div className="bg-oura-background text-oura-text min-h-screen p-4">
      <header className="py-4">
        <div className="flex items-center mb-4">
          <button className="mr-2" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Notifications</h1>
        </div>
      </header>
      
      <div className="mt-2">
        {insights.map((insight, index) => (
          <div key={insight.id} className="oura-card mb-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-start">
              <div className="rounded-full bg-purple-600 p-2 mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">Blood Sugar Sync Alert</h3>
                  <span className="text-xs text-oura-textSecondary">{format(insight.date, 'MMM d')}</span>
                </div>
                <p className="text-sm mt-1">{insight.text}</p>
                <div className="mt-2">
                  <button 
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                    onClick={() => navigate('/glucose-detail')}
                  >
                    View details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationView;
