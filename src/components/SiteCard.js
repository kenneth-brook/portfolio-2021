import React from "react";

function SiteCard(props) {
	return (
		<div className='card'>
			<div className='titleHead'>
				<h1>{props.title}</h1>
			</div>
			<div className='imageWrap'>
				<img src={props.img} alt={props.title} />
			</div>
		</div>
	);
}

export default SiteCard;
