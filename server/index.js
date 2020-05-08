const express = require('express');
const path = require('path');

const computerController = require('./controllers/computer_inventory_controller');
const usersController = require('./controllers/users_controller');
const helpdeskController = require('./controllers/helpdesk_tickets');
const adminController = require('./controllers/admin_controller');

//const sqlconnect = require('./sqlconnect');

const app = express();
const port = 3000;

//CORS Control
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function (req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if (arr.length > 1 && arr[1] != null) {
        req.userId = +arr[1];
    }
    next();
});

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/../client/dist'))
    .get('/', (req, res) => res.send('This is the CMOS Backend!'))
    .use('/computers', computerController)
    .use('/users', usersController)
    .use('/helpdesk', helpdeskController)
    .use('/admin', adminController)

    /*.use((req, res) => {
        const homePath = path.join(__dirname, '/../client/dist/index.html');
        console.log(homePath);
        res.sendFile(homePath)
    })
    .use((err, req, res, next) => {
        console.error(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message });
    })*/

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));