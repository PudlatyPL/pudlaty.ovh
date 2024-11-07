function Banner() {
    return <div className="bg-[url('/grid.svg')] bg-no-repeat bg-cover min-h-screen flex justify-left items-center select-none">
    <div className="xl:w-[60%] max-md:mx-12 gap-8 flex flex-col flex-wrap ml-24">
        <p className="font-extrabold text-violet-700/[.06] absolute top-0 left-0 h-min-screen hidden xl:block" style={{fontSize: "25vw"}} data-aos="fade-down" data-aos-duration="500">
            Pudlaty
        </p>
        <p className="xl:text-7xl text-4xl text-wrap font-extrabold text-white" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">
            Frontend/Backend developer.
        </p>
        <p className="font-medium text-zinc-400" data-aos="fade-down" data-aos-delay="400" data-aos-duration="500">
            
        </p>
        <div className="flex gap-8 flex-wrap">
            <a className="button md:w-fit w-full" href="#projects" data-aos="fade-down" data-aos-delay="500">
                <div className="icon baseline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor"}}><path d="M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 2h2v2h-2V7zm0 4h2v2h-2v-2zM9 7h2v2H9V7zm0 4h2v2H9v-2zM5 7h2v2H5V7zm0 4h2v2H5v-2zm12 6H7v-2h10v2zm2-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg></div>
                {" "}Projects
            </a>
            <a className="button md:w-fit w-full" href={'https://github.com/PudlatyPL'} target="_blank" data-aos="fade-down" data-aos-delay="600">
                <div className="icon baseline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor"}}><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg></div>
                {" "}GitHub</a>
            <a className="button md:w-fit w-full" href={'https://discord.gg/pUgHGS96Zj'} target="_blank" data-aos="fade-down" data-aos-delay="700">
                <div className="icon baseline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor"}}><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg></div>
                {" "}Discord</a>
        </div>
    </div>
</div>
}
export default Banner;