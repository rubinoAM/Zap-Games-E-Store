const config = require('./config');
const pgp = require('pg-promise')();
const connection = config.pgp;
const db = pgp(connection);

module.exports = {
    query: (queryText,params)=>{return db.query(queryText,params)},
}