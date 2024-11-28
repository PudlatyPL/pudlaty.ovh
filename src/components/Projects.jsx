import { ProjectsData } from "../ProjectsData";
import Project from "./Project";

function Projects() {

    return <div className="w-full bg-[#B59F78] min-h-screen flex flex-col items-center max-md:scroll-mt-[3rem]" id="projects">
        <div className="w-full text-center mt-8 md:mt-16 mb-8">
            <p className="font-semibold mb-8 md:mb-0 md:text-3xl text-2xl font-mono">Projects</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full lg:p-20 p-4">
                {ProjectsData.map((item) => (<Project key={item.id} data={item}/>))}
            </div>
        </div>

    </div>;
}

export default Projects;