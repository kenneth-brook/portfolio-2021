import React from "react";

function SiteCard(props) {
	return (
		<div className='card'>
			<div className='titleHead'>
				<h1>{props.title}</h1>
			</div>
			<div className='cardBodyWrap'>
				<div className='imageWrap'>
					<img src={props.img} alt={props.title} />
				</div>
				<div className='infoWrap'>
					<div className='stack'>
						<h4>~Tech Used~</h4>
						<h4>{props.stack}</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SiteCard;
