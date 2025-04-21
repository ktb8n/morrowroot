import React, { useState } from "react";
import ArtCard from "./ArtCard";
import DevDetailModal from "./DevDetailModal";
import movingEyesImage from "../assets/dev/SofonisbaAnguissola.png";
import pacManImage from "../assets/dev/pacmanFactory.png";
import mitBusImage from "../assets/dev/realTimeBus.png";
export default function DevGallery() {
	const [activeProject, setActiveProject] = useState(null);

	const devProjects = [
		{
			id: "dev1",
			title: "Moving Eyes",
			image: movingEyesImage,
			description: "SAMPLE INFORMATION",
			githubURL: "",
			tooltip: "scooby doo style css tricks"
		},
		{
			id: "dev2",
			title: "PacMan",
			image: pacManImage,
			description: "",
			githubURL: "",
			tooltip: "pacman factory",
		},
		{
			id: "dev3",
			title: "MIT Bus Routes",
			image: mitBusImage,
			description:
				"This project made use of mapbox-gl api and public data from MIT to track busses between the Harvard and MIT campuses. Using a starter code outline I hard coded coordinate updates. I extended the code to update the busses' positions in real-time.",
			githubURL: "",
			tooltip: "mapbox-gl api and public data from MIT to track busses",
		},
	];

	const handleCardClick = (proj) => {
		setActiveProject(proj.id === activeProject?.id ? null : proj);
	};

	return (
		<div>
			<h2>Engineering Projects</h2>
			<div className='gallery-flex'>
				{devProjects.map((proj) => (
					<ArtCard
						key={proj.id}
						artwork={proj}
						onClick={() => handleCardClick(proj)}
					/>
				))}
			</div>

			{activeProject && (
				<DevDetailModal
					project={activeProject}
					onClose={() => setActiveProject(null)}
				/>
			)}
		</div>
	);
}
