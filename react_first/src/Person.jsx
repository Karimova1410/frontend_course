import React, { useState } from "react";
import "./App.css";

const Person = () => {
	const person = {
		name: "Karimova Roza",
		position: "Junior Java Developer",
		company: "NVIDIA",
		experience: 2,
		age: 20,
		location: "Bishkek",
		hobby: "Chess",
	};

	const [message, setMessage] = useState("");

	const handleClick = () => {
		setMessage("Button clicked!");
	};

	return (
		<div className='cv-container'>
			<div>
				<h1 className='cv-name'>{person.name}</h1>
				<p className='cv-position'>{person.position}</p>
			</div>
			<ul className='cv-details'>
				<li>
					<span>Company:</span> {person.company}
				</li>
				<li>
					<span>Experience:</span> {person.experience} <span>years</span>
				</li>
				<li>
					<span>Age:</span> {person.age} <span>y.o.</span>
				</li>
				<li>
					<span>Location:</span> {person.location}
				</li>
				<li>
					<span>Hobby:</span> {person.hobby}
				</li>
			</ul>
			{message && <p className='cv-message'>{message}</p>}
			<button onClick={handleClick}>Повысить в должности</button>
		</div>
	);
};

export default Person;
