import{ClipboardList} from "lucide-react"


function UpcomingTasks({ tasks }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingTasks = tasks
    
    .filter((task) => {
      const taskDate = new Date(task.date);

      return (
        task.status !== "Completed" &&
        taskDate >= today
      );
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2" >
        <h2 className="text-lg font-semibold text-white">
          Upcoming Tasks
        </h2>
        < ClipboardList size={16}
         className="text-green-600"/>

        </div>
        <button className="text-sm text-violet-400 hover:text-violet-300">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {upcomingTasks.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No upcoming tasks.
          </p>
        ) : (
          upcomingTasks.map((task) => (
            <article
              key={task.id}
              className="flex items-center justify-between rounded-lg bg-zinc-800 p-4"
            >
              <div>
                <p className="font-medium text-white">
                  {task.title}
                </p>

                <p className="text-sm text-zinc-400">
                  {task.category}
                </p>
              </div>

              <div className="text-right">
                <span className="rounded-full bg-violet-950 px-2 py-1 text-xs text-violet-300">
                  {task.priority}
                </span>

                <p className="mt-2 text-sm text-zinc-400">
                  {task.date}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default UpcomingTasks;