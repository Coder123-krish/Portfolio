import SectionMotion from "../components/SectionMotion";

export default function About() {
  return (
    <SectionMotion id="about" className="w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8 items-center">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text">
        About Me
      </h2>
      <div className="text-lg md:text-xl text-gray-300 dark:text-zinc-300 font-medium text-center max-w-2xl">
        <p>
          Enthusiastic BCA graduate from Dr. Bheem Rao Ambedkar University, Agra (2023–2026) with a strong foundation in full-stack web development. I build modern web applications focused on AI integrations and data-driven interfaces.
        </p>
        <p className="mt-4">
          Recently completed a Full Stack Development internship at MNJ Software (Remote), where I worked on responsive React applications, RESTful APIs, and databases like MongoDB and MySQL.
        </p>
      </div>
    </SectionMotion>
  );
}
