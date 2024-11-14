import { ProjectType } from "@/data/type";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsView({ projects }: { projects: ProjectType[] }) {
  console.log(projects);

  return (
    <div className="h-full w-full flex flex-col items-start justify-center gap-8 px-4 py-4">
      <h2 className="text-5xl text-blue font-astera">Mes derniers projets</h2>
      <div className="w-full flex justify-between items-center gap-2 text-blue">
        <p className="font-astera text-4xl">01</p>
        <div className="w-full h-[3px] bg-blue rounded-full"></div>
        <p className="font-astera text-4xl">{projects.length > 10 ? projects.length : `0${projects.length}`}</p>
      </div>
      <div className="w-full h-max overflow-x-scroll">
        <div className="flex gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div className="w-96 h-96 aspect-square bg-white rounded-lg p-4">
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-4xl font-astera text-blue">{index + 1}.</p>
                  <h3 className="text-2xl text-blue uppercase">{project.title}</h3>
                </div>
                <div className="flex items-center justify-center p-1 border border-blue rounded-full text-blue">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
