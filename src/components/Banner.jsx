import { useState } from "react";

function Banner() {
    const [time, setTime] = useState("");

    useState(() => {
        const updateTime = () => {
            const time = new Date((new Date().getTime() + (new Date().getTimezoneOffset()*60000))+(3600000*1));
            setTime("" + time.getHours() + ":" + (time.getMinutes() < 10 ? "0" + time.getMinutes().toString() : time.getMinutes()));
        }

        updateTime();
        const interval = setInterval(updateTime, 10000)
        return () => clearInterval(interval);
    }, [])

    return <div className="bg-[#FAF6E3] banner min-h-screen w-full flex flex-col items-center justify-between" id="banner">
        <div></div>
        <div>
            <div>
                <p className="cursor-default font-semibold md:text-3xl text-2xl font-mono">Welcome! I&apos;m <a className="underline decoration-sky-500">Sebastian</a></p>
                <p className="cursor-default font-semibold md:text-3xl text-md font-mono">I&apos;m  {new Date().getFullYear() - 2008} years old <a className="underline decoration-pink-500">full stack web developer</a>.</p>
                <p className="cursor-default font-semibold md:text-xl text-md font-mono">{time} • Poland</p>
                <div className="flex mt-6">
                    <a className="mr-4 cursor-pointer duration-75 hover:scale-105" href="mailto:kontakt@pudlaty.ovh" target="_blank"><box-icon class="fill-black hover:fill-gray-700" name='envelope' size="md"></box-icon></a>
                    <a className="mr-4 cursor-pointer duration-75 hover:scale-105" href="https://discord.gg/pUgHGS96Zj" target="_blank"><box-icon class="fill-black hover:fill-gray-700" type='logo' name='discord-alt' size="md"></box-icon></a>
                    <a className="mr-4 cursor-pointer duration-75 hover:scale-105" href="https://github.com/PudlatyPL" target="_blank"><box-icon class="fill-black hover:fill-gray-700" type='logo' name='github' size="md"></box-icon></a>
                </div>
            </div>
        </div>
        <a onClick={() => document.getElementById("whatiuse").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer mb-16 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{"transform": ";msFilter:;"}}><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>
        </a>
    </div>
}
export default Banner;