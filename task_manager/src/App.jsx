import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = task => setTasks([...tasks, task]);

	return (
		<div style={{ padding: "20px" }}>
			<h1>Task Manager</h1>
			<AddTask onAddTask={addTask} />
			<TaskList tasks={tasks} />
		</div>
	);
}

export default App;
