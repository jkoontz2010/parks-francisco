import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import { fetchParks } from '../actions/actionCreators';
import ParkMarker from './ParkMarker';


const mapState = state => ({
		isFetching: state.parks.isFetching,
		area: state.parks.area,
		parks: state.parks.parks
});


const mapDispatch = {fetchParks};

class Parks extends React.Component {
	constructor(props) {
		super(props);
		this.renderPark = this.renderPark.bind(this);
		this.renderParkMarkers = this.renderParkMarkers.bind(this);
	}

	componentWillMount() {
		// this runs right before the <App> is rendered
		const { area, lat, lng } = this.props.location.query;
		this.props.fetchParks(area, lat, lng);
	}

	renderPark(park, key) {

		return (

			<div className="park" key={key}>
				<p>
					<strong>{park.name}</strong>
					<br/>
					({park.distance.toFixed(2)}mi)
				</p>
			</div>
		); 
	}

	renderParkMarkers(park, key) {
		const coords = park.location.coordinates;
		const lng = coords[0];
		const lat = coords[1];
		return (
		    <ParkMarker key={key} lat={lat} lng={lng}/>
		)
	}

	render() {
		const { area, lat, lng } = this.props.location.query;
		const zoom = 15;
		return (
			<div className="photo-grid">
				<div className="row">
					<header>
						<h2 className="text-center">
							Parks near { area }
						</h2>
					</header>
					<div className="col-sm-8 map-div">
						<GoogleMap center={[parseFloat(lat), parseFloat(lng)]} zoom={zoom}>
							{this.props.parks && this.props.parks.length > 0 &&
								this.props.parks.map(this.renderParkMarkers)}
						</GoogleMap>
					</div>
					<div className="col-sm-4 park-table">
						{this.props.isFetching && <h3>Loading!</h3>}
						{this.props.parks && this.props.parks.length > 0 && this.props.parks.map(this.renderPark)}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapState, mapDispatch)(Parks); 
