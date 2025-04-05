
import { format, subDays, addHours } from 'date-fns';

// Types for our data
export interface GlucoseDataPoint {
  timestamp: Date;
  value: number;
  meal?: string;
}

export interface SleepStage {
  timestamp: Date;
  stage: 'awake' | 'light' | 'deep' | 'rem';
  durationMinutes: number;
}

export interface SleepData {
  date: Date;
  score: number;
  startTime: Date;
  endTime: Date;
  totalSleepMinutes: number;
  remSleepMinutes: number;
  deepSleepMinutes: number;
  lightSleepMinutes: number;
  awakeMinutes: number;
  stages: SleepStage[];
}

export interface ReadinessData {
  date: Date;
  score: number;
  hrvScore: number;
  hrvValue: number;
  restingHR: number;
  bodyTemperature: number;
  respiratoryRate: number;
}

export interface ActivityData {
  date: Date;
  score: number;
  calories: number;
  steps: number;
  inactivityAlerts: number;
}

export interface AIInsight {
  id: string;
  date: Date;
  text: string;
  suggestion: string;
  type: 'glucose_spike' | 'poor_sleep' | 'good_recovery';
  isRead: boolean;
}

export interface CombinedDataPoint {
  timestamp: Date;
  glucose?: number;
  sleepStage?: string;
  hrv?: number;
  restingHR?: number;
}

// Function to generate timestamps for a specific date
const generateTimestamps = (baseDate: Date, count: number, intervalHours: number) => {
  const timestamps: Date[] = [];
  let currentDate = new Date(baseDate);
  
  for (let i = 0; i < count; i++) {
    timestamps.push(new Date(currentDate));
    currentDate = addHours(currentDate, intervalHours);
  }
  
  return timestamps;
};

// Generate glucose data with occasional spikes
export const generateGlucoseData = (days = 7): GlucoseDataPoint[] => {
  const data: GlucoseDataPoint[] = [];
  
  for (let day = 0; day < days; day++) {
    const baseDate = subDays(new Date(), day);
    baseDate.setHours(6, 0, 0, 0); // Start at 6 AM
    
    // Generate data points every hour for 24 hours
    for (let hour = 0; hour < 24; hour++) {
      const timestamp = addHours(baseDate, hour);
      let value;
      let meal;
      
      // Create meal patterns and glucose responses
      if (hour === 7) {
        value = 95 + Math.random() * 45; // Breakfast spike
        meal = 'Breakfast';
      } else if (hour === 12) {
        value = 100 + Math.random() * 50; // Lunch spike
        meal = 'Lunch';
      } else if (hour === 19) {
        value = 110 + Math.random() * 55; // Dinner spike (higher for some late night impact)
        meal = 'Dinner';
      } else if (hour === 22 && day % 3 === 0) {
        value = 95 + Math.random() * 65; // Occasional late-night snack (every 3rd day)
        meal = 'Evening Snack';
      } else {
        // Base glucose levels with some randomness
        value = 75 + Math.random() * 25;
      }
      
      // Add some minor random variations
      value += (Math.random() * 10) - 5;
      
      data.push({
        timestamp,
        value: Math.round(value),
        meal
      });
    }
  }
  
  return data;
};

