import React, { useState } from "react";
import ArtCard from "./ArtCard";
import ArtDetailModal from "./ArtDetailModal";

export default function ArtGallery({ artworks }) {
	const [selectedMediums, setSelectedMediums] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [selectedArt, setSelectedArt] = useState(null);

	if (!Array.isArray(artworks)) {
		return <div style={{ color: "#fff" }}>Loading gallery...</div>;
	}

	const allMediums = Array.from(new Set(artworks.map((a) => a.medium)));
	const allYears = Array.from(new Set(artworks.map((a) => a.year))).sort(
		(a, b) => b - a
	);

	const toggleMedium = (medium) => {
		setSelectedMediums((prev) =>
			prev.includes(medium)
				? prev.filter((m) => m !== medium)
				: [...prev, medium]
		);
	};

	const toggleYear = (year) => {
		setSelectedYears((prev) =>
			prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
		);
	};

	const filteredArtworks = artworks.filter((art) => {
		const mediumMatch =
			selectedMediums.length === 0 || selectedMediums.includes(art.medium);
		const yearMatch =
			selectedYears.length === 0 || selectedYears.includes(art.year);
		return mediumMatch && yearMatch;
	});

	return (
		<div
			style={{
				backgroundColor: "#3a3a3a",
				minHeight: "100vh",
				padding: "1rem",
			}}
		>
			<div style={{ marginBottom: "0.5rem", color: "#ccc" }}>
				Filter results:
			</div>
			<div
				style={{
					borderTop: "1px solid #666",
					borderBottom: "1px solid #666",
					padding: "1rem 0",
					marginBottom: "1rem",
				}}
			>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div>
						{allMediums.map((medium) => (
							<button
								key={medium}
								onClick={() => toggleMedium(medium)}
								style={{
									marginRight: "0.5rem",
									padding: "0.25rem 0.5rem",
									border: "1px solid white",
									borderRadius: "4px",
									backgroundColor: selectedMediums.includes(medium)
										? "white"
										: "#3a3a3a",
									color: selectedMediums.includes(medium) ? "#000" : "#fff",
									cursor: "pointer",
								}}
							>
								{medium}
							</button>
						))}
					</div>
					<div>
						{allYears.map((year) => (
							<button
								key={year}
								onClick={() => toggleYear(year)}
								style={{
									marginLeft: "0.5rem",
									padding: "0.25rem 0.5rem",
									border: "1px solid white",
									borderRadius: "4px",
									backgroundColor: selectedYears.includes(year)
										? "white"
										: "#3a3a3a",
									color: selectedYears.includes(year) ? "#000" : "#fff",
									cursor: "pointer",
								}}
							>
								{year}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className='gallery-flex'>
				{filteredArtworks.map((art) => (
					<ArtCard
						key={art.id}
						artwork={art}
						onClick={() => setSelectedArt(art)}
					/>
				))}
			</div>
			{selectedArt && (
				<ArtDetailModal
					artwork={selectedArt}
					onClose={() => setSelectedArt(null)}
				/>
			)}
		</div>
	);
}
