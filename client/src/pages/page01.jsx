// import React, { useEffect } from 'react'
// import { Card } from './cmps/Card'
// import { Add } from './cmps/Add'

// export const App = () => {
// 	let size = 0;

// 	let dataBase = [
// 		{
// 			_id: 'a',
// 			name: 'Person A',
// 			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/01_kbb40f.jpg',
// 			role: 'Graphic Designer',
// 			loc: 'Riviera State',
// 			twitter: 'ttt',
// 			addr01: 'aaa',
// 			addr02: 'bbb',
// 			addr03: 'ccc'
// 		},
// 		{
// 			_id: 'b',
// 			name: 'Person B',
// 			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/05_gwlpod.jpg',
// 			role: 'CEO',
// 			loc: 'Riviera State',
// 			twitter: 'ttt',
// 			addr01: 'aaa',
// 			addr02: 'bbb',
// 			addr03: 'ccc'
// 		},
// 		{
// 			_id: 'c',
// 			name: 'Person C',
// 			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/06_usnybu.jpg',
// 			loc: 'Riviera State',
// 			role: 'Graphic Designer',
// 			twitter: 'ttt',
// 			addr01: 'aaa',
// 			addr02: 'bbb',
// 			addr03: 'ccc'
// 		},
// 		{
// 			_id: 'd',
// 			name: 'Person D',
// 			imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/04_gwjjdu.jpg',
// 			loc: 'Riviera State',
// 			role: 'Graphic Designer',
// 			twitter: 'ttt',
// 			addr01: 'aaa',
// 			addr02: 'bbb',
// 			addr03: 'ccc'
// 		}
// 	]

// 	const removePerson = (_id) => {
// 		dataBase = dataBase.filter(person => person._id !== _id);
// 		size = dataBase.length;
// 		history.push("/");

// 	}

// 	const addPerson = (person) => {
// 		console.log('app got new person', person);
// 		dataBase.push(person);
// 		size = dataBase.length;
// 		console.log('DB:', dataBase);

// 	}

// 	useEffect(() => {
		


// 	}, [size])

// 	return (
// 		<div className='outter-container'>
// 			<div className='inner-container'>


// 			<Switch>
// 				<Route exact component={Login} path={'/'} />
// 			</Switch>


// 				{/* <div className='card-grid'>

// 					{dataBase.map((person, idx) => <Card
// 						key={idx}
// 						data={person}
// 						remove={removePerson}

// 					/>)
// 					}

// 					<Add
// 						add={addPerson}
// 					/>

// 				</div> */}
// 			</div>
// 		</div>
// 	)
// }