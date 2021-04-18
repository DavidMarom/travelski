import React, { useEffect, useState } from 'react'
import { getLocation } from '../services/geoService'

export const Card = ({ data, remove, update }) => {
	const [editMode, setEditMode] = useState(false);

	const [_id, setId] = useState(data._id);
	const [name, setName] = useState(data.name);
	const [role, setRole] = useState(data.role);
	const [loc, setLoc] = useState(data.loc);
	const [twitter, setTwitter] = useState(data.twitter);
	const [addr01, setAddr01] = useState(data.addr01);
	const [addr02, setAddr02] = useState(data.addr02);
	const [addr03, setAddr03] = useState(data.addr03);

	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);

	let trash = (<i className="far fa-trash-alt"></i>);
	let pen = (<i className="fas fa-pencil-alt"></i>)

	const doUpdate = (ev) => {
		ev.preventDefault();
		update(
			{
				_id: _id,
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


	useEffect(() => {
		getLocation(data.loc).then(res => {
			setLat(res.lat);
			setLng(res.lng);
		})
	}, []);
	if (editMode) {
		return (
			<div className="card">

				{updateForm}
			</div>
		)
	}
	else {
		return (
			<div className='card ca'>
				< div className='card-body rb' >

					<div className='card-left cb'>
						<div className='prof-image'><img src={data.imgUrl} alt=''></img></div>
						<p>{data.role}</p>

					</div>
					<div className='card-right cbl'>
						<p>{data.name}</p>
						<p>{data.loc}</p>
						<p>{lat} :  {lng}</p>
						<p>Twitter: {data.twitter}</p>
						<p>{data.addr01}</p>
						<p>{data.addr02}</p>
						<p>{data.addr03}</p>

					</div>
				</div >

				< div className='crud-row rb' >
					<div></div>
					<div className='crud-right ra'>

						<button onClick={() => { setEditMode(true); }}>{pen}</button>
						<button onClick={() => { remove(data._id); }}>{trash}</button>

					</div>
				</div >
			</div >

		)
	}
}