import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Project({data}) {
    return <div className="rounded-md group/item flex flex-col justify-between bg-white/40 shadow-xl" data-aos="fade-down" data-aos-delay={(data.id>6?6:data.id)*100}>
                <div>
                    <img src={data.imgURL} className="object-cover rounded-t-md mb-6" alt="ProjectImage" />
                    <div className="pl-8 pr-8 text-left">
                        <p className="font-bold text-2xl cursor-default">{data.name}</p>
                        <p className="font-semibold cursor-default">{data.description}</p>
                    </div>
                </div>
                <div></div>
                <div className='pl-8 pr-8 pb-8'>
                    <div className='mb-10 h-[8rem]'>
                        <div className="cursor-default mt-8 flex flex-wrap gap-1">
                            {data.tags.map((item) => (
                                <a className="bg-white/40 font-medium pl-4 pr-4 rounded p-2 shadow" key={item}>{item}</a>
                            ))}
                        </div>
                    </div>
                    <Link to={"/project/" + data.codeName + "/"}>
                        <button className='bg-white/40 border-white duration-100 font-medium p-2 pl-6 pr-6 float-left rounded shadow hover:bg-white/30 hover:shadow-lg active:bg-white/40 active:shadow'>Learn more</button>
                    </Link>
                </div>
            </div>;
}

Project.propTypes = {
    data: PropTypes.object.isRequired,
}