
import { CalendarDays } from "lucide-react";


function CalendarSection({ tasks }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold text-white">
          Calendar
        </h2>
        <CalendarDays 
        size={20}
        className="text-violet-400" />
        </div >
        <div className="flex gap-2">
          <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white">
            Week
          </button>

          <button className="px-4 py-2 text-sm text-zinc-400">
            Month
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-7">
        {weekDays.map((day) => {
          const dayTasks = tasks.filter((task) => {
            const taskDate = new Date(task.date);

            return (
              taskDate.getFullYear() === day.getFullYear() &&
              taskDate.getMonth() === day.getMonth() &&
              taskDate.getDate() === day.getDate()
            );
          });

          return (
            <div
              key={day.toISOString()}
              className="min-h-[120px] rounded-lg border border-zinc-800 bg-zinc-800/40 p-3 md:min-h-[180px]"
            >
              <p className="text-sm text-zinc-400">
                {day.toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>

              <p className="mb-3 font-medium text-white">
                {day.getDate()}
              </p>

              <div className="flex flex-col gap-2">
                {dayTasks.length === 0 ? (
                  <p className="text-xs text-zinc-600">
                    No tasks
                  </p>
                ) : (
                  dayTasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-md bg-zinc-800 p-2"
                    >
                      <p className="text-xs font-medium text-white">
                        {task.title}
                      </p>

                      <p className="mt-1 text-xs text-zinc-400">
                        {task.priority}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarSection;