const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/bookCollection');

module.exports = connection;
