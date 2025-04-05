
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, User, Home, Users, Activity, Map, Clock, BarChart2, Share2, Info } from 'lucide-react';
import StravaPulseFlowchart from '@/components/StravaPulseFlowchart';
import StravaTrendsView from '@/components/StravaTrendsView';
import StravaInsightsView from '@/components/StravaInsightsView';

const StravaPulse = () => {
  const [activeTab, setActiveTab] = useState("product");
  const [activeProductTab, setActiveProductTab] = useState("today");

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-10">
        <Link to="/">
          <Button variant="outline" size="sm" className="rounded-full bg-white hover:bg-gray-100 border-gray-200">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Portfolio
          </Button>
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto pt-20 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Strava Pulse Concept</h1>
          <p className="text-gray-600">Recovery & Readiness Layer for Strava</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="w-full mb-6 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="product" className="flex-1 data-[state=active]:bg-white">Product Demo</TabsTrigger>
            <TabsTrigger value="flowchart" className="flex-1 data-[state=active]:bg-white">Feature Flowchart</TabsTrigger>
            <TabsTrigger value="prd" className="flex-1 data-[state=active]:bg-white">PRD</TabsTrigger>
          </TabsList>
          
          <TabsContent value="product">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <header className="bg-[#fc4c02] text-white px-4 py-3 flex justify-between items-center">
                <div className="font-bold text-xl">strava</div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
              </header>

              {/* Navigation */}
              <nav className="flex bg-white border-b border-gray-200">
                <a href="#" className="flex-1 text-center py-3 text-gray-600 text-sm font-medium">Home</a>
                <a href="#" className="flex-1 text-center py-3 text-gray-600 text-sm font-medium">Groups</a>
                <a href="#" className="flex-1 text-center py-3 text-[#fc4c02] text-sm font-medium border-b-2 border-[#fc4c02]">Pulse</a>
                <a href="#" className="flex-1 text-center py-3 text-gray-600 text-sm font-medium">You</a>
              </nav>

              {/* Main Content */}
              <div className="content">
                {/* Pulse Header */}
                <div className="bg-gradient-to-r from-[#fc4c02] to-[#ff8a5b] text-white p-5 rounded-b-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">Strava Pulse</h1>
                    <div className="text-sm opacity-80">April 5, 2025</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-[#fc4c02] shadow-md">
                      78
                    </div>
                    <div className="ml-5">
                      <h2 className="font-semibold text-lg mb-1">Good Recovery</h2>
                      <p className="text-sm opacity-95">You're ready for moderate training today. Your body is recovering well from yesterday's effort.</p>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <div 
                    className={`flex-1 text-center py-3 text-sm font-medium cursor-pointer ${activeProductTab === 'today' ? 'text-[#fc4c02] border-b-2 border-[#fc4c02]' : 'text-gray-500'}`}
                    onClick={() => setActiveProductTab('today')}
                  >
                    Today
                  </div>
                  <div 
                    className={`flex-1 text-center py-3 text-sm font-medium cursor-pointer ${activeProductTab === 'trends' ? 'text-[#fc4c02] border-b-2 border-[#fc4c02]' : 'text-gray-500'}`}
                    onClick={() => setActiveProductTab('trends')}
                  >
                    Trends
                  </div>
                  <div 
                    className={`flex-1 text-center py-3 text-sm font-medium cursor-pointer ${activeProductTab === 'insights' ? 'text-[#fc4c02] border-b-2 border-[#fc4c02]' : 'text-gray-500'}`}
                    onClick={() => setActiveProductTab('insights')}
                  >
                    Insights
                  </div>
                </div>

                {activeProductTab === 'today' && (
                  <>
                    {/* Recovery Metrics */}
                    <div className="px-4 py-5 border-b border-gray-200">
                      <h3 className="font-medium mb-4 text-gray-700">Recovery Metrics</h3>
                      <div className="flex justify-between">
                        <div className="text-center">
                          <div className="text-xl font-semibold text-gray-900 mb-1">68</div>
                          <div className="text-xs text-gray-500">HRV</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-semibold text-gray-900 mb-1">58</div>
                          <div className="text-xs text-gray-500">RHR</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-semibold text-gray-900 mb-1">7h 20m</div>
                          <div className="text-xs text-gray-500">Sleep</div>
                        </div>
                      </div>
                    </div>

                    {/* Training Load Graph */}
                    <div className="px-4 py-5 border-b border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-gray-700">Training Load vs Recovery</h3>
                        <span className="text-xs text-gray-500">Last 7 days</span>
                      </div>
                      <div className="h-44 bg-gray-100 rounded-lg overflow-hidden relative flex items-center justify-center">
                        <div className="absolute inset-0 px-4 py-3">
                          {/* Mock Graph with SVG */}
                          <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                            {/* Recovery Line */}
                            <path
                              d="M0,50 C20,40 40,70 60,65 C80,60 100,30 120,35 C140,40 160,55 180,50 C200,45 220,25 240,30 C260,35 280,45 300,40"
                              fill="none"
                              stroke="#fc4c02"
                              strokeWidth="2"
                            />
                            
                            {/* Training Load Bars */}
                            <rect x="10" y="90" width="20" height="30" fill="#3498db" opacity="0.7" />
                            <rect x="50" y="70" width="20" height="50" fill="#3498db" opacity="0.7" />
                            <rect x="90" y="85" width="20" height="35" fill="#3498db" opacity="0.7" />
                            <rect x="130" y="100" width="20" height="20" fill="#3498db" opacity="0.7" />
                            <rect x="170" y="80" width="20" height="40" fill="#3498db" opacity="0.7" />
                            <rect x="210" y="60" width="20" height="60" fill="#3498db" opacity="0.7" />
                            <rect x="250" y="90" width="20" height="30" fill="#3498db" opacity="0.7" />
                          </svg>
                        </div>
                        
                        <div className="text-gray-400 flex flex-col items-center justify-center z-10">
                          <BarChart2 className="w-6 h-6 mb-1" />
                          <span className="text-xs">Training Load vs Recovery Chart</span>
                        </div>
                      </div>
                    </div>

                    {/* Today's Recommendation */}
                    <div className="px-4 py-5 border-b border-gray-200">
                      <h3 className="font-medium mb-4 text-gray-700">Today's Recommendation</h3>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-600 font-medium mb-1 text-sm">Light to Moderate Training</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Your HRV is slightly below your baseline, but sleep quality was good. 
                          A zone 2 run or moderate strength session would be ideal today.
                        </p>
                        <div className="flex gap-2">
                          <button className="px-3 py-2 bg-blue-500 text-white rounded text-xs font-medium">Find a Workout</button>
                          <button className="px-3 py-2 bg-white border border-blue-500 text-blue-500 rounded text-xs font-medium">Schedule Rest</button>
                        </div>
                      </div>
                    </div>

                    {/* Share Card */}
                    <div className="px-4 py-5">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm mb-1">Share Your Recovery</h4>
                          <p className="text-xs text-gray-500">Let your friends know you're training smart</p>
                        </div>
                        <button className="px-3 py-2 bg-[#fc4c02] text-white rounded text-xs font-medium flex items-center">
                          <Share2 className="w-3.5 h-3.5 mr-1.5" />
                          Share
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {activeProductTab === 'trends' && <StravaTrendsView />}
                {activeProductTab === 'insights' && <StravaInsightsView />}

                {/* Bottom Space for Footer Nav */}
                <div className="h-16"></div>
              </div>

              {/* Footer Navigation */}
              <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
                <div className="flex justify-around">
                  <a href="#" className="flex flex-col items-center text-gray-500 text-xs">
                    <Home className="w-5 h-5 mb-1" />
                    Feed
                  </a>
                  <a href="#" className="flex flex-col items-center text-gray-500 text-xs">
                    <Map className="w-5 h-5 mb-1" />
                    Maps
                  </a>
                  <a href="#" className="flex flex-col items-center text-[#fc4c02] text-xs">
                    <Activity className="w-5 h-5 mb-1" />
                    Record
                  </a>
                  <a href="#" className="flex flex-col items-center text-gray-500 text-xs">
                    <Users className="w-5 h-5 mb-1" />
                    Groups
                  </a>
                  <a href="#" className="flex flex-col items-center text-gray-500 text-xs">
                    <User className="w-5 h-5 mb-1" />
                    You
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="flowchart">
            <StravaPulseFlowchart />
          </TabsContent>

          <TabsContent value="prd">
            <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Requirements Document</h2>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Background & Strategic Context</h3>
              <p className="mb-6 text-gray-700">
                Strava is evolving beyond a simple activity tracker into a lifestyle and social fitness platform. 
                With users sharing their activities like social posts, the app is now a cultural symbol of commitment to wellness and performance.
                To capitalize on this momentum, Strava needs to go beyond tracking and begin influencing user behavior across the full training cycle: 
                effort, recovery, and readiness. Strava Pulse introduces a recovery and readiness system into the app that informs users when to push,
                when to rest, and how their wellness habits (like sleep and glucose levels) impact performance. 
                This feature strengthens our position at the intersection of fitness, community, and personal health optimization.
              </p>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Problem Statement</h3>
              <p className="mb-6 text-gray-700">
                Users are tracking their performance in Strava but lack insight into how their body is recovering, adapting, 
                and preparing for future effort. There's no recovery-first guidance to prevent overtraining or promote smarter scheduling.
                Competing products like WHOOP and Oura provide this insight but lack Strava's social, performance-driven community.
                Strava is in a prime position to own this behavior layer by introducing a recovery and readiness feature.
              </p>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Goals</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Launch a new recovery tab (Strava Pulse) inside the app.</li>
                <li>Integrate sleep and HRV data to generate a recovery/readiness score.</li>
                <li>Provide daily insights and activity recommendations based on recovery state.</li>
                <li>Lay the groundwork for monetization via premium coaching insights.</li>
                <li>Increase daily usage beyond workout days and deepen user engagement.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">4. Feature Overview</h3>
              <ol className="mb-6 text-gray-700">
                <li className="mb-2">
                  <span className="font-medium">Recovery Score (Daily):</span>
                  <ul className="list-disc pl-6">
                    <li>Combines HRV, sleep, and resting heart rate.</li>
                    <li>Personalized scoring based on historical trends and deviations.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Activity Recommendations:</span>
                  <ul className="list-disc pl-6">
                    <li>Suggests rest, light activity, or training based on recovery score.</li>
                    <li>Example: "Take it easy today—your HRV is trending low."</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Training Load + Recovery Graph:</span>
                  <ul className="list-disc pl-6">
                    <li>Visualize training efforts against recovery trends.</li>
                    <li>Overlay view: workouts vs. HRV vs. sleep.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Fueling & Glucose Insights (Stretch Goal):</span>
                  <ul className="list-disc pl-6">
                    <li>Via integrations (January AI, Levels).</li>
                    <li>Correlate blood sugar data to readiness and energy output.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Shareable Snapshots:</span>
                  <ul className="list-disc pl-6">
                    <li>Daily recovery summary image card for social sharing.</li>
                    <li>Promotes smart training culture within the community.</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">5. User Personas</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Amateur Athletes: Training for performance, avoiding injury.</li>
                <li>Wellness-Minded Users: Care about recovery, sleep, nutrition.</li>
                <li>Social Athletes: Want to share "smart training" not just "hard training."</li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">6. Technical Scope (MVP)</h3>
              <ul className="mb-6 text-gray-700">
                <li className="mb-2">
                  <span className="font-medium">Frontend:</span>
                  <ul className="list-disc pl-6">
                    <li>New tab or section within Strava app UI.</li>
                    <li>Graph view for recovery and training load overlays.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Backend:</span>
                  <ul className="list-disc pl-6">
                    <li>Integrate with Oura API, Apple Health (HRV, RHR, Sleep).</li>
                    <li>Daily calculation engine for Recovery Score.</li>
                    <li>Recommendation engine using predefined rules and personalization.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Data:</span>
                  <ul className="list-disc pl-6">
                    <li>Mock/simulated data for testing if needed.</li>
                    <li>Scalable to real-time integrations later.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">AI Insights (V1):</span>
                  <ul className="list-disc pl-6">
                    <li>Rule-based logic to generate personalized tips and summaries.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">7. Timeline (MVP – 3 Months)</h3>
              <p className="mb-6 text-gray-700">
                Week 1-2: Define scoring model, data sources, mock data generation.<br />
                Week 3-4: Build frontend UI shell, basic score display, and graph.<br />
                Week 5-6: Integrate Apple Health/Oura for data ingestion.<br />
                Week 7-8: Develop rule-based recommendation engine.<br />
                Week 9-10: Shareable recovery cards and test flows.<br />
                Week 11-12: QA, polish UI, user testing, internal pilot.
              </p>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">8. Success Metrics</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Feature adoption rate among active users.</li>
                <li>Increase in daily app open rate (especially on non-activity days).</li>
                <li>Engagement with recovery insights (taps, shares, saved).</li>
                <li>Upgrade conversion to premium if behind paywall.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">9. Long-Term Vision</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Deeper integrations: glucose, nutrition, wearable variety.</li>
                <li>Recovery-based challenges and social competitions.</li>
                <li>Partnerships with supplement and sleep brands.</li>
                <li>AI Coach: predictive, adaptive training plans based on recovery trends.</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StravaPulse;
