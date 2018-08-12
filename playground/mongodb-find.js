// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    else {
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp')

        db.collection('Todos').find({ _id:
            new ObjectID('5b6ef74de4cde2487536de9e')
        }).count().then((count) => {
            console.log(`TOdos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch docs');
        });

        // db.collection('Users').insertOne({
        //     name: 'Zheyi',
        //     age: 30,
        //     location: 'Shanghai'
        // }, (err, result) =>  {
        //     if (err) {
        //         return console.log('Unable to insert user', err);
        //     }
        //     console.log(result.ops[0]._id.getTimestamp());
        // })
        // db.collection('Todos').insertOne({
        //     text: 'something to do ',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Unable to insert todo', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });
        client.close();
    }
});