//filter function 
export function filter_thorugh_category(tasks,categoryName,value_we_look_for){

 return   tasks.filter(task=>task[categoryName]==value_we_look_for)}

//search function
export function search_based_on_text(tasks,phrace_to_search){
tasks.filter(task=>((task.title).toLowerCase()).includes(phrace_to_search.toLowerCase()))
}
