import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Link,
  SquareKanban,
  FileCode2,
  Database,
  Server,
  Code,
  FileJson2,
  Atom,
  LayoutDashboard,
  Braces,
} from "lucide-react";
import imgsrc from "/m1.jpg"
import { Typewriter } from 'react-simple-typewriter';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", message: "" });
  };

  const handleExploreProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "JavaScript", icon: <SquareKanban /> },
    { name: "React", icon: <FileCode2 /> },
    { name: "Node.js", icon: <Server /> },
    { name: "Express.js", icon: <Code /> },
    { name: "MongoDB", icon: <Database /> },
    { name: "TailwindCSS", icon: <LayoutDashboard /> },
    { name: "Python", icon: <Atom /> },
    { name: "MySQL", icon: <Database /> },
    { name: "Next.js", icon: <FileJson2 /> },
    { name: "HTML/CSS", icon: <Braces /> },
  ];

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/70 backdrop-blur-md border-b border-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 ease-in-out">
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide drop-shadow-lg animate-pulse">
          Mukesh.dev
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 text-sm font-semibold tracking-wide">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (item === "home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  const section = document.getElementById(item);
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative text-white px-2 py-1 transition-all duration-300 ease-in-out hover:text-blue-400 hover:tracking-wider group"
            >
              <span className="relative z-10 capitalize">{item}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full blur-sm"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="sm:hidden">
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                const section = document.getElementById(value);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-black/60 border border-blue-400 text-blue-300 px-2 py-1 rounded-md text-sm"
          >
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="projects">Projects</option>
            <option value="skills">Skills</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </header>

      <div className="h-10"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 animate-fade-in-up relative">
        <div className="relative w-52 h-50 sm:w-64 sm:h-64 mb-4 mt-[-3rem] rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,212,255,0.5)] animate-glow">
          <img
            src={imgsrc}
            alt="Mukesh Dhadhariya"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h2 className="text-3xl sm:text-6xl font-bold mb-4 text-blue-400 leading-tight sm:leading-snug break-words">
          <span className="block sm:inline">Hey, I’m</span>{' '}
          <Typewriter
            words={['web developer 👋', 'Mukesh Dhadhariya']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </h2>

        <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-xl">
          Software & Web Developer | Passionate Coder | UI Craftsman
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={handleExploreProjects}
            className="bg-blue-600/80 hover:bg-blue-600/90 px-6 py-2 rounded-lg font-semibold backdrop-blur-md transition-transform hover:scale-105 shadow-md shadow-blue-400/30"
          >
            Explore Projects
          </button>
          <a
            href="./MukeshDhadhariya.pdf"
            download="MukeshDhadhariya.pdf"
            className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white px-6 py-2 rounded-lg font-semibold backdrop-blur-md transition-transform hover:scale-105 shadow-md shadow-blue-400/30"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center animate-fade-in-up"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl text-lg">
          I'm Mukesh Dhadhariya, a passionate full-stack web developer with a
          love for building beautiful UIs and seamless user experiences. From
          crafting clean frontends with React to building robust backend APIs
          using Node.js and Express, I enjoy turning ideas into fully functional
          digital products.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 animate-fade-in-up"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-8">My Work</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 w-full max-w-5xl">

          <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-blue-400 transition-transform hover:scale-105 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Neha AI - Personal AI Girlfriend
            </h4>
            <p className="text-gray-400 mb-3">
              An AI girlfriend chat app that mimics human behavior with toxic
              responses, memory training, and real-time actions. Built with
              React, Node.js, and OpenAI API.
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/mukeshdhadhariya/neha-ai"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Link className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-blue-400 transition-transform hover:scale-105 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-2 text-white">
              StudyMate - Study Material Sharing
            </h4>
            <p className="text-gray-400 mb-3">
              Responsive website to share study materials for college students
              categorized by year and branch. Built using React and Firebase.
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/mukeshdhadhariya/studymate"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://studymate-mukesh.netlify.app"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Link className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-blue-400 transition-transform hover:scale-105 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Random Audio Call App
            </h4>
            <p className="text-gray-400 mb-3">
              Randomly pairs users for anonymous audio calls. Built with React,
              WebRTC, and Socket.io.
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/mukeshdhadhariya/random-audio-call"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Link className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>

          <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-blue-400 transition-transform hover:scale-105 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Random Audio Call App
            </h4>
            <p className="text-gray-400 mb-3">
              Randomly pairs users for anonymous audio calls. Built with React,
              WebRTC, and Socket.io.
            </p>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/mukeshdhadhariya/random-audio-call"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <Link className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20   text-center animate-fade-in"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-6">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/70 px-4 py-5 rounded-md shadow-lg shadow-blue-400/10 hover:shadow-blue-400/40 transition-all duration-300 hover:scale-105 backdrop-blur-md flex flex-col items-center justify-center"
            >
              <div className="text-blue-400 mb-2">{skill.icon}</div>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center animate-fade-in-up"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-4">Get in Touch</h3>
        <p className="text-gray-400 mb-6">
          Let’s connect and create something amazing together!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md text-left"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:border-blue-400 backdrop-blur-md"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="p-3 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:border-blue-400 backdrop-blur-md"
          ></textarea>
          <button
            type="submit"
            className="text-center border border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white px-6 py-2 rounded-lg font-semibold backdrop-blur-md transition-transform hover:scale-105 shadow-md shadow-blue-400/30 w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="mailto:mukeshdhadhariya1@gmail.com"
            className="rounded-full p-3 bg-gray-800 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-400"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/mukeshdhadhariya"
            className="rounded-full p-3 bg-gray-800 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-400"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-dhadhariya-5a4b99290/"
            className="rounded-full p-3 bg-gray-800 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-400"
          >
            <Linkedin />
          </a>
        </div> */}

        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="mailto:mukeshdhadhariya1@gmail.com"
            className="flex items-center justify-center rounded-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white transition-transform hover:scale-105 shadow-md shadow-blue-400/30 backdrop-blur-md"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/mukeshdhadhariya"
            className="flex items-center justify-center rounded-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white transition-transform hover:scale-105 shadow-md shadow-blue-400/30 backdrop-blur-md"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-dhadhariya-5a4b99290/"
            className="flex items-center justify-center rounded-full p-3 border border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white transition-transform hover:scale-105 shadow-md shadow-blue-400/30 backdrop-blur-md"
          >
            <Linkedin />
          </a>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 p-6 text-sm bg-black/70 backdrop-blur-md animate-fade-in">
        © 2025 Mukesh Dhadhariya. Coded with 💙 using React & Tailwind.
      </footer>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </main>
  );
}
