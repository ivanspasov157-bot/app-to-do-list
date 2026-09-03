import {
  Check,
  Plus,
  Pencil
} from "lucide-react";

function RecentActivity({tasks}) {

const recentTasks = tasks
  .toSorted((a, b) => b.id - a.id)
  .slice(0, 4);


  function getActivityInfo(task) {
  if (task.status === "Completed") {
    return {
      icon: Check,
      iconBackground: "bg-green-600",
      text: `Completed "${task.title}"`,
    };
  }

  if (task.status === "In Progress") {
    return {
      icon: Pencil,
      iconBackground: "bg-orange-600",
      text: `Working on "${task.title}"`,
    };
  }

  return {
    icon: Plus,
    iconBackground: "bg-blue-600",
    text: `Created "${task.title}"`,
  };
}

  return (
    <section
      className="
        rounded-xl
        border border-zinc-800
        bg-zinc-900
        p-6
      "
    >

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold text-white">
          Recent Activity
        </h2>

        <button
          className="
            text-sm text-zinc-400
            hover:text-white
          "
        >
          View All
        </button>

      </div>

      {/* Activity list */}
<div className="mt-6 flex flex-col gap-5">
  {recentTasks.map((task) => {
    const activity = getActivityInfo(task);
    const Icon = activity.icon;

    return (
      <div
        key={task.id}
        className="flex items-start gap-3"
      >
        <div
          className={`
            flex h-8 w-8
            shrink-0
            items-center justify-center
            rounded-lg
            ${activity.iconBackground}
          `}
        >
          <Icon
            size={16}
            className="text-white"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-200">
            {activity.text}
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {task.date}
          </p>
        </div>
      </div>
    );
  })}
</div>

    </section>
  );
}

export default RecentActivity;