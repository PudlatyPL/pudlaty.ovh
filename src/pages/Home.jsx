import { useEffect } from "react";
import "./Home.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {AOS.init({disable: "mobile"}); console.log("123")},[])

    return <div className="bg-[url('/grid.svg')] min-h-screen flex justify-center items-center">
        <div className="xl:w-[60%] max-md:mx-12 gap-8 flex flex-col flex-wrap content-center">
            <p className="text-lg text-violet-700" data-aos="fade-down">
                Pudlaty
            </p>
            <p className="xl:text-7xl text-5xl font-extrabold text-white" data-aos="fade-down" data-aos-delay="200">
                Frontend/Backend developer.
            </p>
            <p className="font-medium text-zinc-400" data-aos="fade-down" data-aos-delay="400">
                The website is currently under renovation
            </p>
        </div>
    </div>
}

export default Home;