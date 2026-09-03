
// sort 
export function sort_array(tasks, sortType) {
  return tasks.toSorted((a, b) => {

    if (sortType === "date") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortType === "priority") {
      const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1,
      };

      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    return String(a[sortType]).localeCompare(
      String(b[sortType])
    );
  });
}