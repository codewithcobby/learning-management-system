import React from "react";
import { Link } from "react-router-dom";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	return (
		<nav className="flex justify-between items-center py-2 px-3 bg-[#0e2e43] fixed top-0 left-0 w-full h-20 z-50">
			<Link to={"/dashboard"}>
				<p className="px-4 cursor-pointer text-white text-xl">Logo</p>
			</Link>
			<div className="flex justify-between items-center text-white">
				<Link to={"/"}>
					<p className="px-4 cursor-pointer">About</p>
				</Link>
				<Link to={"/"}>
					<p className="px-4 cursor-pointer">Help</p>
				</Link>
				<Link to={"/"}>
					<p className="px-4 cursor-pointer">Logout</p>
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;
