const db = require('./api/database')

async function setupDatabase(req, res, next) {
    
    addDocuments(
        'leave',
        [
            { leavefrom: '27-3-2019', leaveto: '27-4-2019', type: 'Medical', reason:'lallala', status:"compeleted"},
            { leavefrom: '29-3-2019', leaveto: '2-9-2019', type: 'Annual', reason:'lulululu', status:"rejected"}
           
        ]
        
        
     )
    // addDocuments(
    //     'task',
    //     [
    //         { title: 'HELLO', description: 'hi', assign: 'Alma', completed: true},
    //         { title: 'BYE', description: 'bye', assign: 'Alma', completed: true}
           
    //     ]
    // )

    // addDocuments(
    //     'user',
    //     [
    //         { name: 'Alma', phone: '021515', address: 'Pontian', email: "s@gmail.com", department:"Software"},
    //         { name: 'Yusuf', phone: '257', address: 'Pontian', email: "y@gmail.com", department:"IT"},
           
    //     ]
    // )

    res.send('Setting Up Database.... Done ')
}

// async function deleteCollection(collection) {
//     const cref = db.firestore.collection(collection)
//     const docs = await cref.listDocuments()
//     docs.forEach((doc) => doc.delete())
// }

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase