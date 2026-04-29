import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Analytics Dashboard",
    description:
      "Scalable React + TypeScript dashboard with role-based access, charts, lazy loading and performance optimization.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Chart.js", "MUI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart AutoComplete Search",
    description:
      "Debounced autocomplete with caching, keyboard navigation and API optimization using custom hooks.",
    tech: ["React", "Hooks", "Debounce", "API", "Performance"],
    github: "#",
    demo: "#",
  },
  {
    title: "No-Code Page Builder",
    description:
      "Drag and drop layout builder with JSON export, responsive preview and dynamic component rendering.",
    tech: ["React", "DnD", "Context API", "Tailwind", "LocalStorage"],
    github: "#",
    demo: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Manjeet Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 mb-4"
          >
            Senior Frontend Engineer | React | Angular | UI Architecture | 11+ Years
          </motion.p>

          <p className="text-blue-300 mb-2">📱 +91-8860285276</p>
          <p className="text-blue-300 mb-6">✉️ manjeetpathania09@gmail.com</p>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl hover:opacity-90">
              View Projects
            </button>

            <button className="border border-blue-400 px-6 py-3 rounded-2xl hover:bg-blue-800/40">
              Download Resume
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/300x300.png?text=Manjeet+Photo"
            alt="profile"
            className="w-64 h-64 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-300">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "Angular",
            "TypeScript",
            "JavaScript",
            "Redux",
            "Micro Frontend",
            "Performance",
            "System Design",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 backdrop-blur p-4 rounded-2xl border border-blue-800 hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-cyan-300">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-blue-900 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-200">
                {project.title}
              </h3>

              <p className="text-blue-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-900/60 px-2 py-1 rounded border border-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center text-sm text-cyan-300">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-300">Contact</h2>

        <div className="flex flex-col gap-2 text-blue-200">
          <span>📱 +91-XXXXXXXXXX</span>
          <span>✉️ manjeet@email.com</span>
          <span>LinkedIn: linkedin.com/in/manjeet</span>
          <span>GitHub: github.com/manjeet</span>
        </div>
      </section>
    </div>
  );
}
