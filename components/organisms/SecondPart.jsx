import Title from "../atom/Ttitle";
import ImageCard from "../molecules/ImageCard";
import Garden from "../../public/asset/image/Garden.png";
import BeCareFul from "../../public/asset/image/BeCareFul.png";
import NextJs from "../../public/asset/image/NextJs.png";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";

const SecondPart = ({ isMobileView }) => {
  const ref = useRef(null);

  useIntersectionObserver(ref, {
    onEnter: () => ref.current.classList.add("animate-fade-up"),
  });

  const projects = [
    {
      title: "Garden",
      tags: [
        { name: "React", color: "orange" },
        { name: "Rest API", color: "red" },
        { name: "Vite", color: "yellow" },
      ],
      image: Garden,
      githubLink: "https://github.com/chaemina/Team18_FE",
      deployLink: "https://ke94a9914479ca.user-app.krampoline.com/videos",
    },
    {
      title: "BeCareFul",
      tags: [
        { name: "React", color: "orange" },
        { name: "AI", color: "red" },
        { name: "CRA", color: "blue" },
      ],
      image: BeCareFul,
      githubLink: "https://github.com/chaemina/BeCareFul_FE",
      deployLink: "/video",
    },
    {
      title: "Protfolio",
      tags: [
        { name: "React", color: "orange" },
        { name: "Next js", color: "red" },
      ],
      image: NextJs,
      githubLink: "https://github.com/portfolio-project",
      deployLink: "https://protfolio-eta-six.vercel.app/",
    },
  ];

  return (
    <>
      <div ref={ref} className={`w-full opacity-0 flex flex-col `}>
        <Title className="bold text-black">Projects</Title>
        <section className="mt-10">
          <aside className="w-full  w-1/3 space-x-2  items-center justify-center mt-6">
            {projects.map((project) => (
              <ImageCard
                key={project.title}
                title={project.title}
                tags={project.tags}
                image={project.image}
                githubLink={project.githubLink}
                deployLink={project.deployLink}
                isMobileView={isMobileView}
              />
            ))}
          </aside>
        </section>
      </div>
    </>
  );
};

export default SecondPart;
