import { useParams } from 'react-router-dom';

import { ProjectsData } from '../ProjectsData';
import NotFound from './NotFound';

function AboutProject() {

    const { codeName } = useParams();
    var data = ProjectsData.find((item) => item.codeName==codeName)
    if (data == undefined) {
        return <NotFound />
    }
    return <div className='min-h-screen flex flex-col items-center max-md:pt-8 mb-8' id='content'>
        <div className='mt-8 md:mt-3 w-5/6 md:w-2/3'>
            <img src={data.fullImgURL} alt="Image of project" className='w-full m-auto rounded border-2 border-blue-200' />
            <p className='md:text-2xl text-xl font-bold mt-4 md:pl-4'><li>{data.name}</li></p>
            {data.fullDescription}
        </div>
    </div>;
}

export default AboutProject;