import { ProjectsData } from "../ProjectsData";
import Project from "./Project";

function Projects() {
    return <div className="min-h-screen relative" id="projects">
        <div className="absolute bg-purple-500 m-10 blur-[200px] w-[200px] h-[200px]"></div>
        <div className="absolute right-0 bg-blue-500 m-10 blur-[200px] w-[200px] h-[200px]" style={{bottom: "0%"}}></div>
        <div className="text-center pt-12">
            <p className="text-white text-4xl font-extrabold" data-aos="fade-down">Projects</p>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 w-full lg:p-20 p-4">
                {ProjectsData.map((item) => (<Project key={item.id} data={item}/>))}
            </div>
        </div>
    </div>
}

export default Projects;