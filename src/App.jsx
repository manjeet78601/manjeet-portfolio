import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "./assets/Manjeet.png";

const projects = [
  {
    title: "Flash to React Migration",
    description: "Migrated legacy Flash modules to React + TypeScript with performance improvement.",
    tech: ["React", "TypeScript"],
  },
  {
    title: "AI Chatbot",
    description: "Real-time chatbot using OpenAI APIs.",
    tech: ["React", "Node.js", "OpenAI"],
  },
  {
    title: "Maze Generator",
    description: "Canvas-based maze generator with multiple patterns.",
    tech: ["React", "Canvas"],
  },
  {
    title: "Legacy Migration Engine",
    description: "Migrated enterprise legacy systems to modern React architecture.",
    tech: ["React", "TypeScript", "Microfrontend"],
  },
  {
    title: "Image Compressor Tool",
    description: "Client-side image compression tool for performance optimization.",
    tech: ["React", "Performance"],
  },
];

const experiences = [
  {
    role: "Frontend Architect",
    company: "Harman",
    impact: "Designed scalable UI architecture, microfrontend systems, and performance optimization at enterprise level.",
  },
  {
    role: "Senior Frontend Developer",
    company: "Capco",
    impact: "Built enterprise dashboards, reusable component systems, and improved application performance.",
  },
  {
    role: "Frontend Developer",
    company: "Oxygen Services Pvt Ltd",
    impact: "Developed responsive React applications, optimized UI performance, and built reusable component libraries.",
  },
  {
    role: "Frontend Engineer",
    company: "Freelance / Personal Projects",
    impact: "Built multiple React-based applications including dashboards, tools, and UI systems with performance focus.",
  },
];

const techStack = [
  {
    name: "JavaScript",
    points: ["ES6+", "Async/Await", "Closures", "Event Loop", "Debouncing", "Throttling"],
  },
  {
    name: "React",
    points: ["Hooks", "Virtual DOM", "Performance Optimization", "Custom Hooks"],
  },
  {
    name: "Angular",
    points: ["RxJS", "Dependency Injection", "Change Detection"],
  },
  {
    name: "TypeScript",
    points: ["Interfaces", "Generics", "Type Safety", "Utility Types"],
  },
  {
    name: "Redux",
    points: ["State Management", "Middleware", "Redux Toolkit"],
  },
  {
    name: "Performance",
    points: ["Lazy Loading", "Code Splitting", "Memoization", "Bundle Optimization"],
  },
  {
    name: "Microfrontend",
    points: ["Module Federation", "Independent Deployment"],
  },
  {
    name: "Nx",
    points: ["Monorepo", "Scalable Architecture", "Code Sharing"],
  },
  {
    name: "DevOps / CI-CD",
    points: ["AWS (S3, CloudFront)", "CI/CD Pipelines", "GitHub Actions", "Jenkins", "Automated Deployment"],
  },
];

