import React, { useEffect } from 'react'
import { Card } from './cmps/Card'
import { Add } from './cmps/Add'
import { useSelector, useDispatch } from "react-redux";
import { removePerson, addPerson, updatePerson } from './store/actions/dbActions';

export const App = () => {
	const dispatch = useDispatch();
	let db = useSelector(state => state.dbReducer.dataBase);

	const doRemove = (_id) => { dispatch(removePerson(_id)); }
	const doAddPerson = (person) => { dispatch(addPerson(person)); }
	const doUpdate = (person) => { dispatch(updatePerson(person)); }

	return (
		<div className='outter-container'>
			<div className='inner-container'>
				<div className='card-grid'>

					{db.map((person, idx) => <Card
						key={idx}
						data={person}
						remove={doRemove}
						update={doUpdate}
					/>)
					}

					<Add add={doAddPerson} />

				</div>
			</div>
		</div>
	)
}