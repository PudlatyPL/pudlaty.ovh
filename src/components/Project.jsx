import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Project(props) {
    var data = props.data;
    return <div className="w-full">
        <Link to={"/project/"+data.id}>
            <div className="rounded-xl h-full group/item flex flex-col content-between" data-aos="fade-down" data-aos-delay={(data.id>6?6:data.id)*100} style={{backgroundColor: "#121213"}}>
                <img src={data.imgURL} className="object-cover rounded-t-xl mb-6" alt="ProjectImage" />
                <div className="pl-8 pr-8 pb-8">
                    <p className="text-white font-bold text-2xl group-hover/item:text-violet-700 duration-200">{data.name}</p>
                    <p className="text-zinc-400 font-normal">{data.description}</p>
                    <div className="mt-8 flex flex-wrap gap-1">
                        {data.tags.map((item) => (
                            <a className="text-zinc-400 bg-zinc-900 font-medium pl-4 pr-4 rounded-xl p-2" key={item}>{item}</a>
                        ))}
                    </div>
                    <div></div>
                </div>
                {/* <div className="pl-8 mb-6">
                    <p className="text-zinc-400 font-medium group-hover/item:text-violet-700 duration-200">
                        See more
                    </p>
                </div> */}
            </div>
        </Link>
    </div>
}

export default Project;


Project.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        codeName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imgURL: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
    }).isRequired
};