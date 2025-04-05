
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  TooltipProps
} from 'recharts';
import { format } from 'date-fns';
import { CombinedDataPoint } from '../utils/mockData';

interface DetailedGlucoseChartProps {
  data: CombinedDataPoint[];
}

const DetailedGlucoseChart: React.FC<DetailedGlucoseChartProps> = ({ data }) => {
  // Process data to add formatted time for display
  const processedData = data.map(point => ({
    ...point,
    displayTime: format(point.timestamp, 'h:mm a')
  }));
  
  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as (CombinedDataPoint & { displayTime: string });
      return (
        <div className="bg-oura-cardDark p-3 rounded-lg border border-gray-700 shadow-lg">
          <p className="text-white font-medium">{data.displayTime}</p>
          {data.glucose !== undefined && (
            <p className="text-orange-400">Glucose: {data.glucose} mg/dL</p>
          )}
          {data.sleepStage && (
            <p className="text-purple-400">Sleep: {data.sleepStage}</p>
          )}
          {data.hrv !== undefined && (
            <p className="text-blue-400">HRV: {data.hrv} ms</p>
          )}
          {data.glucose && data.glucose > 120 && data.sleepStage && (
            <p className="text-red-400 text-xs mt-1">Elevated glucose may affect sleep quality</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={processedData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis 
            dataKey="displayTime" 
            tick={{ fill: '#9CA3AF' }} 
            interval={2}
            tickMargin={5}
            minTickGap={0}
            tickSize={5}
          />
          <YAxis
            yAxisId="glucose"
            domain={[60, 160]}
            tick={{ fill: '#9CA3AF' }}
            label={{
              value: 'mg/dL',
              angle: -90,
              position: 'insideLeft',
              fill: '#9CA3AF',
              dx: -10
            }}
          />
          <YAxis
            yAxisId="hrv"
            orientation="right"
            domain={[30, 70]}
            tick={{ fill: '#9CA3AF' }}
            label={{
              value: 'HRV (ms)',
              angle: 90,
              position: 'insideRight',
              fill: '#9CA3AF',
              dx: 10
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={120} yAxisId="glucose" stroke="#EF4444" strokeDasharray="3 3" />
          <Line
            yAxisId="glucose"
            type="monotone"
            dataKey="glucose"
            stroke="#F97316"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, fill: '#F97316' }}
          />
          <Line
            yAxisId="hrv"
            type="monotone"
            dataKey="hrv"
            stroke="#60A5FA"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, fill: '#60A5FA' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DetailedGlucoseChart;
