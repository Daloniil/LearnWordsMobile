import SQLite from 'react-native-sqlite-storage';

const user_db = SQLite.openDatabase(
    {
        name: 'mydb',
        location: 'default',
    },
    () => {
        console.log('Database opened');
    },
    error => {
        console.error('Error opening database:', error);
    }
);

const user_createTables = () => {
    user_db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY NOT NULL,
        email TEXT,
        userId INTEGER,
        username TEXT,
        phoneNumber TEXT,
        roles TEXT,
        token TEXT
      )`,
            [],
            () => {
                console.log('Table created successfully');
            },
            (tx, error) => {
                console.error('Error creating table:', error);
            }
        );
    });
};

export { user_db, user_createTables };
