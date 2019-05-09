import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#test">
				Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
			</a>
		</nav>
	);
};

export default NavBar;
