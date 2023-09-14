import React from "react";

const NavBar = () => {
	return (
		<header className="h-[7vh] py-5 px-10 absolute w-full z-10">
			{/* Header content (logo, navigation, search bar) */}
			<div className="flex justify-between items-center">
				<img
					src="/Jagdamba.png"
					className="w-14 h-14"
					alt="Jagdamba_Properties_Logo"
				/>
				<nav className="flex">
					<ul className="flex gap-5 text-gray-400 cursor-pointer">
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
