import React from "react";
import SiteCard from "./SiteCard";
import { data } from "../data/data";

function Sites() {
	return (
		<div className='sitesWrap'>
			<h1>My Web Sites</h1>
			<div className='cardHolder'>
				{data.map((dat) => {
					return (
						<SiteCard
							key={dat.id}
							title={dat.title}
							img={dat.img}
							stack={dat.stack}
							info={dat.info}
							weblink={dat.weblink}
							hublink={dat.hublink}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Sites;
