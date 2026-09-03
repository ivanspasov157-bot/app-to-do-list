import { ClipboardCopy } from "lucide-react";

function RecommendedTask({ task }) {
  if (!task) {
    return (
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
        <h2 className="text-lg font-semibold text-white">
          Recommended Task 
        </h2>
        <ClipboardCopy />
        <p className="mt-4 text-zinc-400">
          All tasks completed!
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
       <div className="flex items-center gap-2" >
       
       <h2 className="text-lg font-semibold text-white">
        Recommended Task 
        
      </h2><ClipboardCopy size={17} className=" 
         text-green-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-white">
          {task.title}
        </p>

        <p className="mt-1 text-sm text-zinc-400">
          Priority: {task.priority}
        </p>

        <p className="text-sm text-zinc-400">
          Due: {task.date}
        </p>
      </div>
    </section>
  );
}

export default RecommendedTask;