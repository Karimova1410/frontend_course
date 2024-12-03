import React, { useState } from "react";

function AddTask({ onAddTask }) {
	const [newTask, setNewTask] = useState("");

	const handleAdd = () => {
		if (newTask.trim()) {
			onAddTask(newTask.trim());
			setNewTask("");
		}
	};

	return (
		<div>
			<input
				type='text'
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				placeholder='Add a new task'
			/>
			<button onClick={handleAdd}>Add Task</button>
		</div>
	);
}

export default AddTask;
