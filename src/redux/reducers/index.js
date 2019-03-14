import updateAdviserList from './adviser-list';

const reducer = (state, action) => {
	return {
		adviserList: updateAdviserList(state, action)
	}
};

export default reducer;