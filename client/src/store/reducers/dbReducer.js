const initialState = {
	dataBase: [
		{
			_id: 'a',
			name: 'Person A',
			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/01_kbb40f.jpg',
			role: 'Graphic Designer',
			loc: 'Riviera State',
			twitter: 'ttt',
			addr01: 'aaa',
			addr02: 'bbb',
			addr03: 'ccc'
		},
		{
			_id: 'b',
			name: 'Person B',
			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/05_gwlpod.jpg',
			role: 'CEO',
			loc: 'Riviera State',
			twitter: 'ttt',
			addr01: 'aaa',
			addr02: 'bbb',
			addr03: 'ccc'
		},
		{
			_id: 'c',
			name: 'Person C',
			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/06_usnybu.jpg',
			loc: 'Riviera State',
			role: 'Graphic Designer',
			twitter: 'ttt',
			addr01: 'aaa',
			addr02: 'bbb',
			addr03: 'ccc'
		},
		{
			_id: 'd',
			name: 'Person D',
			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/04_gwjjdu.jpg',
			loc: 'Riviera State',
			role: 'Graphic Designer',
			twitter: 'ttt',
			addr01: 'aaa',
			addr02: 'bbb',
			addr03: 'ccc'
		}
	]
};

export function dbReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'ADD_PERSON':
			return { dataBase: [...state.dataBase, action.newPerson] };

		case 'REMOVE_PERSON':
			console.log(action._id);
			return { dataBase: state.dataBase.filter(per => action._id !== per._id) };

		default:
			return state
	}
}