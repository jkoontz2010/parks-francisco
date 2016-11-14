// search spot by location
export function searchSpot(location) {
	return {
		type: 'SEARCH_SPOT',
		location
	}
}

// action for ajax spot request
export function requestSpot(location) {
	return {
		type: 'FETCH_SPOT',
		location
	}
}

// action for ajax spot request success (200)
export function receiveSpot(location, json) {
	return {
		type: 'FETCH_SPOT_SUCCESS',
		location,
		spots: json.data
	}
}

// action for ajax spot request success (200)
export function failedRequestSpot(location, error) {
	return {
		type: 'FETCH_SPOT_FAIL',
		location,
		error
	}
}

// async thunk fetch for spot request
export function fetchSpot(location) {
	return dispatch => {
		dispatch(requestSpot(location));
		return fetch(`https://future.api.com/search?location=${location}`)
			.then(response => response.json())
			.then(json => dispatch(receiveSpot(location, json)))
			.catch(error => dispatch(failedRequestSpot(location, error)));
	}
}
