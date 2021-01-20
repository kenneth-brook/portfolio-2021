import React, { useState } from "react";
import SiteCard from "./SiteCard";
import { data } from "../data/data";

function Sites() {
	return (
		<div className='sitesWrap'>
			<h1>My Web Sites</h1>
			{data.map((dat) => {
				return <SiteCard key={dat.id} title={dat.title} img={dat.img} />;
			})}
		</div>
	);
}

export default Sites;
