"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Mario-style title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-yellow-400">SAHEJ</span>
              <br />
              <span className="text-orange-500">SODHI</span>
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Data Scientist & Software Developer
              <br />
              im grinding until i get 2 the next checkpoint!
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-24 h-24 bg-yellow-400 border-4 border-orange-500 flex flex-col items-center justify-center text-black font-bold">
              <div className="text-2xl">5+</div>
              <div className="text-xs">YEARS</div>
            </div>
            <div className="w-24 h-24 bg-orange-500 border-4 border-yellow-400 flex flex-col items-center justify-center text-black font-bold">
              <div className="text-2xl">50+</div>
              <div className="text-xs">PROJECTS</div>
            </div>
            <div className="w-24 h-24 bg-yellow-400 border-4 border-orange-500 flex flex-col items-center justify-center text-black font-bold">
              <div className="text-2xl">∞</div>
              <div className="text-xs">IDEAS</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 border-4 border-orange-500 hover:text-black"
                >
                  START GAME
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Coming Soon</DialogTitle>
                <div className="text-center text-lg">This feature is coming soon!</div>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 border-4 border-yellow-400 hover:text-black"
            >
              VIEW RESUME
            </Button>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-32 h-32 bg-yellow-400 border-4 border-orange-500 flex items-center justify-center text-6xl text-black">
              🍄
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
