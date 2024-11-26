import { useState } from "react";

function App() {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div>
			<h1>Data filtering</h1>
		</div>
	);
}

export default App;
