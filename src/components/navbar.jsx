import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  User,
  LogOut
} from "lucide-react";


// this is the navigation bar include in app.jsj, below are the twillwing classes change it purely to links
function Navbar({ onLogout }){
    return(
      <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block min-h-screen w-60 bg-zinc-900 p-5 text-white">

      <div className="mb-8">
        <h1 className="text-xl font-bold">
          Task App
        </h1>
      </div>
<nav className="flex flex-col gap-2">

  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-3 py-2
       transition active:scale-[0.97]
       ${
         isActive
           ? "bg-violet-950 text-violet-300"
           : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
       }`
    }
  >
    <LayoutDashboard size={18} />
    Dashboard
  </NavLink>


  <NavLink
    to="/tasks"
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-3 py-2
       transition active:scale-[0.97]
       ${
         isActive
           ? "bg-violet-950 text-violet-300"
           : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
       }`
    }
  >
    <ListTodo size={18} />
    Tasks
  </NavLink>


  <NavLink
    to="/profile"
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-3 py-2
       transition active:scale-[0.97]
       ${
         isActive
           ? "bg-violet-950 text-violet-300"
           : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
       }`
    }
  >
    <User size={18} />
    Profile
  </NavLink>


  <button
    onClick={onLogout}
    className="
      flex items-center gap-3
      rounded-lg
      px-3 py-2
      text-left
      text-red-400
      transition
      hover:bg-red-950/40
      hover:text-red-300
      active:scale-[0.97]
    "
  >
    <LogOut size={18} />
    Log Out
  </button>

</nav>
    </aside>

      {/* Mobile bottom navigation */}
  {/* Mobile bottom navigation */}
<nav
  className="
    fixed bottom-0 left-0 right-0 z-50
    flex justify-around
    border-t border-zinc-800
    bg-zinc-900
    p-2
    text-white
    md:hidden
  "
>
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-2
       text-xs transition active:scale-[0.95]
       ${
         isActive
           ? "bg-violet-950 text-violet-300"
           : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
       }`
    }
  >
    <LayoutDashboard size={19} />
    Dashboard
  </NavLink>

  <NavLink
    to="/tasks"
    className={({ isActive }) =>
      `flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-2
       text-xs transition active:scale-[0.95]
       ${
         isActive
           ? "bg-violet-950 text-violet-300"
           : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
       }`
    }
  >
    <ListTodo size={19} />
    Tasks
  </NavLink>

  <NavLink
    to="/profile"
    className={({ isActive }) =>
      `flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-2
       text-xs transition active:scale-[0.95]
       ${
         isActive
           ? "bg-violet-950 text-violet-300"
           : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
       }`
    }
  >
    <User size={19} />
    Profile
  </NavLink>

  <button
    onClick={onLogout}
    className="
      flex flex-1 flex-col items-center gap-1
      rounded-lg
      px-2 py-2
      text-xs
      text-red-400
      transition
      hover:bg-red-950/40
      hover:text-red-300
      active:scale-[0.95]
    "
  >
    <LogOut size={19} />
    Log Out
  </button>
</nav>
  </>
    );
}

export default Navbar;