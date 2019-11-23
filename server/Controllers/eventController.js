const { db } = require('../firebaseDB')

const get = (req, res) => {
	const responseArray = new Array()
	db.collection('events').get()
		.then( (query) => {
			query.forEach( (doc) => {
				responseArray.push(Object.assign({uid: doc.id}, doc.data()))
			})
		}).then( () => {
			res.json(responseArray)
		})
}
const push = (req, res) => {
		
	const newEvent = {
		'name': req.body.name,
		'description': req.body.description
	}

	db.collection('events').add(newEvent).then((doc) => {
		newEvent.uid = doc.id
		res.send(newEvent)
	}).catch((error) => {
		res.status(500).json({ errors: error })
	})
	
}

module.exports = {
    get,
    push
}