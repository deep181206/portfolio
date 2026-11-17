
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Code2
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-[#080d18] text-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50
        bg-[#080d18]/90 backdrop-blur-lg
        border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5
          flex justify-between items-center">

          <a href="#home" className="text-2xl font-bold">
            Deepak M<span className="text-indigo-400">.</span>
          </a>

          {/* Desktop Navigation */}

          <div className="hidden md:flex gap-8 text-gray-300 text-sm">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </a>
            ))}

          </div>

          <a
            href="#contact"
            className="hidden md:block bg-indigo-600
            px-5 py-2.5 rounded-lg text-sm
            hover:bg-indigo-500 transition"
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col
            px-6 pb-6 gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-indigo-400"
              >
                {item.name}
              </a>
            ))}

          </div>
        )}

      </nav>


      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex items-center
        max-w-7xl mx-auto px-6 pt-28 pb-16"
      >

        <div className="grid md:grid-cols-2
          gap-12 items-center w-full">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-indigo-400 mb-5 font-semibold
              tracking-widest text-sm">
              HELLO, WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-5xl md:text-7xl
              font-bold leading-tight tracking-tight">
              I'm Deepak
              <span className="text-indigo-400"> M.</span>
            </h1>

            <h2 className="text-2xl md:text-3xl
              text-gray-300 mt-5 font-semibold">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 mt-6 leading-8
              max-w-xl">
              I am a third-year Information Technology
              student at Sri Krishna College of Engineering
              and Technology, passionate about building
              modern web applications, solving problems,
              and exploring new technologies.
            </p>

            {/* TECHNOLOGY BADGES */}

            <div className="flex flex-wrap gap-3 mt-7">

              {["React", "Java", "Spring Boot", "JavaScript", "SQL"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full
                    bg-indigo-500/10 text-indigo-300 text-sm
                    border border-indigo-500/20"
                  >
                    {skill}
                  </span>
                )
              )}

            </div>


            {/* ACTION BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href="#projects"
                className="bg-indigo-600 px-6 py-3
                rounded-lg flex items-center gap-2
                hover:bg-indigo-500 transition"
              >
                View My Projects
                <ArrowUpRight size={18} />
              </a>

              
<a
  href="/Deepak-Resume.pdf"
  download="Deepak-Resume.pdf"
  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
>
  <Download size={18} />
  Download Resume
</a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="flex items-center gap-7 mt-10">

              <a
                href="https://github.com/deep181206/Stock-Brokerage-And-Portfolio-Management-System"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
               <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
               <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:deepakmanoharan079@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                <Mail size={24} />
              </a>

            </div>

          </motion.div>


          {/* RIGHT PROFILE IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Background Glow */}

              <div className="absolute inset-0
                bg-indigo-500 blur-[100px] opacity-20">
              </div>

              {/* Profile Image */}

              <div className="relative w-72 h-72
                md:w-96 md:h-96 rounded-full
                border-4 border-indigo-500/50
                overflow-hidden shadow-2xl
                shadow-indigo-500/20">

                <img
                  src="/profile.jpeg"
                  alt="Deepak M. - Full Stack Developer"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Education Badge */}

              <div className="absolute -bottom-5
                -right-3 bg-[#111827]
                border border-white/10
                rounded-xl px-5 py-3 shadow-xl">

                <p className="text-indigo-400
                  font-semibold text-sm">
                  B.Tech IT
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  Third Year Student
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


     
{/* ABOUT SECTION */}

<section id="about" className="py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-indigo-400 tracking-widest text-sm font-semibold">
        GET TO KNOW ME
      </p>

      <h2 className="text-4xl font-bold mt-3">
        About <span className="text-indigo-400">Me</span>
      </h2>

      <p className="text-gray-400 mt-4">
        A little introduction about myself
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h3 className="text-2xl font-semibold mb-5">
          Passionate About Technology & Development
        </h3>

        <p className="text-gray-400 leading-8 mb-5">
          I am a third-year B.Tech Information Technology
          student at Sri Krishna College of Engineering
          and Technology, interested in full-stack
          development and software engineering.
        </p>

        <p className="text-gray-400 leading-8 mb-5">
          I enjoy building practical applications using
          modern frontend and backend technologies.
          I am also actively improving my programming
          and problem-solving skills.
        </p>

        <p className="text-gray-400 leading-8">
          Currently, I am attending an internship to gain
          industry exposure and enhance my technical
          knowledge through practical experience.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-[#111827] border border-white/10
          p-6 rounded-2xl">
          <h3 className="text-indigo-400 text-3xl font-bold">
            3rd
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Year Student
          </p>
        </div>

        <div className="bg-[#111827] border border-white/10
          p-6 rounded-2xl">
          <h3 className="text-indigo-400 text-3xl font-bold">
            2+
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Major Projects
          </p>
        </div>

        <div className="col-span-2 bg-[#111827]
          border border-white/10 p-6 rounded-2xl">

          <h3 className="text-lg font-semibold mb-3">
            Education
          </h3>

          <p className="text-indigo-400 font-medium">
            B.Tech – Information Technology
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Sri Krishna College of Engineering
            and Technology
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


{/* INTERNSHIP EXPERIENCE */}

<section id="experience" className="py-24 px-6">

  <div className="max-w-5xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-14">

      <p className="text-indigo-400 text-sm
        tracking-widest font-semibold">
        PROFESSIONAL EXPERIENCE
      </p>

      <h2 className="text-4xl font-bold mt-3">
        Internship <span className="text-indigo-400">
          Experience
        </span>
      </h2>

      <p className="text-gray-400 mt-4">
        My journey towards professional development
      </p>

    </div>

    {/* Internship Card */}

    <div className="bg-[#111827]
      border border-white/10 rounded-2xl
      p-8 md:p-10
      hover:border-indigo-500/50
      transition duration-300">

      <div className="flex flex-col md:flex-row
        justify-between gap-5">

        <div>

          <span className="inline-block
            bg-indigo-500/10 text-indigo-400
            border border-indigo-500/20
            px-4 py-2 rounded-full text-xs
            font-semibold">
            CURRENTLY PURSUING
          </span>

          <h3 className="text-2xl font-bold mt-5">
            Cloud Computing Intern
          </h3>

          <h4 className="text-indigo-400
            text-lg mt-2 font-medium">
            NXTlogic
          </h4>

          <p className="text-gray-500 text-sm mt-2">
            Gandhipuram, Coimbatore
          </p>

        </div>

        <div className="text-gray-400 text-sm">
          <span className="border border-white/10
            px-4 py-2 rounded-lg inline-block">
            Internship
          </span>
        </div>

      </div>

      <div className="border-t border-white/10
        mt-8 pt-7">

        <h4 className="text-lg font-semibold">
          About My Internship
        </h4>

        <p className="text-gray-400 leading-8 mt-4">
          Currently undertaking a Cloud Computing
          internship at NXTlogic, gaining practical
          exposure to cloud technologies and
          developing knowledge of cloud-based
          infrastructure and services.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          {[
            "Cloud Computing",
            "Cloud Infrastructure",
            "Cloud Services"
          ].map((skill) => (

            <span
              key={skill}
              className="px-4 py-2 rounded-lg
              bg-indigo-500/10
              border border-indigo-500/20
              text-indigo-300 text-sm"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>


      
{/* SKILLS SECTION */}

<section id="skills" className="py-24 px-6 bg-[#0b1120]">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-indigo-400 text-sm tracking-widest font-semibold">
        WHAT I WORK WITH
      </p>

      <h2 className="text-4xl font-bold mt-3">
        Technical <span className="text-indigo-400">Skills</span>
      </h2>

      <p className="text-gray-400 mt-4">
        Technologies and tools I use to build applications
      </p>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: "Programming Languages",
          skills: ["Java", "Python", "C++", "JavaScript"]
        },
        {
          title: "Frontend Development",
          skills: ["HTML", "CSS", "React", "Tailwind CSS"]
        },
        {
          title: "Backend Development",
          skills: ["Java Spring Boot", "Node.js", "Express.js"]
        },
        {
          title: "Databases",
          skills: ["MySQL", "MongoDB", "PostgreSQL", "H2"]
        },
        {
          title: "Tools & Platforms",
          skills: ["Git", "GitHub", "VS Code", "Postman"]
        },
        {
          title: "Core Concepts",
          skills: ["OOP", "DBMS", "Data Structures",
            "Distributed Systems"]
        }
      ].map((category) => (

        <div
          key={category.title}
          className="bg-[#111827] border border-white/10
          rounded-2xl p-7 hover:border-indigo-500/50
          transition duration-300"
        >

          <h3 className="text-xl font-semibold mb-6">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-3">

            {category.skills.map((skill) => (

              <span
                key={skill}
                className="bg-indigo-500/10
                border border-indigo-500/20
                text-indigo-300 px-3 py-2
                rounded-lg text-sm"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>

</section>



      
{/* PROJECTS SECTION */}

<section id="projects" className="py-24 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-16">

      <p className="text-indigo-400 text-sm
        tracking-widest font-semibold">
        MY RECENT WORK
      </p>

      <h2 className="text-4xl font-bold mt-3">
        Featured <span className="text-indigo-400">Projects</span>
      </h2>

      <p className="text-gray-400 mt-4">
        Some of the applications I have developed
      </p>

    </div>


    {/* Project Cards */}

    <div className="grid md:grid-cols-2 gap-8">


      {/* PROJECT 1 */}

      <div className="group bg-[#111827]
        border border-white/10 rounded-2xl
        overflow-hidden hover:border-indigo-500/50
        transition duration-300">

        {/* Project Header */}

        <div className="h-48 bg-gradient-to-br
          from-indigo-600/30 to-purple-900/30
          flex items-center justify-center">

          <div className="text-center">

            <h3 className="text-3xl font-bold
              text-indigo-300">
              STOCK
            </h3>

            <p className="text-gray-400 mt-2">
              Brokerage & Portfolio Management
            </p>

          </div>

        </div>


        <div className="p-7">

          <span className="text-xs text-indigo-400
            font-semibold tracking-widest">
            FULL STACK DEVELOPMENT
          </span>

          <h3 className="text-2xl font-bold mt-3">
            Stock Brokerage & Portfolio
            Management System
          </h3>

          <p className="text-gray-400 mt-4
            leading-7 text-sm">
            Developed a full-stack stock brokerage
            and portfolio management application.
            The system connects a React frontend
            with a Java Spring Boot backend through
            REST APIs to manage application data.
          </p>


          {/* Technologies */}

          <div className="flex flex-wrap gap-2 mt-6">

            {[
              "React",
              "Vite",
              "Java",
              "Spring Boot",
              "H2 Database",
              "REST API"
            ].map((tech) => (

              <span
                key={tech}
                className="text-xs px-3 py-2
                rounded-lg bg-indigo-500/10
                border border-indigo-500/20
                text-indigo-300"
              >
                {tech}
              </span>

            ))}

          </div>


          {/* Project Link */}

          <div className="flex gap-4 mt-7">

            <a
              href="https://github.com/deep181206/Stock-Brokerage-And-Portfolio-Management-System"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2
              text-sm text-white hover:text-indigo-400
              transition"
            >
              <FaGithub size={18} />
              GitHub
              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

      </div>



    
{/* PROJECT 2 - ONCOLOGY HOSPITAL MANAGEMENT */}

<div className="group bg-[#111827]
  border border-white/10 rounded-2xl
  overflow-hidden hover:border-indigo-500/50
  transition duration-300">

  {/* Project Header */}

  <div className="h-48 bg-gradient-to-br
    from-emerald-600/30 to-blue-900/30
    flex items-center justify-center">

    <div className="text-center">

      <h3 className="text-3xl font-bold text-emerald-300">
        ONCOLOGY
      </h3>

      <p className="text-gray-400 mt-2">
        Hospital Management System
      </p>

    </div>

  </div>

  <div className="p-7">

    <span className="text-xs text-indigo-400
      font-semibold tracking-widest">
      FULL STACK DEVELOPMENT
    </span>

    <h3 className="text-2xl font-bold mt-3">
      Oncology Hospital Management System
    </h3>

    <p className="text-gray-400 mt-4
      leading-7 text-sm">
      Developed an Oncology Hospital Management
      System using Java Spring Boot to support
      hospital management workflows. The application
      is designed to organize hospital-related
      information and streamline administrative
      operations.
    </p>

    {/* Technologies */}

    <div className="flex flex-wrap gap-2 mt-6">

      {[
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "REST API",
        "MySQL",
        "Hibernate"
      ].map((tech) => (

        <span
          key={tech}
          className="text-xs px-3 py-2
          rounded-lg bg-indigo-500/10
          border border-indigo-500/20
          text-indigo-300"
        >
          {tech}
        </span>

      ))}

    </div>

    {/* GitHub Link */}

    <div className="flex gap-4 mt-7">

      <a
        href="https://github.com/deep181206/Oncology-Hospital-Management-System-Using-SpringBoot"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2
        text-sm text-white hover:text-indigo-400
        transition"
      >
        <FaGithub size={18} />
        GitHub
        <ArrowUpRight size={15} />
      </a>

    </div>

  </div>

</div>


    </div>

  </div>

</section>



      
{/* CONTACT SECTION */}
<section id="contact" className="py-24 px-6 bg-[#0b1220]">
  <div className="max-w-5xl mx-auto text-center">
    <p className="text-indigo-400 font-medium mb-3">
      GET IN TOUCH
    </p>

    <h2 className="text-4xl font-bold text-white mb-6">
      Let's Work Together
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
      I'm always interested in learning new technologies,
      exploring opportunities, and collaborating on exciting
      projects. Feel free to reach out!
    </p>

    <a
      href="mailto:deepakmanoharan079@gmail.com"
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-lg transition"
    >
      <Mail size={18} />
      Contact Me
      <ArrowUpRight size={18} />
    </a>

    <div className="flex justify-center gap-6 mt-10 text-gray-400">
      <a
        href="https://github.com/deep181206"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-400"
      >
        <FaGithub size={25} />
      </a>

      <a
        href="https://www.linkedin.com/in/deepak-m-38941b331/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-400"
      >
        <FaLinkedin size={25} />
      </a>
    </div>
  </div>
</section>

      {/* FOOTER */}

      <footer className="border-t border-white/10
        text-center py-7 text-gray-500 text-sm">

        © 2026 Deepak M. All Rights Reserved.

      </footer>

    </div>
  );
}

export default App;
