import React, { useState } from 'react'
import { makeId } from '../services/util-service'

export const Add = ({ add }) => {
	const [editMode, setEditMode] = useState(false);
	const [name, setName] = useState('');
	const [role, setRole] = useState('');
	const [loc, setLoc] = useState('tel aviv');
	const [twitter, setTwitter] = useState('');
	const [addr01, setAddr01] = useState('');
	const [addr02, setAddr02] = useState('');
	const [addr03, setAddr03] = useState('');

	const doUpdate = (ev) => {
		ev.preventDefault();

		let id = makeId(5);
		add(
			{
				_id: id,
				name: name,
				imgUrl: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1617873535/travel/01_kbb40f.jpg',
				role: role,
				loc: loc,
				twitter: twitter,
				addr01: addr01,
				addr02: addr02,
				addr03: addr03

			}
		)
		setEditMode(false);
	}

	let updateForm = (
		<form onSubmit={doUpdate} className="cal">
			<input className="input" type="text" name="name" placeholder="Name" value={name} onChange={ev => { setName(ev.target.value); }} />
			<input className="input" type="text" name="role" placeholder="Role" value={role} onChange={ev => { setRole(ev.target.value); }} />
			<input className="input" type="text" name="loc" placeholder="Location" value={loc} onChange={ev => { setLoc(ev.target.value); }} />
			<input className="input" type="text" name="twitter" placeholder="Twitter" value={twitter} onChange={ev => { setTwitter(ev.target.value); }} />
			<input className="input" type="text" name="addr01" placeholder="addr01" value={addr01} onChange={ev => { setAddr01(ev.target.value); }} />
			<input className="input" type="text" name="addr02" placeholder="addr02" value={addr02} onChange={ev => { setAddr02(ev.target.value); }} />
			<input className="input" type="text" name="addr03" placeholder="addr03" value={addr03} onChange={ev => { setAddr03(ev.target.value); }} />
			<button className="btn-update">Update</button>
			<button className="btn-update" onClick={() => { setEditMode(false) }}>Cancel</button>
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