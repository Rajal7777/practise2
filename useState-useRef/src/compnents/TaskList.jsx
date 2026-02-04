import TaskItem from "./TaskItem";
export default function TaskList({ tasks, onSlectedTask, onDelete }) {


    return (
        <ul >
            {tasks.map((task) => (
                <>
                    <button
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '2px solid gray',
                            boxShadow: '0 5px 5px rgba(0,0,0,0.15)'
                        }}
                        onClick={() => onSlectedTask(task)}
                        key={task.id}>
                        {task.text}
                    </button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>

                </>
            ))}
        </ul>
    );
}
