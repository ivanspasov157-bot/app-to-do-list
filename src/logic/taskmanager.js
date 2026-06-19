

// addtask
export function add_task(tasks,id,title,priority,category,main_text,date,status){
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
const taskDate = new Date(task.date)

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

function check_date(task){
   const today = new Date()
   const taskDate = new Date(task.date)
   const differenceInSecond= taskDate - today;
   const differenceIndays = differenceInSecond/(1000 * 60 * 60 *24);
   if(differenceInDays<0){
      return "this task is overdue";

   } else if (differenceIndDays<=3){

      return `due soon,${differenceIndays} days remain`
   } else return `${differenceIndays} days`;

}

// function priority score 

function oveal_priority_of_task(){
const overal_score_ptiority = 0


   if (task.priority == "high"){
      overal_score_ptiority=+30
   }
   if (task.priority =="medium"){
      overal_score_ptiority=+20
   }
   if (task.priority == "low"){
      overal_score_ptiority=+10
   }
   const today = new Date()
   const taskDate = new Date(task.date)
   const differenceInSecond= taskDate - today;
   const differenceIndays = differenceInSecond/(1000 * 60 * 60 *24);
   if(differenceInDays<0){
      overal_score_ptiority= + 50

   } 
   if (differenceIndays<=3){
   overal_score_ptiority=+30
   } else overal_score_ptiority =+ 0; 
return overal_score_ptiority
}


