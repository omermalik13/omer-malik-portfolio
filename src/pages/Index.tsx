
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, MapPin, BookOpen, Code, Star, Dumbbell, Music, Headphones, Shirt, Watch, Smartphone, Activity, BarChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pb-20">
      {/* Header */}
      <header className="bg-gray-800 shadow-md border-b border-gray-700">
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <span>✨</span> Omer Malik
          </h1>
          <p className="text-gray-300 ml-6 mt-1">Product Manager | Software Engineer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
            <span>👋</span> About Me
          </h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
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
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h3 className="text-md font-medium text-gray-200 mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-200">
                  <Code className="w-3.5 h-3.5 mr-1" /> Tech
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-200">
                  <Dumbbell className="w-3.5 h-3.5 mr-1" /> Fitness
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-200">
                  <Music className="w-3.5 h-3.5 mr-1" /> Music
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-200">
                  <Shirt className="w-3.5 h-3.5 mr-1" /> Fashion
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
            <span>💼</span> My Projects
          </h2>
          <Tabs defaultValue="bloodSugarSync" className="w-full">
            <TabsList className="w-full mb-6 bg-gray-700 p-1 rounded-lg">
              <TabsTrigger value="bloodSugarSync" className="flex-1 text-gray-300 data-[state=active]:bg-gray-600 data-[state=active]:text-white">Blood Sugar Sync</TabsTrigger>
              <TabsTrigger value="stravaPulse" className="flex-1 text-gray-300 data-[state=active]:bg-gray-600 data-[state=active]:text-white">Strava Pulse</TabsTrigger>
              <TabsTrigger value="project3" className="flex-1 text-gray-300 data-[state=active]:bg-gray-600 data-[state=active]:text-white">Project 3</TabsTrigger>
            </TabsList>

            {/* Blood Sugar Sync Tab */}
            <TabsContent value="bloodSugarSync" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span>📊</span> Blood Sugar Sync
                  </CardTitle>
                  <CardDescription className="text-gray-400">Glucose and Sleep Monitoring Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Product Requirements Document</h3>
                      <div className="bg-gray-700 rounded-md p-4 border border-gray-600">
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>🔍</span> Problem Statement
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Many people with diabetes or those monitoring their glucose levels struggle to understand how their blood 
                          sugar impacts their sleep quality and overall recovery. Existing solutions track either glucose or sleep, 
                          but rarely provide meaningful correlations between both.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>💡</span> Solution
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Blood Sugar Sync is an application that monitors and analyzes how blood glucose levels impact sleep quality 
                          and recovery. By visualizing the relationship between glucose trends and sleep metrics, users can make 
                          informed decisions to improve their sleep and overall health.
                        </p>
                        <p className="text-sm mb-4 text-gray-300">
                          This concept could be integrated into wearable devices like Oura, Garmin, Apple Watch and WHOOP!
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>✨</span> Key Features
                        </h4>
                        <ul className="list-disc list-inside text-sm mb-4 text-gray-300 ml-2">
                          <li>Real-time glucose monitoring with visualization</li>
                          <li>Sleep quality analysis correlated with glucose levels</li>
                          <li>Personalized insights and recommendations</li>
                          <li>Notification system for glucose anomalies during sleep</li>
                          <li>Comprehensive health metrics dashboard</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>🎯</span> Success Metrics
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
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">View Product Concept</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Strava Pulse Tab */}
            <TabsContent value="stravaPulse" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span>🏃‍♂️</span> Strava Pulse
                  </CardTitle>
                  <CardDescription className="text-gray-400">Recovery & Readiness Layer for Strava</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Product Requirements Document</h3>
                      <div className="bg-gray-700 rounded-md p-4 border border-gray-600">
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>🔍</span> Problem Statement
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Users are tracking their performance in Strava but lack insight into how their body is 
                          recovering, adapting, and preparing for future effort. There's no recovery-first guidance to 
                          prevent overtraining or promote smarter scheduling.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>💡</span> Solution
                        </h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Strava Pulse introduces a recovery and readiness system into the app that informs users 
                          when to push, when to rest, and how their wellness habits (like sleep and glucose levels) 
                          impact performance. This feature strengthens Strava's position at the intersection of fitness, 
                          community, and personal health optimization.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>✨</span> Key Features
                        </h4>
                        <ul className="list-disc list-inside text-sm mb-4 text-gray-300 ml-2">
                          <li>Recovery Score combining HRV, sleep, and resting heart rate</li>
                          <li>Activity recommendations based on recovery state</li>
                          <li>Training Load + Recovery Graph visualization</li>
                          <li>Fueling & Glucose Insights (via integrations)</li>
                          <li>Shareable Recovery Snapshots</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <span>🎯</span> Success Metrics
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
                    <Button className="bg-[#fc4c02] hover:bg-[#e44400] text-white">View Product Concept</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Placeholder for Project 3 */}
            <TabsContent value="project3">
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span>🚧</span> Project 3
                  </CardTitle>
                  <CardDescription className="text-gray-400">Coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">This project is currently under development.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" disabled className="border-gray-600 text-gray-400">View Project</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
            <span>📬</span> Get in Touch
          </h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 mb-4">
              I'm always open to discussing product ideas, collaboration opportunities, or just having a chat about technology and design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:omer.farooq812@gmail.com">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/omer-malik-6b4347a3" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#0A66C2] bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:text-white flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 shadow-inner mt-auto border-t border-gray-700">
        <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <Separator className="mb-4 bg-gray-700" />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 Omer Malik. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/" className="text-sm text-gray-400 hover:text-gray-200">
                Home
              </Link>
              <Link to="/" className="text-sm text-gray-400 hover:text-gray-200">
                Projects
              </Link>
              <a href="mailto:omer.farooq812@gmail.com" className="text-sm text-gray-400 hover:text-gray-200">
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
