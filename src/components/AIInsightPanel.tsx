
import React from 'react';
import { AIInsight } from '../utils/mockData';

interface AIInsightPanelProps {
  insight: AIInsight;
  isFullView?: boolean;
}

const AIInsightPanel: React.FC<AIInsightPanelProps> = ({ insight, isFullView = false }) => {
  return (
    <div className={`${isFullView ? 'mt-0' : 'mt-4'} oura-cardDark p-4 rounded-lg`}>
      <div className="flex items-start">
        <div className="rounded-full bg-purple-600 p-2 mr-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="font-medium text-lg">AI Sleep Analysis</h3>
          <p className="text-sm mt-2">{insight.text}</p>
          <div className="mt-3 bg-oura-card rounded-lg p-3">
            <p className="text-sm font-medium text-blue-400">Suggestion</p>
            <p className="text-sm mt-1">{insight.suggestion}</p>
          </div>

          {isFullView && (
            <div className="mt-4 flex space-x-3">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 rounded-lg">
                Save Insight
              </button>
              <button className="flex-1 bg-oura-card hover:bg-oura-cardDark transition-colors text-white py-2 rounded-lg">
                Dismiss
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsightPanel;
