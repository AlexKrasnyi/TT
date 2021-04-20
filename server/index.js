const express = require('express');
const users = require('./users');
// const dbCreate = require('./db')
const dbGetData = require('./db')
const cors = require('cors')
const app = express();
const PORT = 2208;
app.use(cors())

if(users) {
    // console.log(users[155]);
    // dbCreate()
    let data = dbGetData()
    console.log('data', data);
}else {
    console.log('Users not found');
}

app.post('/db', function(req, res) {
    // let data = dbGetData()
    console.log('dbGetData', dbGetData());
    res.send(200, users);
})

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})
