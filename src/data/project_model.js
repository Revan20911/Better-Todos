import { Pool } from 'pg';

const pool = new Pool({

    user: 'user',
    host: 'localhost',
    database: 'database',
    password: 'root',
    port: '5432',

});

export default pool;
