import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

import { ProjectsData } from '../ProjectsData';
import NotFound from './NotFound';

function Project() {
    useEffect(() => {AOS.init();},[])

    const { id } = useParams();
    var data = ProjectsData.find((item) => item.id==id)
    if (data == undefined) {
        return <NotFound />
    }
    return <div className='flex flex-col items-center pt-12 relative max-md:p-4'>

        <div className="absolute bg-purple-500 m-10 blur-[200px] w-[40vw] h-[40vh]"></div>
        {/* <div className="absolute right-0 bg-blue-500 m-10 blur-[200px] w-[200px] h-[200px]" style={{bottom: "0%"}}></div> */}

        <div className='lg:container max-md:w-full mb-12' data-aos="fade-down">
            <img src={data.fullImgURL} alt="Image of Project" className='object-contain rounded-md lg:w-1/2 mx-auto'/>
        </div>
        <p className='text-white text-3xl font-extrabold'>{data.name}</p>
        <div className='container pb-32'>
            <div className='text-left'>
                {data.fullDescription.map((item) => 
                        <p key={Math.floor(Math.random() * 999999)} className='text-zinc-400 font-medium'>{item}</p>
                    )
                }
            </div>
        </div>
    </div>;
}

export default Project;