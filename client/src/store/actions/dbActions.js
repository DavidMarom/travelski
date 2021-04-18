export function addPerson(newPerson) {
	return dispatch => {
		dispatch({ type: 'ADD_PERSON', newPerson });
	};
}

export function removePerson(_id) {
	return dispatch => {
		dispatch({ type: 'REMOVE_PERSON', _id });
	};
}