import { useState, useEffect } from "react";
import "./App.css";
function App() {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const names = [
				{ id: 1, name: "Roza" },
				{ id: 2, name: "Aisuluu" },
				{ id: 3, name: "Altynai" },
				{ id: 4, name: "Zhanetta" },
				{ id: 5, name: "Aleksandra" },
				{ id: 6, name: "Dilnaz" },
				{ id: 7, name: "Bermet" },
				{ id: 8, name: "Aikan" },
				{ id: 9, name: "Aijan eje" },
				{ id: 10, name: "Zharkynai" },
				{ id: 11, name: "Anzhelika" },
			];
      setData(names);

		};

		fetchData();
	}, []);

  const filteredData = data.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='container'>
			<h1>Data filtering</h1>
			<div className='input-container'>
				<input
					type='text'
					placeholder='Search name...'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
			</div>
			<ul>
				{filteredData.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
