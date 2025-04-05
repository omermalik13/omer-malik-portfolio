
import React from 'react';
import { format } from 'date-fns';

interface SleepStagesVisualProps {
  startTime: Date;
  endTime: Date;
}

const SleepStagesVisual: React.FC<SleepStagesVisualProps> = ({ startTime, endTime }) => {
  // This is a simplified visual representation
  // In a real app, we would use actual sleep stage data
  return (
    <>
      <h2 className="text-lg font-medium mb-4">Sleep Stages</h2>
      <div className="h-12 bg-oura-cardDark rounded-lg flex overflow-hidden mb-2">
        <div className="bg-gray-600 w-1/12" title="Awake"></div>
        <div className="bg-blue-600 w-2/12" title="Light Sleep"></div>
        <div className="bg-blue-900 w-2/12" title="Light Sleep"></div>
        <div className="bg-indigo-900 w-1/12" title="Deep Sleep"></div>
        <div className="bg-purple-600 w-1/12" title="REM"></div>
        <div className="bg-blue-800 w-2/12" title="Light Sleep"></div>
        <div className="bg-indigo-900 w-1/12" title="Deep Sleep"></div>
        <div className="bg-purple-600 w-1/12" title="REM"></div>
        <div className="bg-gray-600 w-1/12" title="Awake"></div>
      </div>
      <div className="flex justify-between text-xs text-oura-textSecondary">
        <span>{format(startTime, 'h:mm a')}</span>
        <span>{format(new Date((startTime.getTime() + endTime.getTime()) / 2), 'h:mm a')}</span>
        <span>{format(endTime, 'h:mm a')}</span>
      </div>
      <div className="flex mt-3 text-xs">
        <div className="flex items-center mr-3">
          <div className="w-3 h-3 bg-gray-600 rounded-sm mr-1"></div>
          <span>Awake</span>
        </div>
        <div className="flex items-center mr-3">
          <div className="w-3 h-3 bg-blue-600 rounded-sm mr-1"></div>
          <span>Light</span>
        </div>
        <div className="flex items-center mr-3">
          <div className="w-3 h-3 bg-indigo-900 rounded-sm mr-1"></div>
          <span>Deep</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-600 rounded-sm mr-1"></div>
          <span>REM</span>
        </div>
      </div>
    </>
  );
};

export default SleepStagesVisual;
