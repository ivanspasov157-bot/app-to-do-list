import HomeHeader from "../components/home_components/HomeHeader";
import StatsSection from "../components/home_components/StatsSection";
import TaskBreakdown from "../components/home_components/TaskBreakdown";
import UpcomingTasks from "../components/home_components/UpcomingTasks";
import CalendarSection from "../components/home_components/CalendarSection";
import RecommendedTask from "../components/home_components/RecommendedTask";

import { recommend_next_task } from "../logic/taskmanager";



function HomePage({tasks}){
   // how home page is structured
  const recommendedTask = recommend_next_task(tasks);

   return( <main className="flex-1 p-4 md:p-6">
      <HomeHeader />
      <StatsSection tasks = {tasks}/>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">        
        {/* LEFT COLUMN */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                    <RecommendedTask task={recommendedTask} />
                    <TaskBreakdown tasks={tasks} />
          </div> 
          {/* RIGHT COLUMN */}
                <UpcomingTasks tasks={tasks} />
      </section>
      <div className="mt-6">
      <CalendarSection tasks={tasks} />
      </div>
    </main>);
}

export default HomePage;