// Generate sleep data
export const generateSleepData = (days = 7): SleepData[] => {
  const sleepData: SleepData[] = [];
  
  for (let day = 0; day < days; day++) {
    const date = subDays(new Date(), day + 1); // Sleep is from previous day
    date.setHours(0, 0, 0, 0);
    
    // Random sleep scores that tend to be better with lower late glucose
    const glucoseImpact = day % 3 === 0 ? -15 : 0; // Every 3rd day has a "bad" night
    const score = Math.min(98, Math.max(60, 85 + (Math.random() * 15) - 7 + glucoseImpact));
    
    // Sleep stages in minutes
    const totalSleep = Math.floor(6.5 * 60 + (Math.random() * 120));
    const remRatio = 0.2 + (Math.random() * 0.1) + (glucoseImpact > 0 ? -0.05 : 0);
    const deepRatio = 0.15 + (Math.random() * 0.1) + (glucoseImpact > 0 ? -0.03 : 0);
    const awakeRatio = 0.05 + (Math.random() * 0.05) + (glucoseImpact > 0 ? 0.03 : 0);
    const lightRatio = 1 - remRatio - deepRatio - awakeRatio;
    
    const remSleepMinutes = Math.floor(totalSleep * remRatio);
    const deepSleepMinutes = Math.floor(totalSleep * deepRatio);
    const awakeMinutes = Math.floor(totalSleep * awakeRatio);
    const lightSleepMinutes = Math.floor(totalSleep * lightRatio);
    
    // Create sleep start and end times
    const bedTime = new Date(date);
    bedTime.setHours(22, 30, 0, 0);
    const wakeTime = new Date(date);
    wakeTime.setHours(22 + (totalSleep + awakeMinutes) / 60, 
                      ((totalSleep + awakeMinutes) % 60), 0, 0);
    
    // Generate sleep stages
    const stages: SleepStage[] = [];
    let currentTime = new Date(bedTime);
    let remainingMin = totalSleep;
    
    // Initial awake time
    stages.push({
      timestamp: new Date(currentTime),
      stage: 'awake',
      durationMinutes: 15
    });
    
    currentTime = addHours(currentTime, 15/60);
    
    // Generate typical sleep cycle pattern
    while (remainingMin > 0) {
      // Light sleep phase
      const lightDuration = Math.min(remainingMin, 30 + Math.floor(Math.random() * 20));
      stages.push({
        timestamp: new Date(currentTime),
        stage: 'light',
        durationMinutes: lightDuration
      });
      currentTime = addHours(currentTime, lightDuration/60);
      remainingMin -= lightDuration;
      
      if (remainingMin <= 0) break;
      
      // Deep sleep phase (more in the first half of the night)
      const deepDuration = Math.min(remainingMin, 20 + Math.floor(Math.random() * 40));
      stages.push({
        timestamp: new Date(currentTime),
        stage: 'deep',
        durationMinutes: deepDuration
      });
      currentTime = addHours(currentTime, deepDuration/60);
      remainingMin -= deepDuration;
      
      if (remainingMin <= 0) break;
      
      // REM sleep phase (more in the second half of the night)
      const remDuration = Math.min(remainingMin, 15 + Math.floor(Math.random() * 25));
      stages.push({
        timestamp: new Date(currentTime),
        stage: 'rem',
        durationMinutes: remDuration
      });
      currentTime = addHours(currentTime, remDuration/60);
      remainingMin -= remDuration;
      
      // Occasional brief awakening
      if (Math.random() > 0.7 && remainingMin > 0) {
        const awakeDuration = Math.min(remainingMin, 5 + Math.floor(Math.random() * 10));
        stages.push({
          timestamp: new Date(currentTime),
          stage: 'awake',
          durationMinutes: awakeDuration
        });
        currentTime = addHours(currentTime, awakeDuration/60);
        remainingMin -= awakeDuration;
      }
    }
    
    // Final awakening
    stages.push({
      timestamp: new Date(wakeTime),
      stage: 'awake',
      durationMinutes: 10
    });
    
    sleepData.push({
      date,
      score: Math.round(score),
      startTime: bedTime,
      endTime: wakeTime,
      totalSleepMinutes: totalSleep,
      remSleepMinutes,
      deepSleepMinutes,
      lightSleepMinutes,
      awakeMinutes,
      stages
    });
  }
  
  return sleepData;
};

// Generate readiness data
export const generateReadinessData = (days = 7): ReadinessData[] => {
  const readinessData: ReadinessData[] = [];
  
  for (let day = 0; day < days; day++) {
    const date = subDays(new Date(), day);
    date.setHours(0, 0, 0, 0);
    
    // Base score is impacted by sleep quality
    const baseImpact = day % 3 === 0 ? -10 : 0;
    const score = Math.min(98, Math.max(60, 80 + (Math.random() * 15) - 7 + baseImpact));
    
    // HRV and HR are correlated with readiness
    const hrvBase = baseImpact > 0 ? 40 : 60;
    const hrvValue = hrvBase + (Math.random() * 30) - 15;
    const hrvScore = Math.min(98, Math.max(60, 75 + (hrvValue - hrvBase)));
    
    const hrBase = baseImpact > 0 ? 65 : 58;
    const restingHR = hrBase + (Math.random() * 8) - 4;
    
    readinessData.push({
      date,
      score: Math.round(score),
      hrvScore: Math.round(hrvScore),
      hrvValue: Math.round(hrvValue),
      restingHR: Math.round(restingHR),
      bodyTemperature: 36.5 + (Math.random() * 0.8) - 0.4,
      respiratoryRate: 14 + (Math.random() * 2) - 1
    });
  }
  
  return readinessData;
};

// Generate activity data
export const generateActivityData = (days = 7): ActivityData[] => {
  const activityData: ActivityData[] = [];
  
  for (let day = 0; day < days; day++) {
    const date = subDays(new Date(), day);
    date.setHours(0, 0, 0, 0);
    
    activityData.push({
      date,
      score: Math.round(70 + (Math.random() * 25)),
      calories: Math.round(1800 + (Math.random() * 800)),
      steps: Math.round(6000 + (Math.random() * 6000)),
      inactivityAlerts: Math.floor(Math.random() * 3)
    });
  }
  
  return activityData;
};

