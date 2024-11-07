import AOS from "aos";
import { useEffect } from "react";

function NotFound() {
    useEffect(()=>{AOS.init()})

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-purple-500 m-10 blur-[200px] w-[200px] h-[200px] absolute"></div>
            <p className="text-white font-extrabold text-2xl animate-pulse" data-aos="fade-down">Error 404.</p>
        </div>
    )
}

export default NotFound;