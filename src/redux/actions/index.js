const advisersRequested = () => {
	return {
		type: 'FETCH_ADVISERS_REQUEST'
	};
};

const advisersLoaded = (newAdvisers) => {
	return {
		type: 'FETCH_ADVISERS_SUCCESS',
		payload: newAdvisers
	};
};

const advisersError = (error) => {
	return {
		type: 'FETCH_ADVISERS_FAILURE',
		payload: error
	};
};

const fetchAllAdvisers = (advisersService) => () => (dispatch) => {
	dispatch(advisersRequested());

	advisersService.getAllAdvisers()
		.then((data) => dispatch(advisersLoaded(data)))
		.catch((err) => dispatch(advisersError(err)));
};

const fetchAdviser = (advisersService, itemId) => () => (dispatch) => {
	dispatch(advisersRequested());

	advisersService.getAdviser(itemId)
		.then((data) => dispatch(advisersLoaded(data)))
		.catch((err) => dispatch(advisersError(err)));
};

export {
	fetchAllAdvisers,
	fetchAdviser
};