import Urls from 'APIs/Urls';

export const loginUser = (uid, phNo) => {
	console.log(`uid : `, uid, ` phNo : `, phNo);
	return fetch(Urls.login, {
		method:'POST',
		headers: {
			Accept:'application/json',
			'Content-Type':'application/json'
		},
body: JSON.stringify({
			uid:uid,
			phNo:phNo
		      })
			})
	.then(resp => {
		console.log(`resp : `, resp);
		return resp;	
			})
	.catch(err => {
		throw err;
			})
}

