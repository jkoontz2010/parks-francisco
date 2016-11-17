// search parks by location
export function searchParks(area, lat, lng) {
	return {
		type: 'SEARCH_PARKS',
		payload: {
			area,
			lat,
			lng
		}	
	}
}

// async thunk fetch for parks request
export function fetchParks(area, lat, lng) {
	return { 
		type: 'FETCH_PARKS',
		area,
		payload: fetch(`https://pure-peak-99410.herokuapp.com/parks?location=${area}&lat=${lat}&long=${lng}`)
			.then(response => response.json())
	}
}
