

import {
  Search,
  ArrowUpDown,
  Plus
} from "lucide-react";

function TasksHeader({ onAddClick, searchTerm,
  onSearchChange, sortType,
  onSortChange, }) {
  return (
    <header
      className="
        flex
        flex-col
        gap-3
        border-b border-zinc-800
        p-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >

      {/* Search */}
      <div
        className="
          flex
          w-full sm:w-80
          items-center
          gap-2
          rounded-lg
          border border-zinc-700
          bg-zinc-900
          px-3 py-2
        "
      >
        <Search
          size={18}
          className="text-zinc-400"
        />

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          className="
            w-full
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-zinc-500
          "
        />
      </div>


      {/* Actions */}
      <div className="flex w-full gap-3 sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <ArrowUpDown
    size={16}
    className="
      pointer-events-none
      absolute
      left-3
      top-1/2
      -translate-y-1/2
      text-zinc-300
    "
  />

  <select
    value={sortType}
    onChange={(event) => onSortChange(event.target.value)}
    className="
      w-full
      appearance-none
      rounded-lg
      border
      border-zinc-700
      bg-zinc-900
      py-2
      pl-9
      pr-8
      text-sm
      text-zinc-300
      outline-none
      cursor-pointer
      hover:bg-zinc-800
      focus:border-violet-600
    "
  >
    <option value="none">Sort</option>
    <option value="date">Due Date</option>
    <option value="title">Title</option>
    <option value="priority">Priority</option>
  </select>

  <span
    className="
      pointer-events-none
      absolute
      right-3
      top-1/2
      -translate-y-1/2
      text-xs
      text-zinc-500
    "
  >
    ▾
  </span>
</div>


        <button
        onClick={onAddClick}
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-violet-600
            px-4 py-2
            text-sm
            font-medium
            text-white
            hover:bg-violet-500
             active:scale-95
             sm:flex-none
          "
        >
          <Plus size={16} />
          Add Task
        </button>

      </div>

    </header>
  );
}

export default TasksHeader;