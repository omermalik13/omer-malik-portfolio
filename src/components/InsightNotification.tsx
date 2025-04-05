
import React, { useState } from 'react';
import { AIInsight } from '../utils/mockData';
import { useNavigate } from 'react-router-dom';

interface InsightNotificationProps {
  insight: AIInsight;
}

const InsightNotification: React.FC<InsightNotificationProps> = ({ insight }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  
  const dismissNotification = () => {
    setShowNotification(false);
  };

  const handleViewDetails = () => {
    navigate('/glucose-detail');
  };
  
  if (!showNotification) return null;
  
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-oura-card rounded-xl p-4 shadow-lg border border-gray-800 animate-slide-in-right">
      <div className="flex justify-between items-start">
        <div className="flex items-start">
          <div className="rounded-full bg-purple-600 p-2 mr-3 mt-1 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Blood Sugar Sync Alert</h3>
            <p className="text-sm mt-1 text-gray-300">
              {insight.type === 'glucose_spike' 
                ? 'Late dinner spike detected - affected sleep quality' 
                : insight.type === 'poor_sleep'
                  ? 'Sleep disruption detected - check glucose impact'
                  : 'Good recovery detected - stable glucose levels'}
            </p>
          </div>
        </div>
        <button onClick={dismissNotification} className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <button 
        className="text-blue-400 text-sm mt-2 flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Show more'}
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transform ${expanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {expanded && (
        <div className="mt-3">
          <div className="bg-oura-cardDark rounded-lg p-3">
            <p className="text-sm">{insight.text}</p>
          </div>
          
          <div className="mt-3">
            <p className="text-sm font-medium text-blue-400">Suggestion</p>
            <p className="text-sm mt-1">{insight.suggestion}</p>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <button 
              className="flex-1 bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 rounded-lg"
              onClick={handleViewDetails}
            >
              View Details
            </button>
            <button 
              className="flex-1 bg-oura-cardDark hover:bg-gray-800 transition-colors text-white py-2 rounded-lg"
              onClick={dismissNotification}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightNotification;
