export function Footer() {
  const socialLinks = [
    { icon: "🐦", label: "Twitter", url: "#" },
    { icon: "💼", label: "LinkedIn", url: "#" },
    { icon: "🐙", label: "GitHub", url: "#" },
    { icon: "📧", label: "Email", url: "#" },
    { icon: "📝", label: "Blog", url: "#" },
  ]

  return (
    <footer className="bg-black border-t-4 border-yellow-400 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Mario-style Game Over Screen */}
        <div className="text-center mb-8">
          <div className="inline-block p-6 bg-yellow-400 border-4 border-orange-500">
            {/* Screen */}
            <div className="bg-black border-4 border-orange-500 p-4 mb-4">
              <div className="text-yellow-400 text-sm font-bold mb-2">GAME COMPLETE!</div>
              <div className="text-white font-bold">THANKS FOR PLAYING!</div>
              <div className="text-white text-xs mt-2">Press START for new game...</div>
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-2">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-orange-500 border-2 border-black flex items-center justify-center text-black hover:bg-orange-600 hover:scale-110 transition-all duration-200 font-bold"
                  title={link.label}
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-4">
          <div className="text-white text-sm">
            <span className="text-yellow-400">©</span> 2005 Production
          </div>

          <div className="flex justify-center items-center space-x-4 text-xs text-white">
            <span>Built with Next.js</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
          </div>

          <div className="text-xs text-yellow-400 font-mono">
            &gt; Ready Player One? Let's-a-go build something epic! &lt;
          </div>
        </div>
      </div>
    </footer>
  )
}
