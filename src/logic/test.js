import {filter_thorugh_category} from "./filterlogick.js"
import {add_task} from "./taskmanager.js"
import {remove_task_uses_filter} from "./taskmanager.js" 
import {search_based_on_text} from "./filterlogick.js" 
import {edit_tasks} from "./taskmanager.js"
import {sort_array} from "./prioritylogick.js"
// objects 
/* tasks (for the scoring method i can assighn numerical 
value to the priority and add that value to a total schore to see the progress made
and for smart features) 
*/
/*
const task_template={
    title:" title of a task ",
    priority: "priority of a task",
    category: "category of a task",
    main_text:" what the task is",
    date:"date",
    status:"status of a task"


};
*/


// array 
const tasks = [];
let example_test_array_numbers = [1,2,23,4,5,6,7,8,9];
let example_test_array_numbers_string = ["1","2","23","4","5","6","7","8","9"];
//console.log(tasks)

// functions 
// need to change it later when i start the front end
// addtask
/*
function add_task(id,title,priority,category,main_text,date,status){
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

add_task()
//remove task
/*function remove_task_uses_filter(tasks,id){
   tasks=tasks.filter(task => task.id !== id)
   return tasks
}*/
/*
function search_based_on_number(example_test_array_numbers_string_used,phrace_to_search){

console.log(example_test_array_numbers_string_used.filter(number=>number.includes(phrace_to_search)))
}*/

//search function
/*
function search_based_on_text(tasks,phrace_to_search){
tasks.filter(task=>((task.title).toLowerCase()).includes(phrace_to_search.toLowerCase()))
}*/

//filter function 
/*function filter_thorugh_category(tasks,categoryName,value_we_look_for){

 return   tasks.filter(task=>task[categoryName]==value_we_look_for)
}*/
search_based_on_number(example_test_array_numbers_string,"2")
// sort 
/*function sort_array(tasks,sortType){
return tasks.toSorted(a,b => a[sortType] - b[sortType])
}*/
// edit 
/*
function edit_tasks(tasks,id,category,updated_value){
return tasks.map( task=>{if(task.id == id ){
 task[category]=updated_value
 }
  return task
})}*/


// log in