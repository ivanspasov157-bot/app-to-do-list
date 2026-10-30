


//  Create a readable message based on the task's due date
export function check_date(task) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
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

// Calculate a recommendation score for one task

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
   } ; 
return overal_score_ptiority
}

// Recommend the highest-scoring unfinished task
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




