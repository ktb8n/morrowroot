import React from "react";
import ArtCard from "./ArtCard";

export default function DevGallery() {
	const devProjects = [
		{
			id: "dev1",
			title: "Portfolio Site",
			image: "path/to/image.jpg",
			description: "My personal dev portfolio site using React and Tailwind.",
		},
		// More dev projects...
	];

	return (
		<div>
			<h2>Engineering Projects</h2>
			<div className='gallery-flex'>
				{devProjects.map((proj) => (
					<ArtCard key={proj.id} artwork={proj} onClick={() => {}} />
				))}
			</div>
		</div>
	);
}