export default function App() {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div style={styles.app}>

      {/* HERO */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={styles.heroLeft}>
          <h1 style={styles.title}>Manjeet Singh</h1>
          <p style={styles.subtitle}>Frontend Architect • System Design • Performance Engineering</p>
          <p style={styles.meta}>📞 +91-8860285276 • ✉️ manjeetpathania09@gmail.com</p>

          <div style={styles.ctaRow}>
            <button style={styles.primaryBtn}>Hire Me</button>
            <a href="/resume.pdf" download style={styles.secondaryBtn}>Download Resume</a>
          </div>
        </motion.div>

        <motion.div style={styles.heroRight}>
          <motion.img
            src={profile}
            style={styles.image}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* TECH STACK */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Tech Stack</h2>
        <div style={styles.techGrid}>
          {techStack.map((t) => (
            <div key={t.name} style={styles.techCard}>
              <h3 style={styles.techTitle}>{t.name}</h3>
              <div style={styles.chipWrap}>
                {t.points.map((p) => (
                  <span key={p} style={styles.chip}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Experience</h2>
        <div style={styles.expGrid}>
          {experiences.map((e) => (
            <div key={e.role} style={styles.experienceCard}>
              <h3 style={styles.expRole}>{e.role}</h3>
              <p style={styles.expCompany}>{e.company}</p>
              <p style={styles.expImpact}>{e.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.section}>
        <div style={styles.row}>
          <h2 style={styles.heading}>Projects</h2>
          <button onClick={() => setShowProjects(!showProjects)} style={styles.smallBtn}>
            {showProjects ? "Hide" : "Show"}
          </button>
        </div>

        {showProjects && (
          <div style={styles.projectGrid}>
            {projects.map((p) => (
              <div key={p.title} style={styles.projectCard}>
                <h3 style={styles.projectTitle}>{p.title}</h3>
                <p style={styles.projectDesc}>{p.description}</p>
                <div style={styles.projectBadgeWrap}>
                  {p.tech.map((t) => (
                    <span key={t} style={styles.projectBadge}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FLOATING CONTACT */}
      <div style={styles.fabBox}>
        <a href="tel:+918860285276" style={styles.fab}>📞</a>
        <a href="mailto:manjeetpathania09@gmail.com" style={styles.fab}>✉️</a>
        <a href="https://wa.me/918860285276" target="_blank" rel="noreferrer" style={styles.fab}>💬</a>
      </div>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Manjeet Singh • React Portfolio
      </footer>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    background: "#0b1220",
    color: "white",
    minHeight: "100vh",
    padding: 20,
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 0",
  },
  heroLeft: { flex: 1 },
  heroRight: { flex: 1, display: "flex", justifyContent: "flex-end" },
  title: { fontSize: 48, fontWeight: "bold" },
  subtitle: { opacity: 0.8, marginTop: 10 },
  meta: { marginTop: 10, fontSize: 14, opacity: 0.7 },
  image: {
    width: 240,
    height: 240,
    borderRadius: "50%",
    border: "3px solid #3b82f6",
    objectFit: "cover",
  },
  section: { marginTop: 40 },
  heading: { fontSize: 22, marginBottom: 10 },

  expGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 15,
    marginTop: 15,
  },
  experienceCard: {
    padding: 18,
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
  },
  expRole: { fontSize: 16, fontWeight: "bold", color: "#93c5fd" },
  expCompany: { fontSize: 13, opacity: 0.8, marginBottom: 8 },
  expImpact: { fontSize: 13, opacity: 0.9, lineHeight: 1.5 },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 15,
    marginTop: 15,
  },
  projectCard: {
    padding: 18,
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
  },
  projectTitle: { fontSize: 16, fontWeight: "bold", color: "#a78bfa" },
  projectDesc: { fontSize: 13, opacity: 0.85, marginTop: 6, lineHeight: 1.5 },
  projectBadgeWrap: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 },
  projectBadge: {
    fontSize: 11,
    padding: "3px 8px",
    borderRadius: 20,
    background: "rgba(168,85,247,0.15)",
    border: "1px solid rgba(168,85,247,0.3)",
    color: "#ddd6fe",
  },

  techGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 15,
    marginTop: 15,
  },
  techCard: {
    padding: 16,
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  techTitle: { fontSize: 16, marginBottom: 10, color: "#93c5fd" },
  chipWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: {
    fontSize: 12,
    padding: "4px 10px",
    borderRadius: 20,
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.3)",
    color: "#bfdbfe",
  },

  row: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  ctaRow: { display: "flex", gap: 10, marginTop: 15 },
  primaryBtn: {
    padding: "10px 16px",
    background: "#3b82f6",
    color: "white",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 16px",
    border: "1px solid #3b82f6",
    borderRadius: 8,
    background: "transparent",
    color: "white",
    textDecoration: "none",
  },
  smallBtn: { padding: 6 },
  fabBox: {
    position: "fixed",
    bottom: 20,
    right: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  fab: {
    padding: 10,
    background: "#3b82f6",
    borderRadius: 10,
    color: "white",
    textDecoration: "none",
    textAlign: "center",
  },
  footer: {
    marginTop: 50,
    textAlign: "center",
    opacity: 0.6,
    fontSize: 12,
  },
};
