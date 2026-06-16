"use client";
import SectionMotion from "../components/SectionMotion";
import { FaNodeJs, FaReact, FaGithub, FaCode } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAngular, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "Angular", icon: <SiAngular className="text-[#dd0031]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#fff]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#3c873a]" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-[#3c873a]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#00758f]" /> },
  { name: "Git", icon: <FaGithub className="text-[#fff]" /> },
];

export default function Skills() {
  return (
    <SectionMotion id="skills" className="w-full max-w-5xl mx-auto py-20 px-6 flex flex-col gap-8 items-center relative overflow-hidden">
      {/* Animated background gradients and particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[320px] h-[320px] bg-gradient-to-tr from-[#64b5f6]/20 via-[#90caf9]/15 to-[#0d1b2a]/0 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gradient-to-br from-[#90caf9]/20 via-[#0d1b2a]/0 to-[#64b5f6]/15 rounded-full blur-2xl animate-pulse" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold gradient-text z-10">
        Skills
      </h2>
      <div className="grid w-full z-10 gap-8 justify-center"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-blue-500/40 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 group"
          >
            <span className="text-4xl md:text-5xl drop-shadow-glow group-hover:animate-bounce">
              {skill.icon}
            </span>
            <span className="text-lg md:text-xl font-semibold text-gray-100 dark:text-zinc-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}
