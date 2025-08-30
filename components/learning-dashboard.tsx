"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Palette, Shapes, Heart, Users, Brain, Target, Star, Play, Clock, Trophy, Smile } from "lucide-react"

const learningLevels = [
  {
    id: "basic",
    title: "Basic",
    description: "A1 ABC Colors Shapes",
    progress: 85,
    topics: ["All Rights/Wrongs (F01)", "Chaos & Prompting (F03)", "Token Economy (F05)"],
    color: "bg-green-100 text-green-800",
  },
  {
    id: "pre-intermediate",
    title: "Pre-Intermediate",
    description: "Social Cues, Facial/Emotion Recognition",
    progress: 60,
    topics: ["Mom, Dad, Teacher (Pre-K/Kg)", "What is Eating? (Add Activity)", "Memory Test/Heavy Pizza"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Physical Awareness",
    progress: 40,
    topics: ["Fine motor skills", "Gross motor skills", "Spacial Awareness"],
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "AAC/ASL",
    progress: 20,
    topics: ["Advanced Communication", "Sign Language Basics", "Complex Interactions"],
    color: "bg-purple-100 text-purple-800",
  },
]

const sidebarItems = [
  { icon: Palette, label: "Colors", active: true },
  { icon: Shapes, label: "Shapes" },
  { icon: BookOpen, label: "ABC" },
  { icon: Users, label: "Name Recognition" },
  { icon: Heart, label: "Face Recognition" },
  { icon: Smile, label: "Emotions" },
  { icon: Brain, label: "Physical Movement" },
  { icon: Target, label: "Relaxation/Therapy" },
]

const quickAccessItems = [
  { icon: Play, label: "Hello", color: "bg-green-500" },
  { icon: Clock, label: "Break Time", color: "bg-blue-500" },
  { icon: Heart, label: "Help", color: "bg-red-500" },
  { icon: Star, label: "Thirsty/Drink", color: "bg-yellow-500" },
  { icon: Trophy, label: "Hurt", color: "bg-purple-500" },
]

export function LearningDashboard() {
  const [activeLevel, setActiveLevel] = useState("basic")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Learning Dashboard</h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              Student Progress
            </Badge>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar for Skill Levels */}
        <aside className="w-80 border-r bg-sidebar flex flex-col h-screen">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Skill Levels</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {learningLevels.map((level) => (
                <Card
                  key={level.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    activeLevel === level.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveLevel(level.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{level.title}</CardTitle>
                      <Badge className={level.color} variant="secondary">
                        {level.progress}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{level.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Progress value={level.progress} className="h-1.5" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 pb-24">
          <div className="max-w-4xl">
            {/* Main Screen Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-balance mb-2">Main Screen</h2>
              <p className="text-muted-foreground">Track your learning progress across different skill levels</p>
            </div>

            {/* Active Level Details */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Current Focus: {learningLevels.find((l) => l.id === activeLevel)?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Achievements</h3>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Time Spent</h3>
                    <p className="text-2xl font-bold text-primary">2.5h</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Next Goal</h3>
                    <p className="text-sm text-muted-foreground">Complete Fine Motor Skills</p>
                  </div>
                </div>

                {/* Learning Topics for Active Level */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Learning Topics:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {learningLevels
                      .find((l) => l.id === activeLevel)
                      ?.topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l bg-sidebar flex flex-col h-screen">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Activities</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? "default" : "ghost"}
                  className="w-full justify-start gap-3 h-12"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Quick Talk Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 z-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-medium mb-3">Quick Talk Bar</h3>
          <div className="flex gap-2 justify-center">
            {quickAccessItems.map((item, index) => (
              <Button key={index} variant="outline" size="sm" className="h-16 flex-col gap-1 bg-transparent min-w-20">
                <item.icon className="h-4 w-4" />
                <span className="text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
