"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function DripContent() {
	return (
		<div className="flex flex-col md:flex-row justify-center gap-8 p-4 md:p-8 text-neutral-300 items-center">
			{/* Left Element: Image */}
			<motion.div
				className="w-full md:w-1/2 flex justify-center md:justify-end"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7 }}
			>
				<Image
					src="/character.png"
					alt="Skirk"
					width={1000}
					height={1000}
					className="object-contain rounded-lg shadow-lg w-3/4 md:w-full max-h-[350px] md:max-h-none"
				/>
			</motion.div>

			{/* Right Element: Text Content */}
			<motion.div
				className="w-full md:w-1/2 flex flex-col gap-6 h-[calc(100vh-550px)] md:h-auto overflow-y-auto md:overflow-visible pb-0 bg-transparent"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, delay: 0.2 }}
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<h1 className="text-4xl font-bold text-sky-400 mb-2">Void Star</h1>
					<p className="text-xl text-white/70 italic">
						Sinner&apos;s Pupil, Fool&apos;s Master
					</p>
				</motion.div>

				<motion.div
					className="space-y-3"
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
							<span className="font-medium text-[#68a5f7]">Constellation</span>
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
	);
}
