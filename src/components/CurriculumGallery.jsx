import React from "react";

export default function CurriculumGallery() {
	// Placeholder content for now
	const curriculumItems = [
		{
			title: "Culturally Responsive Teaching Workshop",
			year: "2023",
			description:
				"Led a professional development session on CRT for K-12 educators.",
		},
		{
			title: "Inclusive Curriculum Toolkit",
			year: "2022",
			description:
				"Developed a toolkit for integrating DEI principles in lesson planning.",
		},
	];

	return (
		<div
			style={{
				padding: "2rem",
				backgroundColor: "#f0f0f0",
				minHeight: "100vh",
			}}
		>
			<h1>📚 Curriculum & Instruction</h1>
			<ul>
				{curriculumItems.map((item, index) => (
					<li key={index} style={{ marginBottom: "1rem" }}>
						<h3>
							{item.title} <span style={{ color: "#777" }}>({item.year})</span>
						</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
