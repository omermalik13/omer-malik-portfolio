
import React from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const weeklyData = [
  { day: 'Mon', recovery: 65, activity: 45, sleep: 7.1 },
  { day: 'Tue', recovery: 72, activity: 65, sleep: 7.8 },
  { day: 'Wed', recovery: 68, activity: 85, sleep: 6.5 },
  { day: 'Thu', recovery: 55, activity: 35, sleep: 6.2 },
  { day: 'Fri', recovery: 78, activity: 60, sleep: 8.3 },
  { day: 'Sat', recovery: 82, activity: 10, sleep: 9.1 },
  { day: 'Sun', recovery: 78, activity: 70, sleep: 7.5 },
];

const monthlyData = [
  { week: 'Week 1', avgRecovery: 70, totalActivity: 320, avgSleep: 7.4 },
  { week: 'Week 2', avgRecovery: 65, totalActivity: 280, avgSleep: 7.1 },
  { week: 'Week 3', avgRecovery: 75, totalActivity: 350, avgSleep: 7.8 },
  { week: 'Week 4', avgRecovery: 80, totalActivity: 300, avgSleep: 8.2 },
];

const hrvData = [
  { day: 'Mon', morning: 62, night: 68 },
  { day: 'Tue', morning: 65, night: 70 },
  { day: 'Wed', morning: 58, night: 63 },
  { day: 'Thu', morning: 52, night: 56 },
  { day: 'Fri', morning: 70, night: 75 },
  { day: 'Sat', morning: 75, night: 80 },
  { day: 'Sun', morning: 73, night: 78 },
];

const sleepData = [
  { day: 'Mon', deep: 1.2, rem: 1.8, light: 4.1 },
  { day: 'Tue', deep: 1.5, rem: 2.2, light: 4.1 },
  { day: 'Wed', deep: 0.8, rem: 1.7, light: 4.0 },
  { day: 'Thu', deep: 0.9, rem: 1.3, light: 4.0 },
  { day: 'Fri', deep: 2.0, rem: 2.3, light: 4.0 },
  { day: 'Sat', deep: 2.2, rem: 2.5, light: 4.4 },
  { day: 'Sun', deep: 1.8, rem: 2.0, light: 3.7 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-lg text-xs">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name.includes('Sleep') ? 'h' : entry.name.includes('Activity') ? '%' : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const StravaTrendsView = () => {
  return (
    <div className="py-4 px-4">
      <Tabs defaultValue="weekly">
        <TabsList className="w-full mb-4 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="weekly" className="flex-1 data-[state=active]:bg-white">Weekly</TabsTrigger>
          <TabsTrigger value="monthly" className="flex-1 data-[state=active]:bg-white">Monthly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekly">
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Recovery & Activity</h3>
            <div className="h-48 bg-white rounded-lg mb-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weeklyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis yAxisId="left" domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="recovery"
                    name="Recovery Score"
                    stroke="#9b87f5"
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone"
                    dataKey="activity"
                    name="Activity Level"
                    stroke="#F97316"
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>Recovery & Activity Correlation</span>
              <span>High</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Sleep Quality</h3>
            <div className="h-48 bg-white rounded-lg mb-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sleepData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  barGap={0}
                  barCategoryGap={10}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Bar 
                    dataKey="deep" 
                    name="Deep Sleep" 
                    stackId="a" 
                    fill="#6E59A5" 
                  />
                  <Bar 
                    dataKey="rem" 
                    name="REM Sleep" 
                    stackId="a" 
                    fill="#9b87f5" 
                  />
                  <Bar 
                    dataKey="light" 
                    name="Light Sleep" 
                    stackId="a" 
                    fill="#D6BCFA" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Hours</span>
              <span>Sleep Stages</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">HRV Trends (Morning vs Night)</h3>
            <div className="h-48 bg-white rounded-lg mb-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={hrvData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis domain={[40, 90]} tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Line 
                    type="monotone"
                    dataKey="morning"
                    name="Morning HRV"
                    stroke="#0EA5E9" 
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                  <Line 
                    type="monotone"
                    dataKey="night"
                    name="Evening HRV"
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Lower</span>
              <span>Heart Rate Variability (ms)</span>
              <span>Higher</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="monthly">
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Monthly Recovery Trends</h3>
            <div className="h-48 bg-white rounded-lg mb-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                  <YAxis domain={[50, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone"
                    dataKey="avgRecovery"
                    name="Average Recovery"
                    stroke="#9b87f5" 
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Lower</span>
              <span>Monthly Recovery Score Average</span>
              <span>Higher</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Monthly Activity Volume</h3>
            <div className="h-48 bg-white rounded-lg mb-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 400]} tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="totalActivity" 
                    name="Activity Minutes" 
                    fill="#F97316" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Training Minutes per Week</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Monthly Sleep Average</h3>
            <div className="h-48 bg-white rounded-lg mb-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                  <YAxis domain={[6, 9]} tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone"
                    dataKey="avgSleep"
                    name="Sleep Hours"
                    stroke="#8B5CF6" 
                    strokeWidth={2}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Hours</span>
              <span>Average Sleep Duration</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StravaTrendsView;
