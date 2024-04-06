import mysql from "mysql";


    export const db = mysql.createConnection({
        host: 'localhost',
        user: 'Sania',
        password: 'Kouser@1234',
        database: 'blog'
    });

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to the database');
    });

    


