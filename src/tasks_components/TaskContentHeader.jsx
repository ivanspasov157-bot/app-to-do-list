function TaskContentHeader({tasks}) {
  
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b border-zinc-800
        px-6 py-4
      "
    >

      <div>
        <h2 className="text-xl font-semibold text-white">
           Tasks
        </h2>

        
      </div>

    </div>
  );
}

export default TaskContentHeader;