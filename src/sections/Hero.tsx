"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] w-full px-6 py-24 md:py-16 bg-gradient-to-br from-[#0d1b2a] via-[#1a2332] to-[#0a0e17] dark:bg-black/90 overflow-hidden gap-0">
      {/* Animated background gradients and particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#64b5f6]/20 via-[#90caf9]/15 to-[#0d1b2a]/0 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#90caf9]/20 via-[#0d1b2a]/0 to-[#64b5f6]/15 rounded-full blur-2xl animate-pulse" />
      </div>
      {/* Info (left) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 flex-1 flex flex-col items-center md:items-start gap-4 md:gap-5 text-center md:text-left md:mr-0 lg:ml-[12%] md:ml-8 sm:ml-0"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold gradient-text drop-shadow-lg">
          Krishna Sharma
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold gradient-text tracking-wide">
          Full Stack Developer
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-300 dark:text-zinc-300 font-medium mt-2">
          Enthusiastic BCA graduate skilled in React.js, Node.js, Java, MongoDB, and MySQL. I build AI-driven and data analytics web applications.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/krishna-sharma-631276306"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 gradient-text border-2 border-blue-400/50 hover:scale-110 transition-all duration-200 shadow-lg"
            style={{ background: 'linear-gradient(135deg, rgba(100,181,246,0.2) 0%, rgba(144,202,249,0.2) 100%)' }}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" style={{ color: '#64b5f6' }} />
          </a>
          <a
            href="https://github.com/Coder123-krish"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 gradient-text border-2 border-blue-400/50 hover:scale-110 transition-all duration-200 shadow-lg"
            style={{ background: 'linear-gradient(135deg, rgba(100,181,246,0.2) 0%, rgba(144,202,249,0.2) 100%)' }}
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" style={{ color: '#64b5f6' }} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 mt-6 w-full md:w-auto">
          <a
            href="https://portfolio-six-indol-pdzs2lhd0j.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-blue-400/60 text-center whitespace-nowrap"
            style={{ background: 'linear-gradient(90deg, rgba(100,181,246,0.3) 0%, rgba(144,202,249,0.3) 100%)' }}
          >
            <span style={{ color: '#e0e7ff' }}>Download Resume</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-bold text-base hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-blue-400/60 text-center whitespace-nowrap"
            style={{ background: 'linear-gradient(90deg, rgba(100,181,246,0.3) 0%, rgba(144,202,249,0.3) 100%)' }}
          >
            <span style={{ color: '#e0e7ff' }}>Contact Me</span>
          </a>
        </div>
      </motion.div>
      {/* Photo (right) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 flex-1 flex items-center justify-center mt-8 md:-mt-40 md:ml-0"
      >
        <div className="relative w-[312px] h-[504px] md:w-[384px] md:h-[624px] flex items-center justify-center bg-transparent p-0 border-none shadow-none">
          <Image
            src="/krishna.png"
            alt="Krishna Sharma portrait"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
