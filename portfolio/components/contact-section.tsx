"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: "💼",
      label: "LINKEDIN",
      value: "/in/sahejsinghsodhi",
      action: "CONNECT",
      link: "https://www.linkedin.com/in/sahejsinghsodhi/",
    },
    {
      icon: "🐙",
      label: "GITHUB",
      value: "/Sodhi-S",
      action: "VIEW PAGE",
      link: "https://github.com/Sodhi-S",
    },
  ]

  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-yellow-400 text-sm font-bold tracking-wider mb-2">&gt; WARP ZONE...</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CONNECT & COLLABORATE</h2>
          <p className="text-white max-w-2xl mx-auto">
            Ready for a new adventure? Let's team up and build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 text-center bg-yellow-400 border-4 border-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
              <h3 className="text-lg font-bold text-black mb-2">{method.label}</h3>
              <p className="text-black text-sm mb-4 font-medium">{method.value}</p>
              <Button
                size="sm"
                className="w-full font-bold text-xs tracking-wider bg-orange-500 hover:bg-orange-600 text-black border-2 border-black"
                asChild={!!method.link}
              >
              <a href={method.link} target="_blank" rel="noopener noreferrer">{method.action}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="p-8 bg-yellow-400 border-4 border-orange-500">
          <h3 className="text-xl font-bold text-black mb-6 text-center">MESSAGE BLOCK</h3>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2">PLAYER NAME</label>
                <input
                  type="text"
                  className="w-full p-3 bg-white border-2 border-black text-black font-mono text-sm focus:border-orange-500 focus:outline-none"
                  placeholder="Enter your name..."
                  value={playerName}
                  onChange={e => setPlayerName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="w-full p-3 bg-white border-2 border-black text-black font-mono text-sm focus:border-orange-500 focus:outline-none"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">MESSAGE</label>
              <textarea
                rows={4}
                className="w-full p-3 bg-white border-2 border-black text-black font-mono text-sm focus:border-orange-500 focus:outline-none resize-none"
                placeholder="Describe your project or collaboration idea..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            <a
              href={`mailto:sahej.sodhi@outlook.com?subject=New%20Message%20from%20${encodeURIComponent(playerName)}&body=Name:%20${encodeURIComponent(playerName)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`}
            >
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold tracking-wider border-2 border-black"
                asChild={false}
              >
                🚀 SEND MESSAGE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
