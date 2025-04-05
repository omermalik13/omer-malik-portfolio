
import React from 'react';
import CircleScore from './CircleScore';
import { SleepData } from '../utils/mockData';
import { format } from 'date-fns';

interface SleepCardProps {
  data: SleepData;
}

const SleepCard: React.FC<SleepCardProps> = ({ data }) => {
  const sleepHours = Math.floor(data.totalSleepMinutes / 60);
  const sleepMinutes = data.totalSleepMinutes % 60;
  
  // Calculate percentages for the sleep stages
  const remPercent = (data.remSleepMinutes / data.totalSleepMinutes) * 100;
  const deepPercent = (data.deepSleepMinutes / data.totalSleepMinutes) * 100;
  const lightPercent = (data.lightSleepMinutes / data.totalSleepMinutes) * 100;
  const awakePercent = (data.awakeMinutes / (data.totalSleepMinutes + data.awakeMinutes)) * 100;
  
  return (
    <div className="oura-card mb-4">
      <h2 className="text-lg font-medium mb-2">Sleep</h2>
      <div className="flex items-center">
        <CircleScore score={data.score} color="#A45FDB" size="large" />
        <div className="ml-4 w-full">
          <div className="h-8 bg-oura-cardDark rounded-lg flex overflow-hidden">
            <div className="bg-gray-600" style={{ width: `${awakePercent}%` }} />
            <div className="bg-blue-600" style={{ width: `${lightPercent}%` }} />
            <div className="bg-indigo-900" style={{ width: `${deepPercent}%` }} />
            <div className="bg-purple-600" style={{ width: `${remPercent}%` }} />
          </div>
          <div className="flex justify-between mt-1">
            <div className="text-xs text-oura-textSecondary">
              {format(data.startTime, 'h:mm a')}
            </div>
            <div className="text-xs">
              {sleepHours}h {sleepMinutes}m
            </div>
            <div className="text-xs text-oura-textSecondary">
              {format(data.endTime, 'h:mm a')}
            </div>
          </div>
          
          <div className="flex mt-3 text-xs">
            <div className="flex items-center mr-3">
              <div className="w-2 h-2 bg-gray-600 rounded-sm mr-1"></div>
              <span>Awake</span>
            </div>
            <div className="flex items-center mr-3">
              <div className="w-2 h-2 bg-blue-600 rounded-sm mr-1"></div>
              <span>Light</span>
            </div>
            <div className="flex items-center mr-3">
              <div className="w-2 h-2 bg-indigo-900 rounded-sm mr-1"></div>
              <span>Deep</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-sm mr-1"></div>
              <span>REM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepCard;
