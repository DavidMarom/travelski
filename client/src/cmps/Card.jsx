import React, { useEffect, useState } from 'react'
import { getLocation } from '../services/geoService'

export const Card = ({ data, remove }) => {
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);

	const [disp, setDisp] = useState(true);

	let trash = (<i className="far fa-trash-alt"></i>);
	let pen = (<i className="fas fa-pencil-alt"></i>)

	useEffect(() => {
		getLocation(data.loc).then(res => {
			setLat(res.lat);
			setLng(res.lng);
		})
	}, []);

	if (disp) {
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
						{pen}
						<button onClick={() => {
							remove(data._id);
							setDisp(false);
						}


						}>
							{trash}
						</button>
					</div>
				</div >
			</div >

		)
	}else return null
}