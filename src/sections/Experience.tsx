"use client";
import SectionMotion from "../components/SectionMotion";

export default function Experience() {
  return (
    <SectionMotion className="w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8 items-center" id="experience">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text">
        Experience
      </h2>
      {/* Responsive Experience Slider for small screens */}
      {/* Mobile Experience Slider: Only show one card at a time, correct background */}
      <div className="w-full block md:hidden">
        <div className="flex items-center justify-center w-full max-w-md mx-auto">
          <div className="flex flex-col gap-2 p-7 bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-blue-500/40 shadow-2xl transition-all w-full max-w-md mx-auto">
            <h3 className="text-xl font-bold gradient-text">Full Stack Development Intern <span className="gradient-text">@ MNJ Software</span></h3>
            <span className="text-gray-400 text-base font-medium">Nov 2025 – Apr 2026 (Remote)</span>
            <ul className="list-disc list-outside mt-2 text-gray-200 text-base font-medium space-y-1 pl-5">
              <li>Developed responsive web applications using React.js, Tailwind CSS, Node.js, and Express.js.</li>
              <li>Created RESTful APIs and implemented JWT-based authentication.</li>
              <li>Worked with MongoDB and MySQL for database design and CRUD operations.</li>
              <li>Integrated third-party APIs and optimized application performance.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop Timeline with Bullets */}
      <ol className="relative ml-4 sm:ml-4 hidden md:block">
        <li className="mb-12 ml-6 group relative pl-8">
          <span className="absolute left-0 top-0 h-full w-1 bg-blue-500/40 rounded-full" style={{ zIndex: 0 }}></span>
          <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full ring-4 ring-zinc-900/80 shadow-lg group-hover:scale-110 transition-transform" style={{ zIndex: 1 }}></span>
          <div className="flex flex-col gap-2 p-7 bg-gradient-to-br from-slate-800/80 via-slate-700/80 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-blue-500/40 shadow-2xl group-hover:shadow-blue-500/40 transition-all" style={{ zIndex: 2 }}>
            <h3 className="text-xl md:text-2xl font-bold gradient-text">Full Stack Development Intern <span className="gradient-text">@ MNJ Software</span></h3>
            <span className="text-gray-400 text-base font-medium">Nov 2025 – Apr 2026 (Remote)</span>
            <ul className="list-disc list-inside mt-2 text-gray-200 text-base md:text-lg font-medium space-y-1">
              <li>Developed responsive web applications using React.js, Tailwind CSS, Node.js, and Express.js.</li>
              <li>Created RESTful APIs and implemented JWT-based authentication.</li>
              <li>Worked with MongoDB and MySQL for database design and CRUD operations.</li>
              <li>Integrated third-party APIs and optimized application performance.</li>
            </ul>
          </div>
        </li>
      </ol>
    </SectionMotion>
  );
}
