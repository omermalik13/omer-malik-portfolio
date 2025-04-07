import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, ExternalLink, Code, Dumbbell, Music, Shirt, BarChart, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      {/* Header with Gradient */}
      <header className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-b border-blue-900/40 shadow-md py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Omer Malik
            </h1>
            <p className="text-lg md:text-xl text-blue-300">Product Manager | Software Engineer</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Me Section */}
        <section>
          <div className="space-y-2 mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
          </div>
          
          <div className="bg-[#1e293b] rounded-xl p-6 border border-blue-900/40 shadow-lg backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed mb-4">
              Hi, I'm Omer — a former Software Engineer turned Product Manager with 8+ years of experience in fast-paced 
              startup environments spanning e-commerce and AI/ML. My strengths lie in user experience optimization, 
              data science, and API integration.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This portfolio showcases product concepts aligned with my passions—especially in fitness and wellness tech. 
              As a dedicated marathoner, I'm deeply invested in building tools that elevate health and performance at scale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My other interests include AI/ML technology, sports, music and fashion.
            </p>
            
            <div className="mt-6 pt-4 border-t border-blue-900/40">
              <h3 className="text-md font-medium text-blue-300 mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-900/40 text-blue-300 border border-blue-800/40">
                  <Code className="w-3.5 h-3.5 mr-1" /> Tech
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-900/40 text-blue-300 border border-blue-800/40">
                  <Dumbbell className="w-3.5 h-3.5 mr-1" /> Fitness
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-900/40 text-blue-300 border border-blue-800/40">
                  <Music className="w-3.5 h-3.5 mr-1" /> Music
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-900/40 text-blue-300 border border-blue-800/40">
                  <Shirt className="w-3.5 h-3.5 mr-1" /> Fashion
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="space-y-2 mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
          </div>
          
          <Tabs defaultValue="bloodSugarSync" className="w-full">
            <TabsList className="w-full mb-6 bg-[#1e293b] border border-blue-900/40 p-1 rounded-lg">
              <TabsTrigger value="bloodSugarSync" className="flex-1 text-gray-300 data-[state=active]:bg-blue-900/40 data-[state=active]:text-white">
                Blood Sugar Sync
              </TabsTrigger>
              <TabsTrigger value="stravaPulse" className="flex-1 text-gray-300 data-[state=active]:bg-blue-900/40 data-[state=active]:text-white">
                Strava Pulse
              </TabsTrigger>
              <TabsTrigger value="project3" className="flex-1 text-gray-300 data-[state=active]:bg-blue-900/40 data-[state=active]:text-white">
                NBA ScoutSense
              </TabsTrigger>
            </TabsList>

            {/* Blood Sugar Sync Tab */}
            <TabsContent value="bloodSugarSync" className="space-y-6">
              <Card className="bg-[#1e293b] border-blue-900/40 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">
                    Blood Sugar Sync
                  </CardTitle>
                  <CardDescription className="text-blue-300">Glucose and Sleep Monitoring Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Product Requirements Document</h3>
                      <div className="bg-[#0f172a] rounded-md p-4 border border-blue-900/40">
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Problem Statement
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Many people with diabetes or those monitoring their glucose levels struggle to understand how their blood 
                          sugar impacts their sleep quality and overall recovery. Existing solutions track either glucose or sleep, 
                          but rarely provide meaningful correlations between both.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Solution
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Blood Sugar Sync is an application that monitors and analyzes how blood glucose levels impact sleep quality 
                          and recovery. By visualizing the relationship between glucose trends and sleep metrics, users can make 
                          informed decisions to improve their sleep and overall health.
                        </p>
                        <p className="text-sm mb-4 text-gray-300">
                          This concept could be integrated into wearable devices like Oura, Garmin, Apple Watch and WHOOP!
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Key Features
                        </h4>
                        <ul className="list-disc list-inside text-sm mb-4 text-gray-300 ml-2">
                          <li>Real-time glucose monitoring with visualization</li>
                          <li>Sleep quality analysis correlated with glucose levels</li>
                          <li>Personalized insights and recommendations</li>
                          <li>Notification system for glucose anomalies during sleep</li>
                          <li>Comprehensive health metrics dashboard</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Success Metrics
                        </h4>
                        <p className="text-sm text-gray-300">
                          Improved sleep quality scores, reduced glucose variability during night, and increased user engagement 
                          with health recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link to="/app">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Product Concept
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Strava Pulse Tab */}
            <TabsContent value="stravaPulse" className="space-y-6">
              <Card className="bg-[#1e293b] border-blue-900/40 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">
                    Strava Pulse
                  </CardTitle>
                  <CardDescription className="text-blue-300">Recovery & Readiness Layer for Strava</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Product Requirements Document</h3>
                      <div className="bg-[#0f172a] rounded-md p-4 border border-blue-900/40">
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Problem Statement
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Users are tracking their performance in Strava but lack insight into how their body is 
                          recovering, adapting, and preparing for future effort. There's no recovery-first guidance to 
                          prevent overtraining or promote smarter scheduling.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Solution
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Strava Pulse introduces a recovery and readiness system into the app that informs users 
                          when to push, when to rest, and how their wellness habits (like sleep and glucose levels) 
                          impact performance. This feature strengthens Strava's position at the intersection of fitness, 
                          community, and personal health optimization.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Key Features
                        </h4>
                        <ul className="list-disc list-inside text-sm mb-4 text-gray-300 ml-2">
                          <li>Recovery Score combining HRV, sleep, and resting heart rate</li>
                          <li>Activity recommendations based on recovery state</li>
                          <li>Training Load + Recovery Graph visualization</li>
                          <li>Fueling & Glucose Insights (via integrations)</li>
                          <li>Shareable Recovery Snapshots</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Success Metrics
                        </h4>
                        <p className="text-sm text-gray-300">
                          Feature adoption rate among active users, increase in daily app open rate (especially on 
                          non-activity days), engagement with recovery insights, and upgrade conversion to premium if behind paywall.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link to="/strava-pulse">
                    <Button className="bg-[#fc4c02] hover:bg-[#e44400] text-white">
                      View Product Concept
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* NBA ScoutSense Project Tab */}
            <TabsContent value="project3">
              <Card className="bg-[#1e293b] border-blue-900/40 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">
                    NBA ScoutSense
                  </CardTitle>
                  <CardDescription className="text-blue-300">Professional Basketball Analytics Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Product Requirements Document</h3>
                      <div className="bg-[#0f172a] rounded-md p-4 border border-blue-900/40">
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Problem Statement
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          NBA coaches and scouts need a more efficient way to analyze team performance, identify strengths and 
                          weaknesses, and generate comprehensive scouting reports for upcoming opponents.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Solution
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          NBA ScoutSense is an analytics platform that provides in-depth team and player analysis with AI-generated 
                          scouting reports to improve game preparation and strategic decision-making.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Key Features
                        </h4>
                        <ul className="list-disc list-inside text-sm mb-4 text-gray-300 ml-2">
                          <li>Comprehensive team performance statistics</li>
                          <li>Detailed player performance metrics</li>
                          <li>AI-powered scouting report generation</li>
                          <li>Game result tracking and analysis</li>
                          <li>Interactive data visualizations</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 text-blue-300">
                          Success Metrics
                        </h4>
                        <p className="text-sm text-gray-300">
                          Improved team preparation efficiency, increased strategic insights, and more effective game planning 
                          for coaching staffs.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link to="/nba">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      View NBA ScoutSense
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section>
          <div className="space-y-2 mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
          </div>
          
          <div className="bg-[#1e293b] rounded-xl p-6 border border-blue-900/40 shadow-lg backdrop-blur-sm">
            <p className="text-gray-300 mb-6">
              I'm always open to discussing product ideas, collaboration opportunities, or just having a chat about technology and design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="mailto:omer.farooq812@gmail.com">
                <Button className="bg-blue-600 hover:bg-blue-700 border border-blue-500">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/omer-malik-6b4347a3" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-600/40 bg-blue-900/10 text-blue-300 hover:bg-blue-900/30 hover:text-white">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e293b] shadow-inner mt-auto border-t border-blue-900/40">
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Separator className="mb-4 bg-blue-900/40" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-300">© 2025 Omer Malik. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/" className="text-sm text-blue-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="#projects" className="text-sm text-blue-300 hover:text-white transition-colors">
                Projects
              </Link>
              <a href="mailto:omer.farooq812@gmail.com" className="text-sm text-blue-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
