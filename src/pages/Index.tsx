
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Omer Malik</h1>
          <p className="text-gray-600 dark:text-gray-300">Product Thinker | Engineer | Creator</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a Product Thinker with a passion for building great products. My background is in Product and Engineering, 
              and I graduated from NYU in 2019 with a degree in Computer Science. I've worked for startups for over 8 years, 
              bringing innovative ideas to life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I have strong passions for Running, Fitness, Music, Fashion and Sports. These interests often inspire my 
              product ideas and creative direction.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Projects</h2>
          <Tabs defaultValue="bloodSugarSync" className="w-full">
            <TabsList className="w-full mb-6 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              <TabsTrigger value="bloodSugarSync" className="flex-1">Blood Sugar Sync</TabsTrigger>
              <TabsTrigger value="project2" className="flex-1">Project 2</TabsTrigger>
              <TabsTrigger value="project3" className="flex-1">Project 3</TabsTrigger>
            </TabsList>

            {/* Blood Sugar Sync Tab */}
            <TabsContent value="bloodSugarSync" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blood Sugar Sync</CardTitle>
                  <CardDescription>Glucose and Sleep Monitoring Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                        alt="Blood Sugar Sync App" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Product Requirements Document</h3>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold mb-2">Problem Statement</h4>
                        <p className="text-sm mb-4">
                          Many people with diabetes or those monitoring their glucose levels struggle to understand how their blood 
                          sugar impacts their sleep quality and overall recovery. Existing solutions track either glucose or sleep, 
                          but rarely provide meaningful correlations between both.
                        </p>
                        
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-sm mb-4">
                          Blood Sugar Sync is an application that monitors and analyzes how blood glucose levels impact sleep quality 
                          and recovery. By visualizing the relationship between glucose trends and sleep metrics, users can make 
                          informed decisions to improve their sleep and overall health.
                        </p>
                        
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-sm mb-4">
                          <li>Real-time glucose monitoring with visualization</li>
                          <li>Sleep quality analysis correlated with glucose levels</li>
                          <li>Personalized insights and recommendations</li>
                          <li>Notification system for glucose anomalies during sleep</li>
                          <li>Comprehensive health metrics dashboard</li>
                        </ul>
                        
                        <h4 className="font-semibold mb-2">Success Metrics</h4>
                        <p className="text-sm">
                          Improved sleep quality scores, reduced glucose variability during night, and increased user engagement 
                          with health recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Code</Button>
                  <Link to="/">
                    <Button>View Live Demo</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Placeholder for Project 2 */}
            <TabsContent value="project2">
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>Coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This project is currently under development.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" disabled>View Project</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Placeholder for Project 3 */}
            <TabsContent value="project3">
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>Coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This project is currently under development.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" disabled>View Project</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm always open to discussing product ideas, collaboration opportunities, or just having a chat about technology and design.
            </p>
            <div className="flex space-x-4">
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Contact Me
              </Button>
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
                Twitter
              </Button>
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <Separator className="mb-4" />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Omer Malik. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Home
              </Link>
              <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Projects
              </Link>
              <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
