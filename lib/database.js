const pg = require('pg');
 
function Database(url, config) {
  this.url = url;
  this.config = config;
};
 
Database.prototype.query = function(queryString, callback) {
  pg.connect(this.url, (err, client, done) => {
    if (err) {
      done();
      return callback(err);
    }
 
    client.query.apply(queryString, (err, result) => {
      callback(err, result);
      done();
    });
  });
};
 
module.exports = Database;