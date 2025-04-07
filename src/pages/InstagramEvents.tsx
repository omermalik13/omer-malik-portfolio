
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Share2, Plus, MessageSquare, Heart, User, Users, Camera, Info } from "lucide-react";

const InstagramEvents = () => {
  const [currentTab, setCurrentTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#050818] text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 shadow-md border-b border-gray-800">
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <span>📅</span> Instagram Events
            </h1>
            <Link to="/">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Back to Portfolio
              </Button>
            </Link>
          </div>
          <p className="text-gray-300 ml-6 mt-1">Events Management for Instagram</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Navigation Tabs */}
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full mb-8">
          <TabsList className="w-full mb-6 bg-gray-800 p-1 rounded-lg">
            <TabsTrigger value="overview" className="flex-1 text-gray-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="mockups" className="flex-1 text-gray-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              UI Mockups
            </TabsTrigger>
            <TabsTrigger value="flows" className="flex-1 text-gray-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              User Flows
            </TabsTrigger>
            <TabsTrigger value="architecture" className="flex-1 text-gray-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              Technical
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 text-gray-100">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-white">Instagram Events</h2>
                  <p className="text-gray-300 mb-4">
                    A feature within Instagram for creating beautiful, social-first event pages that can be shared 
                    via Instagram bios, Stories, or DMs — no app download or IG login required. It blends the vibe of 
                    Partiful with the distribution power of Instagram, while remaining platform-agnostic.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                      <span>🎯</span> Goals
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Let anyone create a sharable, branded event page</li>
                      <li>Support public and private events with RSVP and ticketing</li>
                      <li>Enable social discovery: show guests how many of their mutuals are attending</li>
                      <li>Allow reminders, updates, and post-event media sharing</li>
                      <li>Ensure the product works without requiring Instagram login</li>
                    </ul>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                      <span>💡</span> Use Cases
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <p className="font-medium">IG Creator:</p>
                        <p>Shares a party link in bio or Story so followers can RSVP</p>
                      </div>
                      <div>
                        <p className="font-medium">Brand:</p>
                        <p>Launches a popup or meetup and tracks RSVPs without Eventbrite</p>
                      </div>
                      <div>
                        <p className="font-medium">Friend Group:</p>
                        <p>Uses it to coordinate casual hangouts with a private guest list</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <span>📦</span> Feature Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-white">Create & Customize Event</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Title, date, time, location (with maps)</li>
                        <li>Public or private access</li>
                        <li>Upload banner image / flyer</li>
                        <li>Set ticket type: free or paid (via Stripe)</li>
                        <li>Set RSVP list visibility (open, host-only)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-white">Event Page</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Clean, mobile-first page design</li>
                        <li>Show who's going (name, optional handle)</li>
                        <li>"+X people you follow" if IG OAuth connected</li>
                        <li>RSVP with email or Instagram handle</li>
                        <li>Add to calendar & social sharing link</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-white">RSVP Flow</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Name, email, and/or phone input</li>
                        <li>Opt-in for reminders</li>
                        <li>Guest list saved to dashboard</li>
                        <li>Optional passcode for private events</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-white">Reminders & Updates</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Email or SMS reminders (24 hrs and 1 hr before)</li>
                        <li>Hosts can send updates (e.g., venue changed)</li>
                        <li>Reminder opt-in confirmation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-white">Post-Event Sharing</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Shared photo album (optional)</li>
                        <li>Guests can upload, view, and react to photos</li>
                        <li>Host can create highlight or collage</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-white">Non-Instagram Support</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Anyone with the link can view and RSVP</li>
                        <li>No Instagram login required</li>
                        <li>Works for guests via SMS or email</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                      <span>🔒</span> Privacy & Safety
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Hosts control RSVP visibility</li>
                      <li>Event pages can be private + passcode protected</li>
                      <li>No sensitive data shared publicly</li>
                      <li>Data deletable by users on request</li>
                    </ul>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                      <span>🧪</span> Success Criteria
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Users can create and share an event in &lt;3 minutes</li>
                      <li>RSVPs from both IG and non-IG users</li>
                      <li>At least 50% of guests opt-in for reminders</li>
                      <li>70% RSVP conversion rate from shared link</li>
                    </ul>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                      <span>🔭</span> Future Opportunities
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Event chat or group DM</li>
                      <li>Personalized QR code for check-in</li>
                      <li>"Hype meter" based on RSVPs from followers</li>
                      <li>Host dashboard with analytics</li>
                      <li>AI-powered recap or photo montage</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* UI Mockups Tab - UPDATED FOR RUN CLUB THEME */}
          <TabsContent value="mockups" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 text-gray-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">UI Mockups</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Instagram Profile View */}
                  <div className="border border-gray-700 rounded-md bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">Profile with Event Link</h3>
                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                      {/* Profile Header */}
                      <div className="flex items-start">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                          <span className="text-white font-bold">RC</span>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-white">runclubnyc</h4>
                          <p className="text-gray-400 text-sm">NYC Run Club</p>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex justify-between mt-4 border-b border-gray-800 pb-4">
                        <div className="text-center">
                          <p className="font-bold">186</p>
                          <p className="text-xs text-gray-400">Posts</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold">8.2K</p>
                          <p className="text-xs text-gray-400">Followers</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold">312</p>
                          <p className="text-xs text-gray-400">Following</p>
                        </div>
                      </div>
                      
                      {/* Bio */}
                      <div className="mt-4">
                        <p className="text-sm">NYC's friendliest running community 🏃‍♂️🏃‍♀️</p>
                        <p className="text-sm">Weekly runs in Central Park & Brooklyn</p>
                        <p className="text-sm mt-2">🏃 Next Group Run:</p>
                        
                        {/* Event Link */}
                        <div className="mt-2 bg-gray-800 p-3 rounded-lg flex justify-between items-center">
                          <p className="text-sm text-blue-400">Saturday Morning 5K - Join Us!</p>
                          <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Event Page */}
                  <div className="border border-gray-700 rounded-md bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">Event Page</h3>
                    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                      {/* Event Banner */}
                      <div className="h-40 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                        <div className="text-center">
                          <h4 className="text-white font-bold text-xl">SATURDAY MORNING</h4>
                          <p className="text-white">5K GROUP RUN</p>
                        </div>
                      </div>
                      
                      {/* Event Details */}
                      <div className="p-4">
                        <h4 className="font-bold text-lg">Saturday Morning 5K</h4>
                        <p className="text-sm text-gray-400">Hosted by @runclubnyc</p>
                        
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                            <p className="text-sm">Saturday, April 13 • 8:00-9:30 AM</p>
                          </div>
                          
                          <div className="flex items-start">
                            <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-0.5" />
                            <div>
                              <p className="text-sm">Central Park Entrance</p>
                              <p className="text-xs text-gray-500">E 72nd St & Fifth Ave, New York</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* RSVP Button */}
                        <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">RSVP</Button>
                        
                        {/* Attendee Info */}
                        <div className="mt-4">
                          <p className="text-sm"><Users className="w-4 h-4 inline mr-1" /> 28 people going</p>
                          <p className="text-sm text-blue-400">+3 people you follow</p>
                          
                          <div className="mt-2 flex items-center">
                            <div className="flex -space-x-2">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-7 h-7 rounded-full bg-gray-700 border-2 border-gray-900">
                                </div>
                              ))}
                            </div>
                            <span className="text-xs text-gray-400 ml-2">+ 23 more</span>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 border-gray-700">
                            <Calendar className="w-3 h-3 mr-1" /> Add to Calendar
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 border-gray-700">
                            <Share2 className="w-3 h-3 mr-1" /> Share Event
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* RSVP Flow */}
                  <div className="border border-gray-700 rounded-md bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">RSVP Flow</h3>
                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                      <h4 className="font-bold text-center mb-2">RSVP to Run</h4>
                      <p className="text-sm text-center text-gray-400 mb-4">Saturday Morning 5K</p>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-gray-400">Name</label>
                          <div className="mt-1 bg-gray-800 rounded-md p-2">
                            <p className="text-sm text-gray-500">Your name</p>
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-xs text-gray-400">Email</label>
                          <div className="mt-1 bg-gray-800 rounded-md p-2">
                            <p className="text-sm text-gray-500">email@example.com</p>
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-xs text-gray-400">Instagram (optional)</label>
                          <div className="mt-1 bg-gray-800 rounded-md p-2">
                            <p className="text-sm text-gray-500">@yourusername</p>
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-xs text-gray-400">Running Experience</label>
                          <div className="mt-1 bg-gray-800 rounded-md p-2">
                            <p className="text-sm text-gray-500">Select your level</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded border border-gray-600 mr-2"></div>
                          <label className="text-sm">Send me event reminders</label>
                        </div>
                        
                        <Button className="w-full bg-blue-500 hover:bg-blue-600">Confirm RSVP</Button>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-2">- or -</p>
                          <Button variant="outline" className="w-full border-blue-500 text-blue-500">
                            Continue with Instagram
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Story Share */}
                  <div className="border border-gray-700 rounded-md bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">Story Share</h3>
                    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 flex flex-col items-center">
                      <div className="w-48 h-80 bg-gray-800 rounded-xl overflow-hidden relative">
                        {/* Story X close button */}
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                          <span className="text-xs">X</span>
                        </div>
                        
                        {/* Event Card */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 rounded-lg overflow-hidden">
                          <div className="h-14 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                            <p className="text-white font-bold text-xs">5K GROUP RUN</p>
                          </div>
                          
                          <div className="bg-white text-gray-900 p-2">
                            <p className="text-xs font-bold mb-1">Saturday Morning 5K</p>
                            <p className="text-[10px]">Saturday, April 13 • 8:00 AM</p>
                            <p className="text-[10px]">Central Park Entrance</p>
                            
                            <div className="mt-2 rounded-full text-center py-1 bg-blue-500">
                              <p className="text-[10px] text-white font-bold">JOIN US</p>
                            </div>
                            
                            <p className="text-[10px] mt-1">28 going • All levels welcome!</p>
                          </div>
                        </div>
                        
                        {/* Swipe Up */}
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                          <p className="text-xs text-white">Swipe up to join</p>
                          <p className="text-white mt-1">↑</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional mockups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {/* Post-Event Gallery */}
                  <div className="border border-gray-700 rounded-md bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">Post-Run Gallery</h3>
                    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                      <h4 className="font-bold">Saturday Morning 5K</h4>
                      <p className="text-sm text-gray-400">Run Completed • April 13</p>
                      
                      <div className="grid grid-cols-3 gap-1 mt-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="aspect-square bg-gray-800 rounded"></div>
                        ))}
                      </div>
                      
                      <div className="bg-gray-750 rounded p-3 mt-4">
                        <p className="text-sm font-medium">Run Stats:</p>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Distance</p>
                            <p className="font-bold">5.2 km</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Avg Pace</p>
                            <p className="font-bold">6:12/km</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Runners</p>
                            <p className="font-bold">28</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                        <Camera className="w-4 h-4 mr-1" /> Upload Run Photos
                      </Button>
                    </div>
                  </div>
                  
                  {/* Host Dashboard */}
                  <div className="border border-gray-700 rounded-md bg-gray-900 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white">Run Club Dashboard</h3>
                    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                      <h4 className="font-bold">Run Club Dashboard</h4>
                      <p className="text-sm text-gray-400">Saturday Morning 5K</p>
                      
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="bg-gray-800 p-2 rounded text-center">
                          <p className="font-bold">28</p>
                          <p className="text-xs text-gray-400">RSVPs</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded text-center">
                          <p className="font-bold">23</p>
                          <p className="text-xs text-gray-400">Attended</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded text-center">
                          <p className="font-bold">18</p>
                          <p className="text-xs text-gray-400">Photos</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-750 p-3 rounded mt-4">
                        <p className="text-sm font-medium">Pace Groups:</p>
                        <div className="grid grid-cols-3 gap-1 mt-2">
                          <div className="bg-gray-800 p-1 rounded text-center text-xs">
                            <Badge className="bg-green-600 w-full">Beginner</Badge>
                            <p className="mt-1">8 runners</p>
                          </div>
                          <div className="bg-gray-800 p-1 rounded text-center text-xs">
                            <Badge className="bg-yellow-600 w-full">Intermediate</Badge>
                            <p className="mt-1">10 runners</p>
                          </div>
                          <div className="bg-gray-800 p-1 rounded text-center text-xs">
                            <Badge className="bg-red-600 w-full">Advanced</Badge>
                            <p className="mt-1">5 runners</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mt-4">
                        <Button variant="outline" className="w-full border-gray-700">
                          <MessageSquare className="w-4 h-4 mr-1" /> Message Runners
                        </Button>
                        <Button variant="outline" className="w-full border-gray-700">
                          <Camera className="w-4 h-4 mr-1" /> Create Run Highlight  
                        </Button>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600">
                          <Plus className="w-4 h-4 mr-1" /> Schedule Next Run
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Flows Tab */}
          <TabsContent value="flows" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 text-gray-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">User Flows</h2>
                
                <div className="space-y-8">
                  {/* Creator Flow */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Creator Flow</h3>
                    <div className="overflow-x-auto">
                      <div className="min-w-[800px]">
                        <div className="bg-gray-700 p-4 rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                              <User className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">1. Access & Creation</h4>
                              <p className="text-sm text-gray-300">Creator accesses event creation and sets up event details</p>
                            </div>
                            <div className="flex-grow text-center">→</div>
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                              <Plus className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">2. Customize & Configure</h4>
                              <p className="text-sm text-gray-300">Creator customizes event page and ticket settings</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center my-4">
                            <div className="w-0.5 h-6 bg-gray-500"></div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                              <Share2 className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">3. Publish & Share</h4>
                              <p className="text-sm text-gray-300">Creator publishes event and shares via bio, Story, or DM</p>
                            </div>
                            <div className="flex-grow text-center">→</div>
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                              <Users className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">4. Manage Attendees</h4>
                              <p className="text-sm text-gray-300">Creator monitors RSVPs and sends updates to guests</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center my-4">
                            <div className="w-0.5 h-6 bg-gray-500"></div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">5. Event Day</h4>
                              <p className="text-sm text-gray-300">Creator hosts event and tracks attendance</p>
                            </div>
                            <div className="flex-grow text-center">→</div>
                            <div className="bg-indigo-600 text-white p-2 rounded-lg">
                              <Camera className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">6. Post-Event</h4>
                              <p className="text-sm text-gray-300">Creator manages photo gallery and creates highlights</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Attendee Flow */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Attendee Flow</h3>
                    <div className="overflow-x-auto">
                      <div className="min-w-[800px]">
                        <div className="bg-gray-700 p-4 rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-pink-600 text-white p-2 rounded-lg">
                              <Info className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">1. Discover Event</h4>
                              <p className="text-sm text-gray-300">Find event via bio, Story, DM, or friend share</p>
                            </div>
                            <div className="flex-grow text-center">→</div>
                            <div className="bg-pink-600 text-white p-2 rounded-lg">
                              <User className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">2. RSVP</h4>
                              <p className="text-sm text-gray-300">RSVP with Instagram or as guest</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center my-4">
                            <div className="w-0.5 h-6 bg-gray-500"></div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="bg-pink-600 text-white p-2 rounded-lg">
                              <Clock className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">3. Pre-Event</h4>
                              <p className="text-sm text-gray-300">Receive reminders and updates from the host</p>
                            </div>
                            <div className="flex-grow text-center">→</div>
                            <div className="bg-pink-600 text-white p-2 rounded-lg">
                              <MapPin className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">4. Attend Event</h4>
                              <p className="text-sm text-gray-300">Use event page for details and check in</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center my-4">
                            <div className="w-0.5 h-6 bg-gray-500"></div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="bg-pink-600 text-white p-2 rounded-lg">
                              <Camera className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">5. Post-Event</h4>
                              <p className="text-sm text-gray-300">Share photos and view event gallery</p>
                            </div>
                            <div className="flex-grow text-center">→</div>
                            <div className="bg-pink-600 text-white p-2 rounded-lg">
                              <Heart className="w-5 h-5" />
                            </div>
                            <div className="ml-2">
                              <h4 className="font-medium text-white">6. Engagement</h4>
                              <p className="text-sm text-gray-300">React to photos, follow other attendees</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Decision Points */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Key Decision Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Event Type</h4>
                        <div className="flex text-sm">
                          <div className="w-1/2 pr-2">
                            <Badge className="bg-blue-600 mb-1">Public Event</Badge>
                            <p className="text-gray-300">- Open RSVP list</p>
                            <p className="text-gray-300">- Sharable link</p>
                            <p className="text-gray-300">- No passcode</p>
                          </div>
                          <div className="w-1/2 pl-2">
                            <Badge className="bg-purple-600 mb-1">Private Event</Badge>
                            <p className="text-gray-300">- Controlled guest list</p>
                            <p className="text-gray-300">- Invitation only</p>
                            <p className="text-gray-300">- Optional passcode</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Ticketing Options</h4>
                        <div className="flex text-sm">
                          <div className="w-1/2 pr-2">
                            <Badge className="bg-green-600 mb-1">Free Event</Badge>
                            <p className="text-gray-300">- Simple RSVP</p>
                            <p className="text-gray-300">- Optional guest limit</p>
                            <p className="text-gray-300">- No payment processing</p>
                          </div>
                          <div className="w-1/2 pl-2">
                            <Badge className="bg-amber-600 mb-1">Paid Event</Badge>
                            <p className="text-gray-300">- Stripe integration</p>
                            <p className="text-gray-300">- Ticket tiers</p>
                            <p className="text-gray-300">- Purchase confirmation</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">User Authentication</h4>
                        <div className="flex text-sm">
                          <div className="w-1/2 pr-2">
                            <Badge className="bg-blue-600 mb-1">Instagram User</Badge>
                            <p className="text-gray-300">- OAuth login</p>
                            <p className="text-gray-300">- Mutual connections</p>
                            <p className="text-gray-300">- Pre-filled info</p>
                          </div>
                          <div className="w-1/2 pl-2">
                            <Badge className="bg-gray-500 mb-1">Guest User</Badge>
                            <p className="text-gray-300">- Email/phone entry</p>
                            <p className="text-gray-300">- No social features</p>
                            <p className="text-gray-300">- Link-based access</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Reminder Preferences</h4>
                        <div className="flex text-sm">
                          <div className="w-1/2 pr-2">
                            <Badge className="bg-indigo-600 mb-1">Opt-in</Badge>
                            <p className="text-gray-300">- 24hr reminder</p>
                            <p className="text-gray-300">- 1hr reminder</p>
                            <p className="text-gray-300">- Host updates</p>
                          </div>
                          <div className="w-1/2 pl-2">
                            <Badge className="bg-gray-500 mb-1">Opt-out</Badge>
                            <p className="text-gray-300">- No reminders</p>
                            <p className="text-gray-300">- Manual calendar add</p>
                            <p className="text-gray-300">- View in app only</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700 text-gray-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Technical Architecture</h2>
                
                <div className="space-y-8">
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Tech Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Frontend</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>Next.js for SSR & routing</li>
                          <li>Tailwind CSS + shadcn/ui</li>
                          <li>React Query for data fetching</li>
                          <li>Mobile-first responsive design</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Backend</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>Supabase (PostgreSQL + Auth)</li>
                          <li>Storage for images and assets</li>
                          <li>Edge Functions for serverless API</li>
                          <li>WebSockets for real-time updates</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Integrations</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>Instagram Graph API</li>
                          <li>Google Maps API</li>
                          <li>Stripe for payments</li>
                          <li>Twilio (SMS) / SendGrid (email)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Model */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Core Data Model</h3>
                    <div className="overflow-x-auto">
                      <div className="min-w-[800px]">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 text-white">Event</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                              <p><span className="text-blue-400">id:</span> uuid (PK)</p>
                              <p><span className="text-blue-400">title:</span> string</p>
                              <p><span className="text-blue-400">description:</span> text</p>
                              <p><span className="text-blue-400">event_date:</span> timestamp</p>
                              <p><span className="text-blue-400">location:</span> string</p>
                              <p><span className="text-blue-400">coordinates:</span> point</p>
                              <p><span className="text-blue-400">banner_url:</span> string</p>
                              <p><span className="text-blue-400">is_public:</span> boolean</p>
                              <p><span className="text-blue-400">passcode:</span> string?</p>
                              <p><span className="text-blue-400">host_id:</span> uuid (FK)</p>
                              <p><span className="text-blue-400">status:</span> enum</p>
                              <p><span className="text-blue-400">created_at:</span> timestamp</p>
                            </div>
                          </div>
                          
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 text-white">RSVP</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                              <p><span className="text-blue-400">id:</span> uuid (PK)</p>
                              <p><span className="text-blue-400">event_id:</span> uuid (FK)</p>
                              <p><span className="text-blue-400">user_id:</span> uuid (FK)?</p>
                              <p><span className="text-blue-400">name:</span> string</p>
                              <p><span className="text-blue-400">email:</span> string</p>
                              <p><span className="text-blue-400">phone:</span> string?</p>
                              <p><span className="text-blue-400">instagram_handle:</span> string?</p>
                              <p><span className="text-blue-400">status:</span> enum</p>
                              <p><span className="text-blue-400">reminder_opt_in:</span> boolean</p>
                              <p><span className="text-blue-400">checked_in:</span> boolean</p>
                              <p><span className="text-blue-400">rsvp_date:</span> timestamp</p>
                            </div>
                          </div>
                          
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 text-white">User</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                              <p><span className="text-blue-400">id:</span> uuid (PK)</p>
                              <p><span className="text-blue-400">name:</span> string</p>
                              <p><span className="text-blue-400">email:</span> string</p>
                              <p><span className="text-blue-400">instagram_id:</span> string?</p>
                              <p><span className="text-blue-400">instagram_handle:</span> string?</p>
                              <p><span className="text-blue-400">avatar_url:</span> string?</p>
                              <p><span className="text-blue-400">created_at:</span> timestamp</p>
                            </div>
                          </div>
                          
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="font-medium mb-2 text-white">MediaItem</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                              <p><span className="text-blue-400">id:</span> uuid (PK)</p>
                              <p><span className="text-blue-400">event_id:</span> uuid (FK)</p>
                              <p><span className="text-blue-400">uploader_id:</span> uuid (FK)</p>
                              <p><span className="text-blue-400">media_url:</span> string</p>
                              <p><span className="text-blue-400">media_type:</span> enum</p>
                              <p><span className="text-blue-400">upload_date:</span> timestamp</p>
                              <p><span className="text-blue-400">approved:</span> boolean</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Architecture Diagram */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">System Architecture</h3>
                    <div className="bg-gray-700 p-4 rounded-lg text-center">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-blue-900 p-2 rounded text-sm">
                          Mobile App<br/>
                          (PWA)
                        </div>
                        <div className="bg-blue-900 p-2 rounded text-sm">
                          Instagram<br/>
                          Integration
                        </div>
                        <div className="bg-blue-900 p-2 rounded text-sm">
                          Web App<br/>
                          (Next.js)
                        </div>
                      </div>
                      
                      <div className="flex justify-center my-2">
                        <div className="w-1/2 border-b-2 border-gray-500"></div>
                      </div>
                      
                      <div className="bg-purple-900 p-2 rounded text-sm mb-4 mx-auto w-2/3">
                        API Layer<br/>
                        (REST + GraphQL)
                      </div>
                      
                      <div className="flex justify-center my-2">
                        <div className="w-1/2 border-b-2 border-gray-500"></div>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-2 mb-4">
                        <div className="bg-indigo-900 p-2 rounded text-xs">
                          Event<br/>
                          Service
                        </div>
                        <div className="bg-indigo-900 p-2 rounded text-xs">
                          User<br/>
                          Service
                        </div>
                        <div className="bg-indigo-900 p-2 rounded text-xs">
                          Notification<br/>
                          Service
                        </div>
                        <div className="bg-indigo-900 p-2 rounded text-xs">
                          Media<br/>
                          Service
                        </div>
                        <div className="bg-indigo-900 p-2 rounded text-xs">
                          Payment<br/>
                          Service
                        </div>
                      </div>
                      
                      <div className="flex justify-center my-2">
                        <div className="w-1/2 border-b-2 border-gray-500"></div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-green-900 p-2 rounded text-xs">
                          PostgreSQL<br/>
                          Database
                        </div>
                        <div className="bg-green-900 p-2 rounded text-xs">
                          Media<br/>
                          Storage
                        </div>
                        <div className="bg-green-900 p-2 rounded text-xs">
                          Redis<br/>
                          Cache
                        </div>
                      </div>
                      
                      <div className="flex justify-center my-2">
                        <div className="w-1/2 border-b-2 border-dashed border-gray-500"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-amber-900 p-2 rounded text-xs">
                          Instagram<br/>
                          API
                        </div>
                        <div className="bg-amber-900 p-2 rounded text-xs">
                          Maps<br/>
                          API
                        </div>
                        <div className="bg-amber-900 p-2 rounded text-xs">
                          Stripe<br/>
                          API
                        </div>
                        <div className="bg-amber-900 p-2 rounded text-xs">
                          Notification<br/>
                          Services
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Implementation Considerations */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Implementation Considerations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Authentication & Privacy</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>Instagram OAuth for social features</li>
                          <li>Email/phone verification for guest users</li>
                          <li>Role-based permissions for hosts/attendees</li>
                          <li>GDPR-compliant data handling</li>
                          <li>Event privacy controls (public, private, unlisted)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Scalability</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>Horizontal scaling for API layer</li>
                          <li>CDN for static assets and media</li>
                          <li>Database sharding for large event volumes</li>
                          <li>Queue-based processing for notifications</li>
                          <li>Service isolation for independent scaling</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Monitoring & Analytics</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>User engagement metrics collection</li>
                          <li>Conversion tracking (views → RSVPs)</li>
                          <li>Performance monitoring and alerting</li>
                          <li>Error tracking and reporting</li>
                          <li>A/B testing framework for UI iterations</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-white">Reliability</h4>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          <li>Offline support for critical event info</li>
                          <li>Retry mechanisms for payment processing</li>
                          <li>Fault tolerance for notification delivery</li>
                          <li>Backup systems for event data</li>
                          <li>Rate limiting to prevent abuse</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default InstagramEvents;
