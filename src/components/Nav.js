import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Skills from "./Skills";
import Sites from "./Sites";

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
					<li>
						<NavLink
							className='link'
							exact
							to='/Skills'
							activeClassName='active'
						>
							My Skills
						</NavLink>
					</li>
					<li>
						<NavLink
							className='link'
							exact
							to='/Sites'
							activeClassName='active'
						>
							My Sites
						</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/Skills' component={Skills} />
				<Route exact path='/Sites' component={Sites} />
			</div>
		</div>
	);
}

export default Nav;
