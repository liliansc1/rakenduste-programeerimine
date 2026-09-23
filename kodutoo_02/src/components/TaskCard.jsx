export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div>
      <span>
        {task.title} - {task.completed ? 'Completed' : 'Not completed'}
      </span>

      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}