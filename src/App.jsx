import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import Photo from "./assets/Photo.jpg";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const [projects] = useState([
    {
      title: "Sky-Sage",
      description:
        "AI-powered astrology chatbot with horoscopes, tarot, and live chat using Flask and GPT-2.",
      link: "https://github.com/vartikashah018/Sky-Sage-Astrology-AI-Chatbot",
    },
    {
      title: "SocialeX",
      description:
        "MERN social media app with messaging, stories, secure login, and Firebase media.",
      link: "https://github.com/vartikashah018/Social-media-app-MERN",
    },
    {
      title: "Smart Produce Inventory System",
      description:
        "Computer vision system to detect and track produce with OpenCV and Python.",
      link: "https://github.com/vartikashah018/Smart-Inventory",
    },
  ]);

  const testimonials = [
    {
      name: "Peer Mentor Feedback",
      quote: "Vartika is always ready to help and has a great knack for solving JS and Python bugs!",
    },
    {
      name: "Project Teammate",
      quote: "Her leadership during the inventory project helped us deliver on time with quality.",
    },
  ];

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-800"} font-sans min-h-screen transition-all`}>
      {/* Intro Animation Screen */}
{showIntro && (
  <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-10">
    {/* Left: Text Block */}
    <motion.div
      className="md:w-1/2 space-y-6 text-center md:text-left"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">
        Hi, I’m <span className="text-purple-700 dark:text-purple-400">Vartika</span>
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300">I build web + AI.</p>
      <button
        onClick={() => setShowIntro(false)}
        className="mt-4 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        Explore Portfolio
      </button>
    </motion.div>

    {/* Right: Image */}
    <motion.div
      className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={Photo}
        alt="Vartika Shah"
        className="w-72 h-72 rounded-full border-8 border-white shadow-2xl object-cover"
      />
    </motion.div>
  </div>
)}

    <header className="flex items-center justify-between p-6 bg-purple-700 dark:bg-gray-800 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src={Photo} alt="Vartika Shah" className="w-10 h-10 rounded-full shadow-lg border-2 border-white" />
        <div className="text-lg font-semibold">
          <Typewriter
            options={{
              strings: ["Vartika Shah", "Software Developer", "AI Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />    
        </div>
      </div>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-purple-600 transition">
        {darkMode ? <Sun className="text-white" /> : <Moon className="text-white" />}
      </button>
    </header>

    <main className="p-6 max-w-6xl mx-auto space-y-16">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center gap-6">
        <img src={Photo} alt="Vartika Shah" className="w-32 h-32 rounded-full shadow-lg border-4 border-purple-500" />
        <a
          href="/VARTIKA_SHAH_RESUME.pdf"
          download
          className="px-5 py-2 bg-purple-700 text-white rounded-full shadow hover:bg-purple-800 transition"
        >
          Download Resume
        </a>
        <div className="flex gap-4 mt-2 md:ml-auto">
          <a href="https://github.com/vartikashah018" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 dark:hover:text-purple-300">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/vartikashah018" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 dark:hover:text-purple-300">
            <Linkedin />
          </a>
          <a href="mailto:vartikashah27@gmail.com" className="hover:text-purple-700 dark:hover:text-purple-300">
            <Mail />
          </a>
        </div>
      </section>

      {/* About Me */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2 border-purple-500">About Me</h2>
        <p className="leading-relaxed text-lg">
          Motivated and detail-oriented graduate with a strong foundation in software
          development, data handling, and emerging technologies. Passionate about
          building efficient, user-centric solutions.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2 border-purple-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
              <a
                href={project.link}
                className="text-purple-600 dark:text-purple-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2 border-purple-500">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Java", "Python", "JavaScript", "React.js", "Node.js", "Flask", "SQL", "MongoDB", "MySQL", "Git", "REST APIs", "OpenCV"].map((skill, i) => (
            <span
              key={i}
              className="bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-white text-sm px-4 py-1 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2 border-purple-500">Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-purple-100 dark:bg-purple-900 p-4 rounded-xl shadow border-l-4 border-purple-600">
              <p className="italic text-gray-800 dark:text-gray-200">“{t.quote}”</p>
              <p className="text-sm text-right mt-2 font-semibold text-purple-700 dark:text-purple-300">– {t.name}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2 border-purple-500">Contact Me</h2>
        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="space-y-4 max-w-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-full shadow hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </main>

    <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Vartika Shah. All rights reserved.
    </footer>
    </div>
  );
}