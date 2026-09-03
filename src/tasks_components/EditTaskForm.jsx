import { useState } from "react";

function EditTaskForm({ task, onSave, onCancel }) {

  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [category, setCategory] = useState(task.category);
  const [mainText, setMainText] = useState(task.main_text);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...task,
      title,
      priority,
      category,
      main_text: mainText,
      date,
      status
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-xl
        border border-zinc-800
        bg-zinc-900
        p-6
      "
    >

      <input
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        className="
          mb-3
          w-full
          rounded-lg
          border border-zinc-700
          bg-zinc-800
          px-3 py-2
          text-white
        "
      />

      <select
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value)
        }
        className="
          mb-3
          w-full
          rounded-lg
          border border-zinc-700
          bg-zinc-800
          px-3 py-2
          text-white
        "
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(event) =>
          setDate(event.target.value)
        }
        className="
          mb-3
          w-full
          rounded-lg
          border border-zinc-700
          bg-zinc-800
          px-3 py-2
          text-white
        "
      />

      <select
        value={status}
        onChange={(event) =>
          setStatus(event.target.value)
        }
        className="
          mb-3
          w-full
          rounded-lg
          border border-zinc-700
          bg-zinc-800
          px-3 py-2
          text-white
        "
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <div className="flex gap-3">

        <button
          type="submit"
          className="
            rounded-lg
            bg-violet-600
            px-4 py-2
            text-white
          "
        >
          Save
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="
            rounded-lg
            border border-zinc-700
            px-4 py-2
            text-zinc-300
          "
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default EditTaskForm;