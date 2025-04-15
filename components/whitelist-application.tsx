"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, LogIn } from "lucide-react"
import { LogOut } from 'lucide-react';
import { useDiscordAuth } from '../lib/discord';

export function WhitelistApplication() {
  const { user, loading, login, logout } = useDiscordAuth();
  const [formStatus, setStatus] = useState<"idle" | "submitting" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    characterName: '',
    characterAge: '',
    backstory: '',
    goals: '',
    rpExperience: '',
    age: '',
    whyJoin: '',
    scenario1: '',
    scenario2: '',
    scenario3: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
  
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          discordUser: user, // contains id, username, avatar, etc.
        }),
      });

      console.log("API route loaded");
  
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };
  

  return (
    <section id="whitelist" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#00ff00] via-white to-[#ff9900] bg-clip-text text-transparent">
            Whitelist Application
          </h2>
          <p className="text-xl text-zinc-400">
            Apply to join our whitelisted roleplay server and become part of our community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-zinc-700 bg-zinc-800/50">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Discord Username</Label>
                  {!loading && (
                    user ? (
                      <div className="flex items-center justify-between bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg border border-gray-600 transition-all duration-300 hover:border-blue-500/50">
                        <div className="flex items-center">
                          {user.avatar && (
                            <img
                              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                              alt={user.username}
                              className="w-8 h-8 rounded-full mr-3 transition-transform duration-300 hover:scale-110"
                            />
                          )}
                          <span className="text-white font-semibold">{user.username}</span>
                        </div>
                        <button
                          onClick={logout}
                          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                        >
                          <LogOut className="w-5 h-5 mr-2" />
                          Logout
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={login}
                        className="w-full inline-flex items-center justify-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/50"
                      >
                        <LogIn className="w-5 h-5 mr-2" />
                        Login with Discord
                      </button>
                    )
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Your Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="18+"
                    className="bg-zinc-900 border-zinc-700"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whyJoin">Why do you want to join Starline RP?</Label>
                  <Textarea
                    id="whyJoin"
                    name="whyJoin"
                    placeholder="Tell us what attracts you to Starline RP and what you hope to contribute to our community..."
                    className="min-h-[150px] bg-zinc-900 border-zinc-700"
                    value={formData.whyJoin}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="characterName">Character Full Name</Label>
                  <Input
                    id="characterName"
                    name="characterName"
                    placeholder="John Doe"
                    className="bg-zinc-900 border-zinc-700"
                    value={formData.characterName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="characterAge">Character Age</Label>
                  <Input
                    id="characterAge"
                    name="characterAge"
                    type="number"
                    placeholder="25"
                    className="bg-zinc-900 border-zinc-700"
                    value={formData.characterAge}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backstory">Character Backstory</Label>
                  <Textarea
                    id="backstory"
                    name="backstory"
                    placeholder="Tell us about your character's background, history, and motivations..."
                    className="min-h-[150px] bg-zinc-900 border-zinc-700"
                    value={formData.backstory}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Character Goals</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    placeholder="What are your character's short and long-term goals in the city?"
                    className="min-h-[100px] bg-zinc-900 border-zinc-700"
                    value={formData.goals}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rpExperience">Previous RP Experience</Label>
                  <Textarea
                    id="rpExperience"
                    name="rpExperience"
                    placeholder="Tell us about your previous roleplay experience. Have you played on other FiveM servers?"
                    className="min-h-[150px] bg-zinc-900 border-zinc-700"
                    value={formData.rpExperience}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scenario1">
                    Scenario 1: You are pulled over by police for speeding. How would your character react?
                  </Label>
                  <Textarea
                    id="scenario1"
                    name="scenario1"
                    placeholder="Describe your character's reaction and roleplay..."
                    className="min-h-[100px] bg-zinc-900 border-zinc-700"
                    value={formData.scenario1}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scenario2">
                    Scenario 2: You witness a robbery at a local store. What would your character do?
                  </Label>
                  <Textarea
                    id="scenario2"
                    name="scenario2"
                    placeholder="Describe your character's reaction and roleplay..."
                    className="min-h-[100px] bg-zinc-900 border-zinc-700"
                    value={formData.scenario2}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scenario3">
                    Scenario 3: Your character is approached by a stranger offering illegal work. How would they respond?
                  </Label>
                  <Textarea
                    id="scenario3"
                    name="scenario3"
                    placeholder="Describe your character's reaction and roleplay..."
                    className="min-h-[100px] bg-zinc-900 border-zinc-700"
                    value={formData.scenario3}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-zinc-700 p-6">
              {formStatus === "idle" && (
                <Button
                  onClick={handleSubmit}
                  disabled={!user}
                  className={`bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 ${
                    !user ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {user ? 'Submit Application' : 'Login Required'}
                </Button>
              )}

              {formStatus === "submitting" && (
                <Button disabled className="bg-zinc-700">
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Submitting...
                </Button>
              )}

              {formStatus === "success" && (
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                  <span>Application submitted successfully! We'll review it and contact you on Discord.</span>
                </div>
              )}

              {formStatus === "error" && (
                <div className="flex items-center gap-2 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                  <span>
                    {!user
                      ? 'Please login with Discord to submit your application.'
                      : 'There was an error submitting your application. Please try again.'}
                  </span>
                </div>
              )}
            </CardFooter>
          </Card>

          <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <p className="text-orange-400 text-sm">
              <strong>Note:</strong> All applications are reviewed by our staff team. The process typically takes 24-48
              hours. Make sure to join our Discord server as we'll contact you there regarding your application status.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}