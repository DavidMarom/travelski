const axios = require('axios')

export async function getLocation(address) {
	const API_KEY = 'AIzaSyCum5NI2ztcUbwjAyhLH98jAJHBK0gbugc';
	return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
		.then(res => {
			const addreess = {
				lat: res.data.results[0].geometry.location.lat,
				lng: res.data.results[0].geometry.location.lng,
			}
			return addreess
		})
		.catch(() => console.log('NOTHING TO RETURN'))
}