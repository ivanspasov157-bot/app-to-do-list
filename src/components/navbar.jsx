
function Navbar(){
    return(
        <aside className="border-2 w-64 h-screen bg-violet-600 ">
        <nav className="flex flex-col gap-4"> 
        sidebar
        text 
        <button className="align-top">
            button1
        </button >
        <button className="inline-block align-bottom ">
            button2
        </button>
        <button>
            button3
        </button>

        </nav>
        </aside>
    );
}

export default Navbar;