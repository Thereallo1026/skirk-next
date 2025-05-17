"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import VideoBackground from "@/components/video-background";
import ReleaseTimer from "@/components/tabs/release-timer";
import DripContent from "@/components/tabs/drip-content";

export default function TimerPage() {
	const [activeTab, setActiveTab] = useState<"release" | "drip">("release");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
			<VideoBackground />
			<main className="flex flex-col items-center gap-12 flex-grow justify-center z-10">
				<div className="relative flex place-items-center">
					<div className="w-full max-w-5xl">
						{/* Tabs */}
						<div className="grid w-full grid-cols-[1fr_auto_1fr] items-center rounded-md p-1 max-w-[220px] sm:max-w-[280px] mx-auto">
							<button
								type="button"
								onClick={() => setActiveTab("release")}
								className={cn(
									"rounded-sm py-1.5 text-sm transition-all duration-200 ease-in-out hover:bg-black/30",
									activeTab === "release"
										? "bg-black/30 text-white"
										: "text-white/70",
								)}
							>
								Release
							</button>
							<div className="h-4/5 w-px bg-white/30 self-center mx-2" />
							<button
								type="button"
								onClick={() => setActiveTab("drip")}
								className={cn(
									"rounded-sm py-1.5 text-sm transition-all duration-200 ease-in-out hover:bg-black/30",
									activeTab === "drip"
										? "bg-black/30 text-white"
										: "text-white/70",
								)}
							>
								Drip
							</button>
						</div>
						{activeTab === "release" && (
							<div className="mt-12">
								<ReleaseTimer />
							</div>
						)}
						{activeTab === "drip" && (
							<div className="mt-12">
								<DripContent />
							</div>
						)}
					</div>
				</div>
			</main>
			<footer className="fixed bottom-4 right-4 z-20">
				<p className="text-xs text-white/70">
					Made by{" "}
					<a
						href="https://thereallo.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline text-blue-500"
					>
						Thereallo
					</a>
				</p>
			</footer>
		</div>
	);
}
