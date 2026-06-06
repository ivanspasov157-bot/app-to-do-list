// addtask
export function add_task(id,title,priority,category,main_text,date,status){
     const task = {
        id,
        title,
        priority,
        category,
        main_text,
        date,
        status};
      tasks.push(task)
}
// remove task
export function remove_task_uses_filter(tasks,id){
   tasks=tasks.filter(task => task.id !== id)
   return tasks
}

// edit 
export function edit_tasks(tasks,id,category,updated_value){
return tasks.map( task=>{if(task.id == id ){
 task[category]=updated_value
 }
  return task
})}