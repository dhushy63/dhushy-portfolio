"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [progress, setProgress] = useState(0);
  const [techProgress, setTechProgress] = useState({
    "React/Next.js": 0,
    Flutter: 0,
    "Node.js": 0,
    "AI/ML": 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const techInterval = setInterval(() => {
      setTechProgress((prev) => {
        const newProgress = { ...prev };
        const techs = Object.keys(newProgress);
        techs.forEach((tech) => {
          if (newProgress[tech] < 100) {
            newProgress[tech] = Math.min(
              100,
              newProgress[tech] + Math.random() * 3
            );
          }
        });
        return newProgress;
      });
    }, 100);
    return () => clearInterval(techInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" stroke="#333" strokeWidth="1" />
              <rect x="20" y="20" width="80" height="80" fill="none" stroke="#333" strokeWidth="1" />
              <rect x="40" y="40" width="40" height="40" fill="none" stroke="#333" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Boxes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-gray-700 opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            DHUSHYANTH RENGANATHAN
          </h1>
          <p className="text-lg md:text-xl text-gray-400 tracking-wide">
            Full Stack Developer
          </p>
        </div>

        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border-2 border-gray-700 relative">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-300 mb-2">Initializing Systems...</p>
          <p className="text-sm text-gray-500">{progress}% Complete</p>
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full mb-12 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl mb-12">
          {Object.entries(techProgress).map(([tech, progress]) => (
            <div key={tech} className="text-center">
              <p className="text-sm text-gray-400 mb-2">{tech}</p>
              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl w-full px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">ZenChat</h3>
              <p className="text-gray-400 text-sm">An AI-powered mental health chatbot built with Flutter and OpenAI API. Integrated Firebase authentication and real-time chat storage. Includes sentiment-aware logic for response adaptation.</p>
              <a href="https://github.com/dhushy63/ZenChat" className="text-sm text-cyan-400 underline">GitHub</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">RoomieConnect</h3>
              <p className="text-gray-400 text-sm">A roommate finder app using React, Tailwind CSS, and Firebase. Features authentication, CRUD operations, and Google Geocoding API for map location.</p>
              <a href="https://github.com/dhushy63/RoomieConnect" className="text-sm text-cyan-400 underline">GitHub</a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div>HTML/CSS</div>
            <div>JavaScript</div>
            <div>React / Next.js</div>
            <div>Flutter</div>
            <div>Node.js / Express.js</div>
            <div>Firebase</div>
            <div>MySQL</div>
            <div>C++ / Python / Java</div>
            <div>Git / GitHub</div>
            <div>Linux</div>
          </div>
        </div>

        <div className="max-w-4xl w-full px-4 mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div>
            <h3 className="text-lg font-semibold text-cyan-400">Software Developer Intern @ KrayaDotShop</h3>
            <p className="text-gray-400 text-sm">May 2024 – July 2024</p>
            <ul className="list-disc pl-5 text-sm text-gray-400">
              <li>Built responsive site using HTML, CSS, and JS for e-commerce launch</li>
              <li>Developed seller app with Flutter + Firebase</li>
              <li>Collaborated with 5 interns using GitHub</li>
              <li><a href="https://kraya-website.vercel.app/" className="text-cyan-400 underline">kraya-website.vercel.app</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-center">
          <p>Email: <a href="mailto:dhushyanthrenganathan@gmail.com" className="text-cyan-400">dhushyanthrenganathan@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/dhushy63" className="text-cyan-400">github.com/dhushy63</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/dhushyanth-renganathan-340205242/" className="text-cyan-400">linkedin.com/in/dhushyanth-renganathan</a></p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 w-3 h-3 bg-cyan-400 opacity-60" />
    </div>
  );
}