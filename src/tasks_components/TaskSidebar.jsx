function TaskSidebar( {tasks, statusFilter, onFilterChange}) {
  const allTasks = tasks.length;

  const toDoTasks = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const overdueTasks = tasks.filter((task) => {
    const taskDate = new Date(task.date);

    
    return (
      taskDate < today &&
      task.status !== "Completed"
    );
  }).length;
  
  
  return (
    <aside
      className="
         w-full
        border-b border-zinc-800
        p-4
        md:w-56
        md:border-b-0
        md:border-r
      "
    >

      <nav className="grid grid-cols-2 gap-2 md:flex md:flex-col">

        <button
         onClick={() => onFilterChange("All")}
         className={`
         flex items-center justify-between
         rounded-lg
         px-4 py-3
         text-left text-sm
        transition
         ${
         statusFilter === "All"
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
        }`
      }
        >
          <span>All Tasks</span>
          <span>{allTasks}</span>
        </button>


        <button
          onClick={() => onFilterChange("To Do")}
          className={`
          flex items-center justify-between
          rounded-lg
          px-4 py-3
          text-left text-sm
          transition
          ${
          statusFilter === "To Do"
           ? "bg-zinc-800 text-white"
           : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
           }
           `}
          
        >
          <span>To Do</span>
          <span>{toDoTasks}</span>
        </button>


        <button
          onClick={() => onFilterChange("In Progress")}
          className={`
          flex items-center justify-between
          rounded-lg
          px-4 py-3
          text-left text-sm
          transition
          ${
          statusFilter === "In Progress"
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
          }
  `}
        >
          <span>In Progress</span>
          <span>{inProgressTasks}</span>
        </button>


        <button
          onClick={() => onFilterChange("Completed")}
         className={`
         flex items-center justify-between
         rounded-lg
         px-4 py-3
         text-left text-sm
         transition
         ${
         statusFilter === "Completed"
         ? "bg-zinc-800 text-white"
         : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
        }
  `}
        >
          <span>Completed</span>
          <span>{completedTasks}</span>
        </button>


        <button
          onClick={() => onFilterChange("Overdue")}
          className={`
          flex
          items-center
          justify-between
          rounded-lg
          px-4 py-3
          text-left
          text-sm
          transition
          ${ statusFilter === "Overdue"
             ? "bg-zinc-800 text-white"
             : "text-zinc-400 hover:bg-zinc-900 hover:text-white" }
  `}
        >
          <span>Overdue</span>
          <span className="text-red-400">
            {overdueTasks}
          </span>
        </button>

      </nav>

    </aside>
  );
}

export default TaskSidebar;