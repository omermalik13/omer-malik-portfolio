
import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';
import { format } from 'date-fns';
import { GlucoseDataPoint, AIInsight } from '../utils/mockData';
import { useNavigate } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GlucoseCardProps {
  glucoseData: GlucoseDataPoint[];
  insight?: AIInsight;
}

const GlucoseCard: React.FC<GlucoseCardProps> = ({ glucoseData, insight }) => {
  const navigate = useNavigate();
  
  // Filter to just get data points for displaying (every 2 hours)
  const filteredData = glucoseData.filter((_, index) => index % 2 === 0);
  
  // Prepare data for chart
  const data: ChartData<'line'> = {
    labels: filteredData.map(point => format(point.timestamp, 'ha')),
    datasets: [
      {
        label: 'Blood Glucose',
        data: filteredData.map(point => point.value),
        fill: false,
        backgroundColor: '#F97316',
        borderColor: '#F97316',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  };
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#111',
        titleColor: '#fff',
        bodyColor: '#f97316',
        titleFont: {
          size: 12
        },
        bodyFont: {
          size: 14
        },
        padding: 10,
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 10
          },
          maxRotation: 0
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        }
      },
      y: {
        min: 70,
        max: 180,
        position: 'left',
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(51, 51, 51, 0.05)',
          lineWidth: 0.5,
        },
        border: {
          display: false,
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1.5
      },
      point: {
        radius: 0,
        hoverRadius: 0
      }
    }
  };

  const handleViewDetails = () => {
    navigate('/glucose-detail');
  };
  
  return (
    <div className="oura-card mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">Blood Sugar Impact</h2>
        <button 
          className="text-blue-400 text-sm"
          onClick={handleViewDetails}
        >
          Details →
        </button>
      </div>
      
      <div className="h-40 w-full">
        <Line data={data} options={options} />
      </div>
      
      {insight && (
        <div className="mt-4 bg-oura-cardDark p-3 rounded-lg">
          <div className="flex items-start">
            <div className="rounded-full bg-purple-600 p-1 mr-2 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm">{insight.text}</p>
              <p className="text-xs text-oura-textSecondary mt-1">{insight.suggestion}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlucoseCard;
