function spot(state = {isFetching: false, spots: []}, action) {
	switch(action.type) {
		case 'FETCH_SPOT':
			return {
				...state,
				isFetching: true
			}
		case 'FETCH_SPOT_SUCCESS':
			return {
				...state,
				isFetching: false,
				location: action.location,
				spots: action.spots
			}
		case 'FETCH_SPOT_FAIL':
			return {
				...state,
				isFetching: false,
				location: action.location,
				error: action.error
			}
		default:
			return state;
	}
}

function spots(state={}, action) {
	switch(action.type) {
		case 'SEARCH_SPOT':
			return action.location;

		case 'FETCH_SPOT':
		case 'FETCH_SPOT_SUCCESS':
		case 'FETCH_SPOT_FAIL':
			return {
				...state,
				[action.location]: spot(state, action)
			}

		default:
			return state;
	}

	return state;
}

export default spots;
