import Urls from 'APIs/Urls';

export const loginUser = jwt => {
	/* console.log(`jwt : `, jwt, ` phNo : `, phNo); */
	return fetch(Urls.login, {
		method:'POST',
		headers: {
			'Accept':'application/json',
			'Content-Type':'application/json',
			'Authorization':jwt
		},
		body:JSON.stringify({
			jwt:jwt,
	        })
	})
	.then(resp => {
		return resp;	
	})
	.catch(err => {
		throw err;
	})
}

