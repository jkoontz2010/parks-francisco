import React from 'react';

class Photo  extends React.Component {
	render() {

		const { spot } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<img src={spot.display_src} alt={spot.caption} className="grid-photo" />
				</div>
				<figcaption>
					<p>{spot.caption}</p>
				</figcaption>
			</figure>
		)
	}
}

export default Photo; 
