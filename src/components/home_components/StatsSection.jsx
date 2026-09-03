import {
  ListTodo,
  CircleCheck,
  Clock3,
  CalendarDays
} from "lucide-react";

function StatsSection({ tasks }) {
 
 
 
  const totalTasks = tasks.length;
  
  const completedTasks = tasks.filter(
  (task) => task.status === "Completed").length;

  const pendingTasks = tasks.filter(
  (task) => task.status !== "Completed").length;

  
 const toDoTasks = tasks.filter(
  (task) => task.status === "To Do"
).length;
  
  
  return (
    <section className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

        {/* Total Tasks */}
  <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
    <div className="flex items-center gap-2">
      <ListTodo size={16} className="text-violet-400" />

      <p className="text-sm text-zinc-400">
        Total Tasks
      </p>
    </div>

    <h2 className="mt-2 text-3xl font-bold text-white">
      {totalTasks}
    </h2>
  </article>


  {/* Completed Tasks */}
  <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
    <div className="flex items-center gap-2">
      <CircleCheck size={16} className="text-green-400" />

      <p className="text-sm text-zinc-400">
        Completed Tasks
      </p>
    </div>

    <h2 className="mt-2 text-3xl font-bold text-white">
      {completedTasks}
    </h2>
  </article>


  {/* Pending Tasks */}
  <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
    <div className="flex items-center gap-2">
      <Clock3 size={16} className="text-orange-400" />

      <p className="text-sm text-zinc-400">
        Pending Tasks
      </p>
    </div>

    <h2 className="mt-2 text-3xl font-bold text-white">
      {pendingTasks}
    </h2>
  </article>


  {/* Future Tasks */}
  <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
    <div className="flex items-center gap-2">
      <CalendarDays size={16} className="text-blue-400" />

      <p className="text-sm text-zinc-400">
        Future Tasks
      </p>
    </div>

    <h2 className="mt-2 text-3xl font-bold text-white">
      {toDoTasks}
    </h2>
  </article>

    </section>
  );
}

export default StatsSection;