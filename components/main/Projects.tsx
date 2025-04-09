import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
        src="/NextWebsite.png"
        title="Modern Next.js Portfolio"
        description="A sleek and modern portfolio built with Next.js 13, Tailwind CSS, and Framer Motion, showcasing responsive design and smooth animations."
      />
      <ProjectCard
        src="/CardImage.png"
        title="Interactive Website Cards"
        description="An engaging project featuring interactive cards with hover effects and dynamic content presentation."
      />
      <ProjectCard
        src="/SpaceWebsite.png"
        title="Space Themed Website"
        description="A visually stunning space-themed website with captivating design and immersive user experience."
      />
    </div>
    </div>
  );
};

export default Projects;