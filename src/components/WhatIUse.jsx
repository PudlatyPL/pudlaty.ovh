import { useState } from "react";
import TechnologiesCard from "./TechnologiesCard";

function WhatIUse() {
    const [seeMore, setSeeMore] = useState(false);
    return <div className="w-full bg-[#D8DBBD] min-h-screen flex flex-col items-center max-md:scroll-mt-[3rem]" id="whatiuse">
        <div className="w-full text-center mt-8 md:mt-16 mb-8">
            <p className="font-semibold mb-8 md:mb-0 md:text-3xl text-2xl font-mono">Technologies I use</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-16 w-full lg:p-20 p-4">
                <TechnologiesCard name="Python" icon={<box-icon type='logo' name='python' ></box-icon>}/>
                <TechnologiesCard name="Flask" icon={<box-icon type='logo' name='flask' ></box-icon>}/>
                <TechnologiesCard name="NodeJS" icon={<box-icon type='logo' name='nodejs' ></box-icon>}/>
                <TechnologiesCard name="React" icon={<box-icon type='logo' name='react' ></box-icon>}/>
                <TechnologiesCard name="TailwindCSS" icon={<box-icon type='logo' name='tailwind-css' ></box-icon>}/>
                <TechnologiesCard name="MongoDB" icon={<box-icon type='logo' name='mongodb' ></box-icon>}/>
                <div className={`md:hidden ${seeMore ? "hidden" : ""}`}>
                    <a onClick={() => setSeeMore(true)} className="underline text-lg font-semibold">See more</a>
                </div>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="Bootstrap" icon={<box-icon type='logo' name='bootstrap' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="Linux" icon={<box-icon type='logo' name='tux' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="SQL" icon={<box-icon type='logo' name='postgresql' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="Visual Studio Code" icon={<box-icon type='logo' name='visual-studio' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="GitHub" icon={<box-icon type='logo' name='github' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="Git" icon={<box-icon type='logo' name='git' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="HTML" icon={<box-icon  type='logo' name='html5' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="CSS" icon={<box-icon type='logo' name='css3' ></box-icon>}/>
                <TechnologiesCard className={`${seeMore ? "" : "max-md:hidden"}`} name="JavaScript" icon={<box-icon type='logo' name='javascript' ></box-icon>}/>
            </div>
        </div>
    </div>;
}

export default WhatIUse;