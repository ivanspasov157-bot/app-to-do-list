import { Link } from "react-router-dom";

function Navbar(){
    return(
        <aside className="border-2 w-64 h-screen bg-violet-600 ">
        <nav className="flex flex-col gap-4"> 
        sidebar
        text 
        <Link to = "./"> 
        <button className="align-top">
           dashboard
        </button ></Link>
        <Link to = "./home">
        <button className="inline-block align-bottom ">
           home
        </button></Link>
        
        <Link to = "./profile">
        <button>
            profile
        </button></Link>

        </nav>
        </aside>
    );
}

export default Navbar;