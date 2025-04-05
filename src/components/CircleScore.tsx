
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
  const circumference = isLarge ? 280 : 100; // 2*π*r where r=large:45 or small:16
  
  return (
    <div className={isLarge ? "oura-circle-score" : "oura-small-circle"}>
      <svg viewBox="0 0 100 100" className="absolute">
        <circle 
          cx="50" cy="50" r={isLarge ? "45" : "40"}
          fill="none" 
          stroke="#333" 
          strokeWidth={isLarge ? "8" : "6"}
        />
        <circle 
          cx="50" cy="50" r={isLarge ? "45" : "40"}
          fill="none" 
          stroke={color}
          strokeWidth={isLarge ? "8" : "6"}
          strokeDasharray={`${circumference * score / 100} ${circumference}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
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
