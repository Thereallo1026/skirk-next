"use client";

export default function VideoBackground() {
	return (
		<div className="absolute inset-0 h-full w-full overflow-hidden z-0">
			<div className="absolute inset-0 bg-black/30 z-10" />
			<video
				className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
				autoPlay
				loop
				muted
				playsInline
			>
				<source src="/Cs_Fontaine_Aq40241601_Scbw_Boy.mp4" type="video/mp4" />
			</video>
		</div>
	);
}
