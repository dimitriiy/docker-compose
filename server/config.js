const Pool = require('pg').Pool;

const pool = new Pool({
    host: "postgresql://admin:secret@host:5432/postgres_db",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    port: 5432,
});


module.exports= {
    pool
}