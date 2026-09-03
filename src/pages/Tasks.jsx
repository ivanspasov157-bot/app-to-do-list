
import TaskContentHeader from "../tasks_components/TaskContentHeader";
import TaskList from "../tasks_components/TaskList";
import TasksHeader from "../tasks_components/TasksHeader";
import TaskSidebar from "../tasks_components/TaskSidebar";
import AddTaskForm from "../tasks_components/AddTaskForm";
import EditTaskForm from "../tasks_components/EditTaskForm";
import { supabase } from "../supabase/supabase";

import { useLocation } from "react-router-dom";
import {search_based_on_text, filter_through_category} from "../logic/filterlogick"
import { sort_array } from "../logic/prioritylogick";
import { useState } from "react";


function TasksPage({ tasks, setTasks }){
const location = useLocation();
const [isAddOpen, setIsAddOpen] = useState( location.state?.openAddTask || false);

const [editingTask, setEditingTask] = useState(null);
const [searchTerm, setSearchTerm] = useState(""); 
const [statusFilter, setStatusFilter] = useState("All");
const [sortType, setSortType] = useState("none");


let statusFilteredTasks = tasks;

if (statusFilter === "Overdue") {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  statusFilteredTasks = tasks.filter((task) => {
    const taskDate = new Date(task.date);

    return (
      taskDate < today &&
      task.status !== "Completed"
    );
  });
} else if (statusFilter !== "All") {
  statusFilteredTasks = filter_through_category(
    tasks,
    "status",
    statusFilter
  );
}

let visibleTasks = search_based_on_text(
  statusFilteredTasks,
  searchTerm
);

if (sortType !== "none") {
  visibleTasks = sort_array(
    visibleTasks,
    sortType
  );
}


async function handleSaveEdit(updatedTask) {
  const { data, error } = await supabase
    .from("Tasks")
    .update({
      title: updatedTask.title,
      priority: updatedTask.priority,
      category: updatedTask.category,
      main_text: updatedTask.main_text,
      date: updatedTask.date,
      status: updatedTask.status,
    })
    .eq("id", updatedTask.id)
    .select()
    .single();

  if (error) {
    console.error("Error updating task:", error);
    return;
  }

  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === data.id ? data : task
    )
  );

  setEditingTask(null);
}

async function handleAdd(taskData) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("No logged-in user.");
    return;
  }

  const { data, error } = await supabase
    .from("Tasks")
    .insert([
      {
        title: taskData.title,
        priority: taskData.priority,
        category: taskData.category,
        date: taskData.date,
        status: taskData.status,
        main_text: taskData.main_text,
        user_id: user.id,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error adding task:", error);
    return;
  }

  setTasks((currentTasks) => [
    ...currentTasks,
    data,
  ]);

  setIsAddOpen(false);
}

async function handleDelete(id) {
  const { error } = await supabase
    .from("Tasks")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting task:", error);
    return;
  }

  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== id)
  );
}


// how tasks page is structured
    return(

 <main className="min-h-screen pb-24 md:pb-0">

      <TaskContentHeader tasks={tasks} />

      <section className="flex flex-col border-b border-zinc-800 md:flex-row">

        <TaskSidebar 
         tasks={tasks}
         statusFilter={statusFilter} 
        onFilterChange={setStatusFilter}/>

        <div className="flex-1">
          <TasksHeader 
            onAddClick={() => setIsAddOpen(true)} 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortType={sortType}
            onSortChange={setSortType}
           
            />
          
           {isAddOpen && (
           <AddTaskForm onAdd={handleAdd} />
            )}

            {editingTask && (
              <EditTaskForm
              task={editingTask}
              onSave={handleSaveEdit}
              onCancel={() => setEditingTask(null)}
              />
)}

          <TaskList 
          tasks={visibleTasks}
           onDelete={handleDelete} 
           onEdit={setEditingTask}
           
           />
        </div>

      </section>

    </main>




);}

export default TasksPage;