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

	const positions = [
		"Junior Java Developer",
		"Middle Java Developer",
		"Senior Java Developer",
		"Lead Java Developer",
		"Principal Java Developer",
	];

	const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
	const [age, setAge] = useState(person.age);
	const [experience, setExperience] = useState(person.experience);

	const handlePromote = () => {
		setCurrentPositionIndex(prevIndex =>
			prevIndex < positions.length - 1 ? prevIndex + 1 : prevIndex
		);
		setAge(prevAge => prevAge + 1);
		setExperience(prevExp => prevExp + 1);
	};
	return (
		<div className='cv-container'>
			<div>
				<h1 className='cv-name'>{person.name}</h1>
				<p className='cv-position'>{positions[currentPositionIndex]}</p>
			</div>
			<ul className='cv-details'>
				<li>
					<span>Company:</span> {person.company}
				</li>
				<li>
					<span>Experience:</span> {experience} <span>years</span>
				</li>
				<li>
					<span>Age:</span> {age} <span>y.o.</span>
				</li>
				<li>
					<span>Location:</span> {person.location}
				</li>
				<li>
					<span>Hobby:</span> {person.hobby}
				</li>
			</ul>
			<button onClick={handlePromote}>Promote</button>
		</div>
	);
};

export default Person;
