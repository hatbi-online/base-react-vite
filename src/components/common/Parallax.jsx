import { useEffect, useRef } from "react";

export default function Parallax({ backgroundImage, children }) {
	const bgRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (bgRef.current) {
				bgRef.current.style.transform = `translateY(${offset * 0.5}px)`;
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative h-screen overflow-hidden">
			<div
				ref={bgRef}
				className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundImage})`, transform: "translateZ(0)" }}
			/>
			<div className="relative z-10 h-[200vh] flex items-center justify-center">
				{children}
			</div>
		</div>
	);
}