// Generate AI insights
export const generateAIInsights = (days = 7): AIInsight[] => {
  const insights: AIInsight[] = [];
  const insightTypes = ['glucose_spike', 'poor_sleep', 'good_recovery'];
  
  for (let day = 0; day < days; day++) {
    const date = subDays(new Date(), day);
    date.setHours(0, 0, 0, 0);
    
    const type = insightTypes[Math.floor(Math.random() * insightTypes.length)] as AIInsight['type'];
    let text = '';
    let suggestion = '';
    
    if (type === 'glucose_spike') {
      text = 'Your glucose stayed elevated for 3 hrs after dinner → reduced REM sleep by 40 mins and lowered your HRV by 25%.';
      suggestion = 'Try eating dinner before 8pm for better sleep quality, or consider lower-carb evening meals.';
    } else if (type === 'poor_sleep') {
      text = 'Late-night glucose spike at 10:30 PM (150 mg/dL) delayed your deep sleep onset by 45 minutes.';
      suggestion = 'Avoid eating within 3 hours of bedtime to improve deep sleep quality.';
    } else {
      text = 'Low glucose variability yesterday resulted in 15% better HRV this morning and 30 more minutes of REM sleep.';
      suggestion = 'Continue spacing out your meals and avoiding late snacks for optimal recovery.';
    }
    
    insights.push({
      id: `insight-${day}-${Math.random().toString(36).substring(2, 9)}`,
      date,
      text,
      suggestion,
      type,
      isRead: Math.random() > 0.3
    });
  }
  
  // Sort insights by date (newest first)
  insights.sort((a, b) => b.date.getTime() - a.date.getTime());
  
  return insights;
};

// Generate data for last night (8pm-8am)
export const generateLastNightData = (): CombinedDataPoint[] => {
  const data: CombinedDataPoint[] = [];
  
  const yesterday = subDays(new Date(), 1);
  yesterday.setHours(20, 0, 0, 0); // 8 PM
  
  // Generate data points every hour for 12 hours (8PM-8AM)
  for (let hour = 0; hour <= 12; hour++) {
    const timestamp = addHours(yesterday, hour);
    
    let glucose;
    let sleepStage;
    let hrv;
    
    // Glucose pattern: elevated after dinner, gradually decreasing
    if (hour === 0) {
      glucose = 110; // Starting at 8 PM
    } else if (hour === 1) {
      glucose = 140; // Spike after dinner
    } else if (hour === 2) {
      glucose = 130;
    } else if (hour === 3) {
      glucose = 115;
    } else if (hour === 4) {
      glucose = 105;
    } else {
      glucose = Math.max(80, 105 - ((hour - 4) * 3)); // Gradual decline
    }
    
    // Add some minor random variations
    glucose += (Math.random() * 6) - 3;
    
    // Sleep stages
    if (hour < 2) {
      sleepStage = undefined; // Awake before 10 PM
    } else if (hour === 2) {
      sleepStage = 'awake';
    } else if (hour === 3 || hour === 4 || hour === 8 || hour === 9) {
      sleepStage = 'light';
    } else if (hour === 5 || hour === 10) {
      sleepStage = 'deep';
    } else if (hour === 6 || hour === 7) {
      sleepStage = 'rem';
    } else if (hour === 11) {
      sleepStage = 'light';
    } else if (hour === 12) {
      sleepStage = 'awake';
    }
    
    // HRV pattern: lower when glucose is higher, improves during deep sleep
    if (hour < 3) {
      hrv = 45 - (glucose - 110) / 3; // Lower when glucose is high
    } else if (hour < 6) {
      hrv = 45 + (hour - 2) * 2; // Slowly improving
    } else if (hour === 5 || hour === 10) {
      hrv = 60 + Math.random() * 10; // Higher during deep sleep
    } else if (hour > 10) {
      hrv = 55 - (hour - 10) * 2; // Decreasing towards wake
    } else {
      hrv = 55 + (Math.random() * 10) - 5;
    }
    
    data.push({
      timestamp,
      glucose: Math.round(glucose),
      sleepStage,
      hrv: Math.round(hrv)
    });
  }
  
  return data;
};

// Function to get a specific day's data
export const getDayData = (date: Date = new Date()) => {
  // Create a date with time set to midnight
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  
  // Generate all data
  const allGlucoseData = generateGlucoseData(7);
  const allSleepData = generateSleepData(7);
  const allReadinessData = generateReadinessData(7);
  const allActivityData = generateActivityData(7);
  const allInsights = generateAIInsights(7);
  
  // Filter to the specific day
  const dayString = format(targetDate, 'yyyy-MM-dd');
  
  const glucoseData = allGlucoseData.filter(d => 
    format(d.timestamp, 'yyyy-MM-dd') === dayString);
  
  const sleepData = allSleepData.find(d => 
    format(d.date, 'yyyy-MM-dd') === dayString);
  
  const readinessData = allReadinessData.find(d => 
    format(d.date, 'yyyy-MM-dd') === dayString);
  
  const activityData = allActivityData.find(d => 
    format(d.date, 'yyyy-MM-dd') === dayString);
  
  const insights = allInsights.filter(d => 
    format(d.date, 'yyyy-MM-dd') === dayString);
  
  return {
    date: targetDate,
    glucose: glucoseData,
    sleep: sleepData || allSleepData[0], // Fallback to first day if not found
    readiness: readinessData || allReadinessData[0],
    activity: activityData || allActivityData[0],
    insights
  };
};
