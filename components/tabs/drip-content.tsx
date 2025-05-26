"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";

export default function DripContent() {
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const openModal = () => setIsVideoModalOpen(true);
	const closeModal = () => setIsVideoModalOpen(false);

	useEffect(() => {
		if (isVideoModalOpen && modalRef.current) {
			modalRef.current.focus();
		}
	}, [isVideoModalOpen]);

	const handleImageKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			openModal();
		}
	};

	const handleModalKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Escape") {
			closeModal();
		}
	};

	const handleCloseButtonKeyDown = (
		event: KeyboardEvent<HTMLButtonElement>,
	) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			closeModal();
		}
	};

	return (
		<>
			<div className="flex flex-col md:flex-row justify-center text-neutral-300 items-center">
				{/* Left Element: Image */}
				<motion.div
					className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-4"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
				>
					<Image
						src="/character.png"
						alt="Skirk - Click or press Enter to watch video"
						width={1000}
						height={1000}
						className="object-contain rounded-lg shadow-lg w-3/4 md:w-full max-h-[350px] md:max-h-none cursor-pointer focus:outline-sky-400 focus:outline-offset-2 focus:outline-2 transition-shadow duration-200"
						onClick={openModal}
						onKeyDown={handleImageKeyDown}
						tabIndex={0}
						role="button"
						aria-haspopup="dialog"
					/>
				</motion.div>

				{/* Right Element: Text Content */}
				<motion.div
					className="w-full md:w-1/2 flex flex-col gap-6 h-[calc(100vh-550px)] md:h-auto overflow-y-auto md:overflow-visible pb-0 bg-transparent px-6 hide-scrollbar"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<h1 className="text-4xl font-bold text-sky-400">Void Star</h1>
						<p className="text-xl text-white/70 italic">
							Sinner&apos;s Pupil, Fool&apos;s Master
						</p>
					</motion.div>

					<motion.div
						className="space-y-2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<h2 className="text-2xl font-semibold text-sky-300 border-b border-white/30 pb-2">
							Data
						</h2>
						<div className="flex flex-col gap-y-2 text-lg">
							<div className="flex flex-col">
								<span className="font-medium text-[#68a5f7]">Name</span>
								<div className="flex items-center gap-1">
									<Image
										src="https://api.hakush.in/gi/UI/UI_AvatarIcon_SkirkNew.webp"
										alt="Cryo"
										width={20}
										height={20}
										className="inline-block"
									/>
									<span className="text-white">Skirk</span>
								</div>
							</div>
							<div className="flex flex-col">
								<span className="font-medium text-[#68a5f7]">
									The Seven-Shifting Serpent
								</span>
								<div className="flex items-center gap-1">
									<Image
										src="https://api.hakush.in/gi/UI/Cryo.webp"
										alt="Cryo"
										width={20}
										height={20}
										className="inline-block"
									/>
									<span className="text-white">Cryo</span>
								</div>
							</div>
							<div className="flex flex-col">
								<span className="font-medium text-[#68a5f7]">
									Constellation
								</span>
								<span className="text-white">Crystallina</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<h2 className="text-2xl font-semibold text-sky-300 border-b border-neutral-600 pb-2 mb-3">
							Quote
						</h2>
						<div className="relative p-4 rounded-md">
							<div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-md -z-10" />
							<blockquote className="text-neutral-300 italic leading-relaxed">
								<p className="mb-2">
									&quot;Sin infests the firmament, calamity unfurls across the
									universe. You are free, and none now may proscribe you — yet
									your destiny remains bound to that of this world. Indeed, you
									shall send your disciple here in the near future.&quot;
								</p>
								<footer className="mt-2 text-sm text-neutral-400 text-right">
									— Vedrfolnir &quot;The Visionary&quot; & Surtalogi &quot;The
									Foul&quot;
								</footer>
							</blockquote>
							<p className="mt-4 text-neutral-300 italic leading-relaxed">
								&quot;What? Me, a student? Such misfortune — for them, I mean...
								whenever they show up.&quot;
							</p>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Video Modal */}
			<AnimatePresence>
				{isVideoModalOpen && (
					<motion.div
						ref={modalRef}
						className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50 p-4 outline-none"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={closeModal}
						onKeyDown={handleModalKeyDown}
						tabIndex={-1}
						aria-modal="true"
						// biome-ignore lint/a11y/useSemanticElements: we need to use a dialog for the video player, div gives more control.
						role="dialog"
						aria-labelledby="videoModalTitle"
						aria-describedby="videoModalDescription"
					>
						<motion.div
							className="relative bg-black rounded-lg shadow-xl flex overflow-hidden"
							style={{
								height: "90vh",
								aspectRatio: "9 / 16",
								maxWidth: "90vw",
							}}
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.2, delay: 0.1 }}
							onClick={(e) => e.stopPropagation()}
							role="document"
						>
							<h2 id="videoModalTitle" className="sr-only">
								Video Player
							</h2>
							<p id="videoModalDescription" className="sr-only">
								Displays an embedded YouTube video player for Skirk&apos;s
								character showcase.
							</p>
							<div className="relative w-full h-full">
								<iframe
									src="https://www.youtube.com/embed/c7s-Uz_9b4I?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&controls=0"
									title="Skirk Character Video Player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="absolute top-0 left-0 w-full h-full rounded-md"
								/>
							</div>
							<button
								type="button"
								onClick={closeModal}
								onKeyDown={handleCloseButtonKeyDown}
								className="absolute top-2 right-2 md:top-3 md:right-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-1.5 transition-all duration-200 ease-in-out z-20 shadow-md focus:outline-sky-400 focus:outline-offset-1"
								aria-label="Close video player"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-5 h-5"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
