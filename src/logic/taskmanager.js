

// addtask
export function add_task(
  tasks,
  id,
  title,
  priority,
  category,
  main_text,
  date,
  status
) {
  const task = {
    id,
    title,
    priority,
    category,
    main_text,
    date,
    status
  };

  return [...tasks, task];
}

/*export function add_task(tasks,id,title,priority,category,main_text,date,status){
     const task = {
        id,
        title,
        priority,
        category,
        main_text,
        date,
        status};
      tasks.push(task)
}*/ 



// remove task
export function remove_task_uses_filter(tasks,id){
   tasks=tasks.filter(task => task.id !== id)
   return tasks
}

// edit 
export function edit_tasks(tasks, id, category, updated_value) {
  return tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        [category]: updated_value
      };
    }

    return task;
  });
}

// checking whats overdue based on date
export function check_date(task) {
  const today = new Date();
  const taskDate = new Date(task.date);

  const differenceInMilliseconds = taskDate - today;

  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays < 0) {
    return "Overdue";
  }

  if (differenceInDays === 0) {
    return "Due today";
  }

  if (differenceInDays <= 3) {
    return `Due soon — ${differenceInDays} day${
      differenceInDays === 1 ? "" : "s"
    } remaining`;
  }

  return `${differenceInDays} days remaining`;
}

// function priority score 

export function overal_priority_of_task(task){
let overal_score_ptiority = 0
const today = new Date()
   const taskDate = new Date(task.date)
   const differenceInSecond= taskDate - today;
   const differenceInDays = differenceInSecond/(1000 * 60 * 60 *24);

    const priorityScores = {
    High: 30,
    Medium: 20,
    Low: 10,
    };

    overal_score_ptiority += priorityScores[task.priority] ?? 0;
   
   if(differenceInDays<0){
      overal_score_ptiority += 50

   } 
   else if (differenceInDays<=3){
   overal_score_ptiority+=30
   } else overal_score_ptiority += 0; 
return overal_score_ptiority
}

// reccomend next task 
 export function recommend_next_task(tasks) {
  const unfinishedTasks = tasks.filter(
    (task) => task.status !== "Completed"
  );

  const sortedTasks = unfinishedTasks.toSorted(
    (a, b) =>
      overal_priority_of_task(b) -
      overal_priority_of_task(a)
  );

  if (sortedTasks.length === 0) {
    return null;
  }

  return sortedTasks[0];
}



// Replace the task with the matching ID, keep every other task unchanged. 
export function replace_task(tasks, updatedTask) {
  return tasks.map(task =>
    task.id === updatedTask.id
      ? updatedTask
      : task
  );
}


