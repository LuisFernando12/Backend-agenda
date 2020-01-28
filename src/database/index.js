const mysql = require('mysql');
 
     var connection = mysql.createPool({
       host: 'localhost',
       user: 'root',
       password: 'bcd127',
       database: 'db_agenda'
     });
exports.pool = connection ;