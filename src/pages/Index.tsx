
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pb-20">
      {/* Header */}
      <header className="bg-gray-800 shadow-md border-b border-gray-700">
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Omer Malik</h1>
          <p className="text-gray-300">Product Manager | Software Engineer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">About Me</h2>
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
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">My Projects</h2>
          <Tabs defaultValue="bloodSugarSync" className="w-full">
            <TabsList className="w-full mb-6 bg-gray-700 p-1 rounded-lg">
              <TabsTrigger value="bloodSugarSync" className="flex-1 text-gray-300 data-[state=active]:bg-gray-600 data-[state=active]:text-white">Blood Sugar Sync</TabsTrigger>
              <TabsTrigger value="project2" className="flex-1 text-gray-300 data-[state=active]:bg-gray-600 data-[state=active]:text-white">Project 2</TabsTrigger>
              <TabsTrigger value="project3" className="flex-1 text-gray-300 data-[state=active]:bg-gray-600 data-[state=active]:text-white">Project 3</TabsTrigger>
            </TabsList>

            {/* Blood Sugar Sync Tab */}
            <TabsContent value="bloodSugarSync" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">Blood Sugar Sync</CardTitle>
                  <CardDescription className="text-gray-400">Glucose and Sleep Monitoring Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="aspect-video rounded-md overflow-hidden flex justify-center items-center bg-gray-700">
                      <div className="max-w-sm">
                        <img 
                          src="/placeholder.svg" 
                          alt="Blood Sugar Sync App" 
                          className="h-auto w-full rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Product Requirements Document</h3>
                      <div className="bg-gray-700 rounded-md p-4 border border-gray-600">
                        <h4 className="font-semibold mb-2 text-gray-200">Problem Statement</h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Many people with diabetes or those monitoring their glucose levels struggle to understand how their blood 
                          sugar impacts their sleep quality and overall recovery. Existing solutions track either glucose or sleep, 
                          but rarely provide meaningful correlations between both.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-gray-200">Solution</h4>
                        <p className="text-sm mb-4 text-gray-300">
                          Blood Sugar Sync is an application that monitors and analyzes how blood glucose levels impact sleep quality 
                          and recovery. By visualizing the relationship between glucose trends and sleep metrics, users can make 
                          informed decisions to improve their sleep and overall health.
                        </p>
                        
                        <h4 className="font-semibold mb-2 text-gray-200">Key Features</h4>
                        <ul className="list-disc list-inside text-sm mb-4 text-gray-300">
                          <li>Real-time glucose monitoring with visualization</li>
                          <li>Sleep quality analysis correlated with glucose levels</li>
                          <li>Personalized insights and recommendations</li>
                          <li>Notification system for glucose anomalies during sleep</li>
                          <li>Comprehensive health metrics dashboard</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2 text-gray-200">Success Metrics</h4>
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

            {/* Placeholder for Project 2 */}
            <TabsContent value="project2">
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">Project 2</CardTitle>
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

            {/* Placeholder for Project 3 */}
            <TabsContent value="project3">
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  <CardTitle className="text-white">Project 3</CardTitle>
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
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Get in Touch</h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 mb-4">
              I'm always open to discussing product ideas, collaboration opportunities, or just having a chat about technology and design.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:omer.farooq812@gmail.com">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
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
