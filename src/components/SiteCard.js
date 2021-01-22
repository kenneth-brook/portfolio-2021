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
					<div className='info'>
						<p>{props.info}</p>
					</div>
				</div>
			</div>
			<div className='buttonWrap'>
				<div className='buttonSet'>
					<a href={props.weblink} target='_blank'>
						<button type='button'>Go to Site</button>
					</a>
					<a href={props.hublink} target='_blank'>
						<button type='button'>See on Github</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default SiteCard;
