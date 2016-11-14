import React from 'react';
import Photo from './Photo';

class PhotoGrid  extends React.Component {
	render() {
		return (
			<div className="photo-grid">
				Photo Grid
				{this.props.spots.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		)
	}
}

export default PhotoGrid; 
