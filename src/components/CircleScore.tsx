
import React from 'react';

interface CircleScoreProps {
  score: number;
  color: string;
  size?: 'large' | 'small';
  label?: string;
  showLabel?: boolean;
}

const CircleScore: React.FC<CircleScoreProps> = ({ 
  score, 
  color, 
  size = 'large',
  label,
  showLabel = false 
}) => {
  const isLarge = size === 'large';
  
  return (
    <div className={isLarge ? "oura-circle-score" : "oura-small-circle"}>
      <div className="flex flex-col items-center justify-center">
        <span className={isLarge ? "text-2xl font-bold" : "text-xs font-medium"}>
          {score}
        </span>
        {showLabel && label && (
          <span className="text-xs text-oura-textSecondary mt-0.5">
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

export default CircleScore;
