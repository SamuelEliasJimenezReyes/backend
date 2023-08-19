const mongoose = require('mongoose');

//DB URL CONNECTION:

const host = '127.0.0.1';
const dbport = '27017';
const dbase = 'task-manager-api';

const url = `mongodb://${host}:${dbport}/${dbase}`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
})
  .catch(error => {
    console.error('Error connecting to the database:', error);
});

