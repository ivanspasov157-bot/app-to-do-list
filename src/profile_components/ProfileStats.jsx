import {
  CircleCheck,
  CircleDot,
  CircleAlert,
  TrendingUp
} from "lucide-react";

function ProfileStats({tasks}) {
const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

const activeTasks = tasks.filter(
  (task) => task.status === "In Progress"
).length;

const today = new Date();
today.setHours(0, 0, 0, 0);
const overdueTasks = tasks.filter((task) => {
  const taskDate = new Date(task.date);
  

  return taskDate < today && task.status !== "Completed";
}).length;

const productivityScore =
  tasks.length === 0
    ? 0
    : Math.round((completedTasks / tasks.length) * 100);


  const stats = [
    {
      title: "Completed Tasks",
      value: completedTasks,
      icon: CircleCheck,
      iconColor: "text-green-400",
    },
    {
      title: "Active Tasks",
      value: activeTasks,
      icon: CircleDot,
      iconColor: "text-blue-400",
    },
    {
      title: "Overdue Tasks",
      value: overdueTasks,
      icon: CircleAlert,
      iconColor: "text-red-400",
    },
    {
      title: "Productivity Score",
      value: `${productivityScore}%`,
      icon: TrendingUp,
      iconColor: "text-violet-400",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              rounded-xl
              border border-zinc-800
              bg-zinc-900
              p-5
            "
          >

            <div className="flex items-center gap-2">

              <Icon
                size={16}
                className={stat.iconColor}
              />

              <p className="text-sm text-zinc-400">
                {stat.title}
              </p>

            </div>

            <p className="mt-3 text-3xl font-semibold text-white">
              {stat.value}
            </p>

          </div>
        );
      })}

    </section>
  );
}

export default ProfileStats;