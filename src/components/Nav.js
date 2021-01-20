import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./Home";

function Nav() {
	return (
		<div>
			<nav className='navWrap'>
				<ul>
					<li>
						<NavLink className='link' exact to='/' activeClassName='active'>
							Home
						</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<Route exact path='/' component={Home} />
			</div>
		</div>
	);
}

export default Nav;
