
import React from 'react';

interface TimeTabSelectorProps {
  activeTab: 'today' | 'lastNight' | 'lastWeek';
  setActiveTab: (tab: 'today' | 'lastNight' | 'lastWeek') => void;
}

const TimeTabSelector: React.FC<TimeTabSelectorProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="oura-tab-container">
      <button 
        className={`oura-tab ${activeTab === 'today' ? 'oura-tab-active' : ''}`}
        onClick={() => setActiveTab('today')}
      >
        Today
      </button>
      <button 
        className={`oura-tab ${activeTab === 'lastNight' ? 'oura-tab-active' : ''}`}
        onClick={() => setActiveTab('lastNight')}
      >
        Last Night
      </button>
      <button 
        className={`oura-tab ${activeTab === 'lastWeek' ? 'oura-tab-active' : ''}`}
        onClick={() => setActiveTab('lastWeek')}
      >
        Last 7 Days
      </button>
    </div>
  );
};

export default TimeTabSelector;
