import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

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
				<div className='icoBlock'>
					<a
						href='https://www.linkedin.com/in/kenneth-brook/'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedin />
					</a>
					<a
						href='https://github.com/kenneth-brook'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub />
					</a>
					<a
						href='https://www.facebook.com/kennetic.concepts'
						target='_blank'
						rel='noreferrer'
					>
						<FaFacebook />
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
