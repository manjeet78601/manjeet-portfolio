import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Analytics Dashboard",
    description:
      "Scalable React + TypeScript dashboard with performance optimization.",
    tech: ["React", "TypeScript", "Redux"],
  },
  {
    title: "Smart AutoComplete Search",
    description: "Debounced autocomplete with caching.",
    tech: ["React", "Hooks"],
  },
  {
    title: "No-Code Page Builder",
    description: "Drag & drop builder.",
    tech: ["React", "DnD"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-blue-100">
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-semibold mb-4 text-white"
          >
            Manjeet Singh
          </motion.h1>

          <p className="text-blue-200 mb-4">
            Senior Frontend Engineer | React | Angular | 11+ Years
          </p>

          <p className="text-blue-300 mb-2">📱 +91-8860285276</p>
          <p className="text-blue-300 mb-6">✉️ manjeetpathania09@gmail.com</p>

          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-500 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-600">
              View Projects
            </a>
            <a href="/resume.pdf" download className="border border-blue-400 px-5 py-2 rounded-md text-sm hover:bg-blue-800">
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-56 h-56 rounded-full object-cover border border-blue-400 shadow-lg"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["React","Angular","TypeScript","Redux","Performance"].map((skill) => (
            <span key={skill} className="bg-blue-800/50 px-3 py-1 rounded-md text-sm border border-blue-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10 text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.title} whileHover={{ y: -6 }}
              className="bg-blue-900/60 p-6 rounded-lg border border-blue-800 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-blue-200 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-blue-800 px-2 py-1 rounded border border-blue-700">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-blue-800">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
        <p className="text-blue-200">Email: manjeetpathania09@gmail.com</p>
        <p className="text-blue-200">Phone: +91-8860285276</p>
      </section>
    </div>
  );
}
