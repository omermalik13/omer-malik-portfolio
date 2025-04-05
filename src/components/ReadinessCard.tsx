
import React from 'react';
import CircleScore from './CircleScore';
import { ReadinessData } from '../utils/mockData';

interface ReadinessCardProps {
  data: ReadinessData;
}

const ReadinessCard: React.FC<ReadinessCardProps> = ({ data }) => {
  return (
    <div className="oura-card mb-4">
      <h2 className="text-lg font-medium mb-2">Readiness</h2>
      <div className="flex items-center">
        <CircleScore score={data.score} color="#5D8FD9" size="large" />
        <div className="ml-4">
          <div className="flex items-center mb-3">
            <CircleScore score={data.hrvScore} color="#5D8FD9" size="small" />
            <div>
              <span className="ml-1">HRV</span>
              <p className="text-xs text-oura-textSecondary ml-1">{data.hrvValue} ms</p>
            </div>
          </div>
          <div className="flex items-center">
            <CircleScore score={80} color="#5D8FD9" size="small" />
            <div>
              <span className="ml-1">Resting HR</span>
              <p className="text-xs text-oura-textSecondary ml-1">{data.restingHR} bpm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadinessCard;
