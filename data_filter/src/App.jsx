import { useState } from "react";

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


	return (
		<div>
			<h1>Data filtering</h1>
		</div>
	);
}

export default App;
