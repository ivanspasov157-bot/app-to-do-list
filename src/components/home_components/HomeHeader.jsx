import { useNavigate } from "react-router-dom"; 

function HomeHeader() {
   const navigate = useNavigate();

  const handleQuickAdd = () => {
    navigate("/tasks", {
      state: { openAddTask: true }
    });
  };
  
  return (
    <section className="mb-6 flex items-center justify-between">

      {/* Left side: greeting */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Good morning! 👋
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Here's what's happening with your tasks today.
        </p>
      </div>


      {/* Right side: quick add */}
      <button
      onClick={handleQuickAdd}
        type="button"
        className="
          rounded-lg
          bg-violet-600
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-violet-700
          active:scale-95
          active:bg-violet-800
        "
      >
        + Quick Add
      </button>

    </section>
  );
  
}

export default HomeHeader;