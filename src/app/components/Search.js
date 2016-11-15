import React from 'react';

class Search  extends React.Component {
	render() {
		return (
			<form className="spot-selector" onSubmit={this.goToStore.bind(this)}>
				<h2>Please Enter A Location</h2>
				<input type="text" ref={(input) => { this.storeInput = input }} required placeholder="Store Name" />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

export default Search; 
