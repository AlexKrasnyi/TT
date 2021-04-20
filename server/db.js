const sqlite3 = require('sqlite3').verbose();
const users = require('./users');
const db = new sqlite3.Database('./database.db', (err) => {
    if(err) {
        console.log('ERROR', err.message);
    }
    console.log('connected to db');

});

function dbCreate (){
    db.serialize(() => {
        // db.run(`CREATE TABLE users (
        //     id INTEGER,
        //     first_name TEXT,
        //     last_name TEXT,
        //     email TEXT,
        //     gender TEXT,
        //     ip_address TEXT)`);
          
            var stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?,?,?)");
            users.forEach(el => {
                stmt.run(`${el.id}`,`${el.first_name}`,`${el.last_name}`,`${el.email}`,`${el.gender}`,`${el.ip_address}`)
            console.log('elID', el.id);        
            });
            stmt.finalize();

      
        // db.each("SELECT * FROM users", (err, row)  =>{
        //     console.log('row', row);
        // });
      });
    }
       const dbGetData = () => {
        db.serialize(() => {
            db.run('SELECT * FROM users', (err, data) => {
                console.log('dbGetData', data);
                return data
            })
        })
       }
    
      
    //   db.close(() => console.log('db closed'));
 module.exports =  dbGetData;