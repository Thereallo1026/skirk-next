"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import NumberFlow from "@number-flow/react";

const releaseDate = new Date(Date.UTC(2025, 5, 18, 3, 0, 0));

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

function calculateTimeLeft(): TimeLeft {
	const difference = +releaseDate - +new Date();
	let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}
	return timeLeft;
}

export default function ReleaseTimer() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formattedDate = releaseDate.toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	if (!isClient) {
		return null;
	}

    if (timeLeft.days < 0) {
        return (
            <div className="flex flex-col items-center gap-6">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    The release is over!
                </p>
            </div>
		);
	}

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex items-end justify-center gap-4 sm:gap-6">
				{[
					{ value: timeLeft.days, label: "DAYS" },
					{ value: ":", label: "" },
					{ value: timeLeft.hours, label: "HOURS" },
					{ value: ":", label: "" },
					{ value: timeLeft.minutes, label: "MINUTES" },
					{ value: ":", label: "" },
					{ value: timeLeft.seconds, label: "SECONDS" },
				].map((item, index) => (
					<div
						key={`${item.label}-${index}`}
						className="flex flex-col items-center"
					>
						<span
							className={cn(
								"text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
								GeistMono.className,
								item.label === "" ? "pb-6 sm:pb-7" : "",
							)}
						>
							{typeof item.value === "number" ? (
								<NumberFlow
									value={item.value}
									format={item.label !== "" ? { minimumIntegerDigits: 2 } : {}}
								/>
							) : (
								item.value
							)}
						</span>
						{item.label && (
							<span className="text-xs sm:text-sm text-white/70 tracking-wider">
								{item.label}
							</span>
						)}
					</div>
				))}
			</div>
			<p className="text-sm sm:text-base text-white/70">{formattedDate}</p>
		</div>
	);
}
