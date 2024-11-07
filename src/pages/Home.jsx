import { useEffect } from "react";

import AOS from 'aos';
import Banner from "../components/Banner";
import Projects from "../components/Projects";

function Home() {
    useEffect(() => {AOS.init();},[])

    return <div>
        <Banner />
        <Projects />
    </div>
}

export default Home;