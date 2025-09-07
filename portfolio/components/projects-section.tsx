import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "SPEECH EMOTION RECOGNITION",
      description: "talk about AI model i trained",
      tech: ["Python", "TensorFlow", "Keras", "EVERY OTHER SHIT"],
      status: "COMPLETED",
      difficulty: "★★★☆☆",
      achievement: "🏆",
      link: "https://github.com/Sodhi-S/Speech-Emotion-Recognition",
    },
    {
      title: "GO PHISH",
      description: "Phishing email detection chrome extension + AI based detection",
      tech: ["Python", "Scikit-learn", "Docker", "AWS"],
      status: "COMPLETED",
      difficulty: "★★★★★",
      achievement: "💎",
      link: "https://github.com/Sodhi-S/Go-Phish",
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Credit card fraud detection using machine learning",
      tech: ["React", "D3.js", "WebSocket", "Node.js"],
      status: "COMPLETED",
      difficulty: "★★★☆☆",
      achievement: "🥈",
      link: "https://github.com/Sodhi-S/CreditCard_Fraud_Detection",
    },
    {
      title: "STATSANITY",
      description: "NBA statistics prediction using neural networks :)",
      tech: ["JavaScript", "TensorFlow.js", "Three.js"],
      status: "COMPLETED",
      difficulty: "★★★★☆",
      achievement: "🎨",
      link: "https://github.com/Sodhi-S/NBA-Statistics-Prediction",
    },
    {
      title: "FAKE NEWS DETECTION",
      description: "ngl this was how i started pandas lol",
      tech: ["Python", "Pandas", "API Integration"],
      status: "COMPLETED",
      difficulty: "★★★★★",
      achievement: "⚡",
      link: "https://github.com/Sodhi-S/Fake-News-Detection",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-orange-500 text-sm font-bold tracking-wider mb-2">&gt; LEVEL SELECT...</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">COMPLETED WORLDS</h2>
          <p className="text-white max-w-2xl mx-auto">
            Adventures completed in the kingdoms of data science and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-yellow-400 border-4 border-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer group relative"
            >
              <div className="absolute top-4 right-4 text-lg text-black">{project.achievement}</div>

              <div
                className={`inline-block px-2 py-1 text-xs font-bold mb-4 border-2 ${
                  project.status === "COMPLETED"
                    ? "bg-orange-500 text-black border-black"
                    : project.status === "IN PROGRESS"
                      ? "bg-black text-white border-orange-500"
                      : "bg-black text-white border-yellow-400"
                }`}
              >
                {project.status}
              </div>

              <h3 className="text-lg font-bold text-black mb-3">{project.title}</h3>

              <p className="text-black text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-black font-bold">DIFFICULTY:</span>
                <span className="text-black text-sm font-bold">{project.difficulty}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-black text-white text-xs font-bold border border-orange-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-black border-2 border-black"
                >
                  VIEW PROJECT
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
