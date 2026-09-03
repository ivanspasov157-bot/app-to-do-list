function TaskCategories({tasks}) {

 const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const toDo = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const completedPercent =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const inProgressPercent =
    total === 0 ? 0 : Math.round((inProgress / total) * 100);

  const toDoPercent =
    total === 0 ? 0 : Math.round((toDo / total) * 100);

  
  return (
    <section
      className="
        rounded-xl
        border border-zinc-800
        bg-zinc-900
        p-6
      "
    >

      <h2 className="text-lg font-semibold text-white">
        Task Categories
      </h2>

      <div className="mt-6 flex items-center gap-8">

        {/* Chart */}
        <div
          className="
            flex h-36 w-36
            shrink-0
            items-center justify-center
            rounded-full "
           style={{
           background: `conic-gradient(
            #22c55e 0% ${completedPercent}%,
            #3b82f6 ${completedPercent}% ${completedPercent + inProgressPercent}%,
            #8b5cf6 ${completedPercent + inProgressPercent}% 100% )`, }}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900">
           <span className="text-sm text-zinc-400">
             {total} Tasks
           </span>
           </div>
        </div>

        {/* Category legend */}
         <div className="flex flex-1 flex-col gap-4">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        <span className="text-zinc-300">Completed</span>
      </div>
      <span className="font-semibold text-white">
        {completedPercent}%
      </span>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-blue-500"></span>
        <span className="text-zinc-300">In Progress</span>
      </div>
      <span className="font-semibold text-white">
        {inProgressPercent}%
      </span>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-violet-500"></span>
        <span className="text-zinc-300">To Do</span>
      </div>
      <span className="font-semibold text-white">
        {toDoPercent}%
      </span>
    </div>

  </div>

      </div>

    </section>
  );
}

export default TaskCategories;