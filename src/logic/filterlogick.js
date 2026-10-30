//Filter tasks by a property and value
export function filter_through_category(tasks,categoryName,value_we_look_for){

 return   tasks.filter(task=>task[categoryName]===value_we_look_for)}

//search tasks by title
export function search_based_on_text(tasks,phrace_to_search){
return tasks.filter(task=>((task.title).toLowerCase()).includes(phrace_to_search.toLowerCase()))
}
