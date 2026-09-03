import { check_date } from "../logic/taskmanager";


import {
  Pencil,
  Trash2
} from "lucide-react";

function TaskList({tasks, onDelete, onEdit }) {

  return (
    <section
      className="
        max-h-[600px]
        overflow-y-auto
        p-4 md:p-6
      "
    >

      <div className="flex flex-col gap-3">

       {tasks.map((task) => {
        const dateMessage = check_date(task);

         return (

          
          <article
  key={task.id}
  className="
      grid
  grid-cols-2
  gap-3
  rounded-lg
  border
  border-zinc-800
  bg-zinc-900
  px-4
  py-4
  md:grid-cols-[2fr_1fr_1fr_1fr_auto]
  md:items-center
  md:gap-4
  "
>

          {/* Title */}
<p className="col-span-2 font-medium text-white md:col-span-1">
  {task.title}
</p>

{/* Priority */}
<span
  className="
    inline-flex
    items-center
    justify-center
    w-fit
    rounded-full
    bg-violet-950
    px-2
    py-1
    text-xs
    leading-none
    text-violet-300
  "
>
  {task.priority}
</span>

{/* Date */}
<div>
  <p className="text-sm text-zinc-400">
    {task.date}
  </p>

  <p
    className={
      dateMessage === "Overdue"
        ? "mt-1 text-xs text-red-400"
        : dateMessage === "Due today"
        ? "mt-1 text-xs text-orange-400"
        : "mt-1 text-xs text-zinc-500"
    }
  >
    {dateMessage}
  </p>
</div>

{/* Status */}
<p className="text-sm text-zinc-300">
  {task.status}
</p>

{/* Actions */}
<div className="flex items-center gap-2 md:justify-self-end">
  <button
    onClick={() => onEdit(task)}
    className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
  >
    <Pencil size={16} />
  </button>

  <button
    onClick={() => onDelete(task.id)}
    className="rounded-lg p-2 text-zinc-400 hover:bg-red-950 hover:text-red-400"
  >
    <Trash2 size={16} />
  </button>
</div>

          </article>

        );
        })}

      </div>

    </section>
  );
}

export default TaskList;