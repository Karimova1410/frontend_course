import React, { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const addTask = () => {
		if (newTask.trim()) {
			setTasks([...tasks, newTask.trim()]);
			setNewTask("");
		}
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Task Manager</h1>
			<input
				type='text'
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				placeholder='Add a new task'
			/>
			<button onClick={addTask}>Add Task</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
