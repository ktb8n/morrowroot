// App.jsx
import React, { useState } from "react";
import ArtGallery from "./components/ArtGallery";
import ArtDetailModal from "./components/ArtDetailModal";
import { useLocalStorage } from "./hooks/useLocalStorage";

import heronImage from "./assets/art/Ktb8n-Sample-Watercolor-Heron.JPG";
import cavePointImage from "./assets/art/KtB8n_OilPaint_CavePointTamaracks_2024.jpg";
import childsStillLife from "./assets/art/KtB8n_OilPaint_ChildsStillLife_2018.jpg";
import gilScot from "./assets/art/KtB8n_OilPaint_GilScot_2025.jpg";
import gilScotSr from "./assets/art/KtB8n_OilPaint_GilScotSr_2025.jpg";
import kittens from "./assets/art/KtB8n_OilPaint_Kittens_2025.jpg";
import matriachBaeten from "./assets/art/KtB8n_OilPaint_MatriachBaeten_2024.jpg";
import raleigh from "./assets/art/KtB8n_OilPaint_Raleigh_2025.jpg";
import sunny from "./assets/art/KtB8n_OilPaint_Sunny_2025.jpg";
import blueJay from "./assets/art/KtB8n_Watercolor_BlueJay_2024.jpg";
import chickadee from "./assets/art/KtB8n_Watercolor_Chickadee_2024.jpg";
import hips from "./assets/art/KtB8n_Fiber_Hips_2012.jpg";

export default function App() {
	const [artworks, _setArtworks] = useLocalStorage("morrowroot-data", [
		{
			id: 1,
			title: "Watercolor Heron",
			year: "2023",
			medium: "Watercolor",
			tags: ["bird", "watercolor", "nature"],
			image: heronImage,
			description: "A graceful heron in watercolor.",
			forsale: true,
			available: true,
		},
		{
			id: 2,
			title: "Cave Point Tamaracks",
			year: "2024",
			medium: "Oil Paint",
			tags: ["landscape", "tamarack", "trees"],
			image: cavePointImage,
			description: "Golden tamaracks at Cave Point.",
			forsale: true,
			available: true,
		},
		{
			id: 3,
			title: "Child's Still Life",
			year: "2018",
			medium: "Oil Paint",
			tags: ["still life"],
			image: childsStillLife,
			description: "A child’s take on classic still life.",
			forsale: true,
			available: true,
		},
		{
			id: 4,
			title: "Gil Scot",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: gilScot,
			description: "Portrait of Gil Scot.",
			forsale: true,
			available: true,
		},
		{
			id: 5,
			title: "Gil Scot Sr.",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: gilScotSr,
			description: "Portrait of Gil Scot Senior.",
			forsale: true,
			available: true,
		},
		{
			id: 6,
			title: "Kittens",
			year: "2025",
			medium: "Oil Paint",
			tags: ["animals", "kittens"],
			image: kittens,
			description: "Curious kittens in oil.",
			forsale: false,
			available: false,
		},
		{
			id: 7,
			title: "Matriarch Baeten",
			year: "2024",
			medium: "Oil Paint",
			tags: ["portrait", "family"],
			image: matriachBaeten,
			description: "A strong matriarch in oil.",
			forsale: false,
			available: false,
		},
		{
			id: 8,
			title: "Raleigh",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: raleigh,
			description: "An expressive portrait of Raleigh.",
			forsale: false,
			available: false,
		},
		{
			id: 9,
			title: "Sunny",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait", "light"],
			image: sunny,
			description: "A bright portrait of Sunny.",
			forsale: false,
			available: false,
		},
		{
			id: 11,
			title: "Blue Jay",
			year: "2024",
			medium: "Watercolor",
			tags: ["bird", "watercolor"],
			image: blueJay,
			description: "A Blue Jay in vivid watercolor.",
			forsale: true,
			available: true,
		},
		{
			id: 12,
			title: "Chickadee",
			year: "2024",
			medium: "Watercolor",
			tags: ["bird", "small birds"],
			image: chickadee,
			description: "A sweet chickadee study.",
			forsale: true,
			available: true,
		},
		{
			id: 13,
			title: "Hips",
			year: "2012",
			medium: "Fiber Art",
			tags: ["fiber", "abstract"],
			image: hips,
			description: "Fiber abstraction of hips.",
			forsale: false,
			available: false,
		},
	]);

	const [selectedArt, setSelectedArt] = useState(null);

	return (
		<div className='container'>
			<header>
				<h1>🎨 Morrowroot</h1>
			</header>
			<main>
				<ArtGallery artworks={artworks} onSelect={setSelectedArt} />
			</main>
			<footer>
				<small>&copy; {new Date().getFullYear()} Morrowroot Studio</small>
			</footer>
			{selectedArt && (
				<ArtDetailModal
					artwork={selectedArt}
					onClose={() => setSelectedArt(null)}
				/>
			)}
		</div>
	);
}
