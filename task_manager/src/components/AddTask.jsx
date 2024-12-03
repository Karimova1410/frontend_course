import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function AddTask() {
	const [newTask, setNewTask] = useState("");
	const { addTask } = useTaskContext();

	const handleAdd = () => {
		if (newTask.trim()) {
			addTask(newTask.trim());
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
