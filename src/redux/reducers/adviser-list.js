const updateAdviserList = (state, action) => {
	if (state === undefined) {
		return {
			advisers: [],
			loading: true,
			error: null
		}
	}

	switch (action.type) {
		case 'FETCH_ADVISERS_REQUEST':
			return {
				advisers: [],
				loading: true,
				error: null
			};

		case 'FETCH_ADVISERS_SUCCESS':
			return {
				advisers: action.payload,
				loading: false,
				error: null
			};

		case 'FETCH_ADVISERS_FAILURE':
			return {
				advisers: [],
				loading: false,
				error: action.payload
			};

		default:
			return state.adviserList;
	}
};

export default updateAdviserList;