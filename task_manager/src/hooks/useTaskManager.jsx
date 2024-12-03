import { useState } from "react";

export function useTaskManager() {
	const [tasks, setTasks] = useState([]);

	const addTask = task => setTasks([...tasks, task]);
	const deleteTask = index => setTasks(tasks.filter((_, i) => i !== index));
	const getTasks = () => tasks;

	return { tasks, addTask, deleteTask, getTasks };
}
