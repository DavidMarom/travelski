import React, { useState } from 'react'

export const Add = ({ add }) => {
	const [editMode, setEditMode] = useState(true);
	const [name, setName] = useState('');

	const doUpdate = (ev) => {
		ev.preventDefault();

		console.log('in add comp');
		add(
			{
				_id: 'g',
				name: 'Person g',
				imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/01_kbb40f.jpg',
				role: 'Graphic Designer',
				loc: 'Riviera State',
				twitter: 'ttt',
				addr01: 'aaa',
				addr02: 'bbb',
				addr03: 'ccc'
			}			
		)
}


let updateForm = (
	<form onSubmit={doUpdate} className="cal">

		<input className="input" type="text" name="name" placeholder="Name" value={name} onChange={ev => { setName(ev.target.value); }} />
		<button className="btn-update">Update</button>
		<button className="btn-update" onClick={()=>{setEditMode(false)}}>Cancel</button>
	</form>);


if (editMode) {
	return (
		<div className="card">
			<p>Enter a new person</p>
			{updateForm}
		</div>
	)
}
else {
	return (
		<button className="plus-btn" onClick={() => { setEditMode(true) }}>
			<h1>+</h1>
		</button>
	)
}


}