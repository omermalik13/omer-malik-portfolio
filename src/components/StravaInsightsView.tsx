
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  Clock, 
  Heart, 
  Zap, 
  Moon, 
  BarChart, 
  Activity,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// Mock insight data
const insights = [
  {
    id: 1,
    type: 'positive',
    title: 'Recovery Consistency',
    description: 'Your recovery scores have been consistently above 75 this week, allowing for higher training load.',
    metric: '78% of days',
    change: '+15%',
    positive: true,
    date: '3 days ago',
    icon: <CheckCircle2 className="text-emerald-500" size={20} />,
  },
  {
    id: 2,
    type: 'pattern',
    title: 'Sleep Quality Correlation',
    description: 'Deep sleep increased by 22% on days with lower evening glucose levels (<110 mg/dL after 8pm).',
    metric: '+22% deep sleep',
    change: '',
    positive: true,
    date: '1 week ago',
    icon: <Moon className="text-purple-500" size={20} />,
  },
  {
    id: 3,
    type: 'alert',
    title: 'High Strain vs Recovery',
    description: 'You trained at high intensity 3 days in a row with recovery scores below 65. Consider rest.',
    metric: '3 consecutive days',
    change: '',
    positive: false,
    date: 'Yesterday',
    icon: <AlertCircle className="text-amber-500" size={20} />,
  },
  {
    id: 4,
    type: 'positive',
    title: 'HRV Improvement',
    description: 'Your average HRV has increased from 62ms to 68ms in the past 2 weeks with consistent sleep.',
    metric: '+6ms',
    change: '+9.6%',
    positive: true,
    date: '2 days ago',
    icon: <Heart className="text-red-500" size={20} />,
  },
  {
    id: 5,
    type: 'correlation',
    title: 'Sleep and Performance',
    description: 'Higher Zone 3+ outputs correlate with 8+ hours of sleep the previous night.',
    metric: '+14% power',
    change: '',
    positive: true,
    date: '5 days ago',
    icon: <Zap className="text-yellow-500" size={20} />,
  },
  {
    id: 6,
    type: 'pattern',
    title: 'Wednesday Recovery',
    description: 'Your recovery scores are consistently lowest on Wednesdays, suggesting you need more rest mid-week.',
    metric: '-12% vs average',
    change: '',
    positive: false,
    date: '1 week ago',
    icon: <Calendar className="text-blue-500" size={20} />,
  },
  {
    id: 7,
    type: 'correlation',
    title: 'Evening Glucose Impact',
    description: 'Late night carb intake (after 9pm) correlates with 15% lower recovery scores the next morning.',
    metric: '-15% recovery',
    change: '',
    positive: false,
    date: '6 days ago',
    icon: <Activity className="text-orange-500" size={20} />,
  },
];

const StravaInsightsView = () => {
  return (
    <div className="py-4 px-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-700">Recovery Insights</h3>
        <Badge variant="outline" className="bg-gray-100">New insights (3)</Badge>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight) => (
          <Card key={insight.id} className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-0">
              <div className={`p-4 ${insight.type === 'positive' 
                ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-500' 
                : insight.type === 'alert' 
                ? 'bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500'
                : 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500'
              }`}>
                <div className="flex justify-between items-start">
                  <div className="flex space-x-3">
                    <div className="mt-0.5">
                      {insight.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm mb-1">{insight.title}</h4>
                      <p className="text-gray-600 text-xs">{insight.description}</p>
                      
                      <div className="flex items-center mt-2">
                        <span className="text-sm font-medium">
                          {insight.metric}
                        </span>
                        {insight.change && (
                          <span className={`flex items-center ml-2 text-xs ${insight.positive ? 'text-emerald-600' : 'text-red-600'}`}>
                            {insight.positive ? (
                              <ArrowUpRight size={14} className="mr-0.5" />
                            ) : (
                              <ArrowDownRight size={14} className="mr-0.5" />
                            )}
                            {insight.change}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">{insight.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 mb-4">
        <h3 className="font-medium text-gray-700 mb-3">Optimization Opportunities</h3>
        
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center mb-2">
              <Moon className="text-purple-600 mr-2" size={16} />
              <h4 className="font-medium text-sm">Sleep Timing Optimization</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              Going to bed 30-45 minutes earlier could increase your deep sleep duration by up to 15%.
            </p>
            <div className="text-xs font-medium text-purple-600 flex items-center">
              <Clock size={14} className="mr-1" />
              Suggested bedtime: 10:15 PM - 10:30 PM
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center mb-2">
              <Activity className="text-orange-600 mr-2" size={16} />
              <h4 className="font-medium text-sm">Glucose Management</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              Your blood glucose typically spikes 2-3 hours after dinner. Consider a 10-minute walk after meals.
            </p>
            <div className="text-xs font-medium text-orange-600 flex items-center">
              <Zap size={14} className="mr-1" />
              Try: 10 min post-dinner walk to reduce spike by ~20%
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center mb-2">
              <BarChart className="text-blue-600 mr-2" size={16} />
              <h4 className="font-medium text-sm">Optimal Zone 2 Training</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              Your recovery is fastest after Zone 2 training (below 145 BPM) compared to higher intensity work.
            </p>
            <div className="text-xs font-medium text-blue-600 flex items-center">
              <Heart size={14} className="mr-1" />
              Suggested HR Zone: 125-145 BPM for recovery days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaInsightsView;
