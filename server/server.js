const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');


const { response } = require('express');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'ai_project'
    }
});


const profileInput = require('./controllers/profileInput');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post('/profileinput', (req, res) => { profileInput.handleProfileInput(req, res, db) });

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});