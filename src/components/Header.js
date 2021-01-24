import React from "react";

function Header() {
	return (
		<header className='headerWrap'>
			<div className='leftBlock'>
				<h1>Portfolio of Kenneth Brook</h1>
			</div>
			<div className='headImgWrap'>
				<img src='./images/headder.jpg' alt='custom header graphic' />
			</div>
			<div className='rightWrap'>
				<div className='rightBlock'>
					<h1>Where to find me, and my work.</h1>
				</div>
				<div className='icoBlock'></div>
			</div>
		</header>
	);
}

export default Header;
