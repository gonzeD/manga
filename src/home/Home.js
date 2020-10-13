import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.scss";
import { Carousel } from 'react-responsive-carousel';

export default class Home extends React.Component
{

	constructor()
	{
		super();
		this.state = {};
	}
	render()
	{
		return <>

		<Carousel renderThumbs={() => {}} renderArrowPrev={() => {}} renderArrowNext={() => {}} showStatus={false} renderArrow autoPlay infiniteLoop useKeyboardArrows>
				<div>
						<img src="ceremonie.jpg" alt="logo" />
						<p className="legend">Legend 1</p>
				</div>
				<div>
						<img src="team.jpg" alt="logo" />
						<p className="legend">Legend 2</p>
				</div>
				<div>
						<img src="actis.jpg" alt="logo" />

						<p className="legend">Legend 3</p>
				</div>
		</Carousel>
		</>;
	}
}
