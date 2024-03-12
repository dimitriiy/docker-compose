require('dotenv').config()
const app = require('express')();
const cors = require('cors')
const fs = require("fs");

app.use(cors())
const host = 'localhost';
const port = 3001;

const db = require('./config');
const sql = fs.readFileSync('init.sql').toString();


async function run() {
    try {
        await db.pool.connect();
        await db.pool.query(sql);


        async function getData(req, res) {
            try {
                const result = await db.pool.query('SELECT * from public.students')
                console.log({result})
                res.status(200).send(JSON.stringify(result.rows))
            } catch (e) {
                res.status(404).type('text/plain');
                res.send(e.message);
            }
        }

        app.get('/', getData);


        app.use((req, res, next) => {
            res.status(404).type('text/plain');
            res.send('Not found');
        });


        app.listen(port, host, function () {
            console.log(`Server listens http://${host}:${port}`);
        });

    } catch (e) {
        console.log('er', e)
        app.get('/', getData);

    }


}

run()