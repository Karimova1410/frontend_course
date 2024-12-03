import React from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskList() {
	const { tasks, deleteTask } = useTaskContext();

	return (
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>
					{task}
					<button onClick={() => deleteTask(index)}>Delete</button>
				</li>
			))}
		</ul>
	);
}

export default TaskList;
