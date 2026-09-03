import { useState } from "react";

function AddTaskForm({ onAdd }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Study");
  const [mainText, setMainText] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("To Do");

  function handleSubmit(event) {
    event.preventDefault();

    onAdd({
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
      className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
    >

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
        className="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
      />

      <button
        type="submit"
        className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-500"
      >
        Add Task
      </button>

    </form>
  );
}

export default AddTaskForm;