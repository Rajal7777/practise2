import { useRef, useState } from "react";

export default function TaskItem({ task, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState();

    
    const titleRef = useRef();
    const descRef = useRef();
    

    
    function startEditing() {
        setEditText(task); // Initialize editText with the current task details
        setIsEditing(true);
    }

      function handleChange(e) {
        const { name, type, value, checked } = e.target;
        
        setEditText(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }
    function handleUpdate() {
        if (editText.text?.trim() === "") return;
        onUpdate(editText);
        setIsEditing(false);
       console.log(editText)
    }

    return (
        <>
            {isEditing && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "500px",
                        alignItems: "center",
                        margin: "20px auto",
                        border: "1px solid gray",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <input
                        style={{
                            marginTop: "10px",
                            padding: "10px",
                            minWidth: "300px",
                        }}
                        type="text"
                        name="text"
                        placeholder="Enter a task"
                        value={editText.text || ""}
                        onChange={handleChange}
                        ref={titleRef}
                    />
                    <textarea
                        style={{
                            padding: "10px",
                            minWidth: "300px",
                        }}
                        type="text"
                        name="description"
                        placeholder="Enter a task description"
                        value={editText.description || ""}
                        onChange={handleChange}
                        ref={descRef}
                    />
                    <label>
                        <input
                            type="checkbox"
                            name="completed"
                            checked={editText.completed || false}
                            onChange={handleChange}
                            value={editText.completed || false}
                        />
                        Completed
                    </label>
                    <button
                        onClick={handleUpdate}
                        style={{
                            padding: "10px",
                            marginLeft: "10px",
                            backgroundColor: "rgb(211, 217, 227)",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Update
                    </button>
                </div>
            )}

            {!isEditing && (<>
                <h2>{task.text}</h2>
                <p>{task.completed ? "Completed" : "Not Completed"}:{task.description}</p>
                <button onClick={() => onDelete(task.id)}>Delete</button>
                <button onClick={startEditing}>Update</button>
            </>)}

        </>
    );
}
