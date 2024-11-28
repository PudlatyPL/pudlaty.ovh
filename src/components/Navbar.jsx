import "boxicons";
import { Link } from "react-router-dom";

function Navbar() {
    return <div className="bg-white shadow md:shadow-xl max-md:fixed max-md:w-full max-sm:h-[3.6rem] md:w-[8rem] md:fixed md:top-0 md:left-0 md:h-full flex md:flex-col items-center justify-evenly z-50">
        <Link to={"/"} onClick={() => {
            if (window.location.pathname == "/") {
                document.getElementById("banner").scrollIntoView({ behavior: "smooth" })
            } else {
                setTimeout(() => {document.getElementById("banner").scrollIntoView({ behavior: "smooth" })}, 100)
            }
            }} className="cursor-pointer p-2 pb-1 md:p-4 md:pb-3 rounded-lg duration-100 hover:bg-sky-500/40">
            <box-icon name='home-alt-2' class="h-6 w-6 md:h-8 md:w-8"></box-icon>
        </Link>
        <Link to={"/"} onClick={() => {
            if (window.location.pathname == "/") {
                document.getElementById("whatiuse").scrollIntoView({ behavior: "smooth" })
            } else {
                setTimeout(() => {document.getElementById("whatiuse").scrollIntoView({ behavior: "smooth" })}, 100)
            }
        }} className="cursor-pointer p-2 pb-1 md:p-4 md:pb-3 rounded-lg duration-100 hover:bg-sky-500/40">
            <box-icon name='code-alt' class="h-6 w-6 md:h-8 md:w-8"></box-icon>
        </Link>
        <Link to={"/"} onClick={() => {
            if (window.location.pathname == "/") {
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            } else {
                setTimeout(() => {document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}, 100)
            }
        }} className="cursor-pointer p-2 pb-1 md:p-4 md:pb-3 rounded-lg duration-100 hover:bg-sky-500/40">
            <box-icon name='list-ul' class="h-6 w-6 md:h-8 md:w-8"></box-icon>
        </Link>
    </div>;
}

export default Navbar;