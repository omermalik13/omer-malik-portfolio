
import React from 'react';
import { Heart, Activity, Moon } from 'lucide-react';

interface CircleScoreProps {
  score: number;
  color: string;
  size?: 'large' | 'small';
  label?: string;
  showLabel?: boolean;
  icon?: 'heart' | 'activity' | 'moon' | undefined;
}

const CircleScore: React.FC<CircleScoreProps> = ({ 
  score, 
  color, 
  size = 'large',
  label,
  showLabel = false,
  icon
}) => {
  const isLarge = size === 'large';
  const circumference = isLarge ? 280 : 100; // 2*π*r where r=large:45 or small:16
  
  return (
    <div className={isLarge ? "oura-circle-score relative" : "oura-small-circle relative"}>
      <svg viewBox="0 0 100 100" className={`absolute ${isLarge ? "h-20 w-20" : "h-8 w-8"}`}>
        <circle 
          cx="50" cy="50" r={isLarge ? "40" : "35"}
          fill="none" 
          stroke="#333" 
          strokeWidth={isLarge ? "6" : "4"}
          strokeOpacity="0.2"
        />
        <circle 
          cx="50" cy="50" r={isLarge ? "40" : "35"}
          fill="none" 
          stroke={color}
          strokeWidth={isLarge ? "6" : "4"}
          strokeDasharray={`${circumference * score / 100} ${circumference}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className={`flex flex-col items-center justify-center ${isLarge ? "h-20 w-20" : "h-8 w-8"}`}>
        {icon === 'heart' && <Heart className={`${isLarge ? "h-4 w-4 mb-0.5" : "h-2 w-2 mb-0.5"} text-${color}`} />}
        {icon === 'activity' && <Activity className={`${isLarge ? "h-4 w-4 mb-0.5" : "h-2 w-2 mb-0.5"} text-${color}`} />}
        {icon === 'moon' && <Moon className={`${isLarge ? "h-4 w-4 mb-0.5" : "h-2 w-2 mb-0.5"} text-${color}`} />}
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
