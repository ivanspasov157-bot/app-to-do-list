// i updated the name from stastschart to taskbreakdown, but i am not sure it changed everywhere i clicked on yes, when it
// was asked to replace it, but i am leaving this comment here so i dont forget in case i run into naming problem later with 
// this specific file 
import {

  Flame,
  StickyNote,
  CalendarClock,
  SquareMenu,

} from "lucide-react";

function TaskBreakdown({ tasks }) {
  const high = tasks.filter((task) => task.priority === "High").length;
  const medium = tasks.filter((task) => task.priority === "Medium").length;
  const low = tasks.filter((task) => task.priority === "Low").length;

  const overdue = tasks.filter((task) => {
    const taskDate = new Date(task.date);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return (
      taskDate < today &&
      task.status !== "Completed"
    );
  }).length;

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-lg border border-zinc-800 p-4">
       <div className="flex items-center gap-2" >
        <p className="text-sm text-zinc-400">High Priority</p>
        <CalendarClock
           size={20}
            className="text-gray-400"
              />
         </div>
        <p className="mt-2 text-2xl font-semibold text-white">
          {high}
        </p>
        
      </div>
      <div className="rounded-lg border border-zinc-800 p-4">
       <div className="flex items-center gap-2">
        <p className="text-sm text-zinc-400">Moderate Priority</p>
         <SquareMenu
           size={20}
            className="text-violet-400"
              />
         
            </div>

        <p className="mt-2 text-2xl font-semibold text-white">
          {medium}
        </p>
      </div>

      <div className="rounded-lg border border-zinc-800 p-4">
       <div className="flex items-center gap-2">
        <p className="text-sm text-zinc-400">Low Priority</p>
        <StickyNote size={20}
         className="text-blue-400"/></div>
        <p className="mt-2 text-2xl font-semibold text-white">
          {low}
        </p>
      </div>

      <div className="rounded-lg border border-zinc-800 p-4">
          <div className="flex items-center gap-2">
        <p className="text-sm text-zinc-400">Overdue</p>
        <Flame  size={16}
         className="text-red-400"/>
</div>
        
        <p className="mt-2 text-2xl font-semibold text-red-400">
          {overdue}
        </p>
      </div>
    </div>
  );
}

export default TaskBreakdown