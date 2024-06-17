import {db} from "../config/SQLUserDatabase.ts";
import {UserModelType} from "./types/UserModelType.ts";

const insertOrUpdateUser = (user: UserModelType): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT OR REPLACE INTO User (id, email, userId, username, phoneNumber, roles, token) 
         VALUES (1, ?, ?, ?, ?, ?, ?)`,
                [user.email, user.userId, user.username, user.phoneNumber, user.roles, user.token],
                (tx, results) => {
                    console.log('User inserted/updated successfully');
                    resolve();
                },
                (tx, error) => {
                    console.error('Error inserting/updating user:', tx);
                    reject(error);
                }
            );
        });
    });
};

const getUser = (): Promise<UserModelType | null> => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM User WHERE id = 1',
                [],
                (tx, results) => {
                    if (results.rows.length > 0) {
                        console.log('User retrieved successfully');
                        resolve(results.rows.item(0) as UserModelType);
                    } else {
                        console.log('No user found');
                        resolve(null);
                    }
                },
                (tx, error) => {
                    console.error('Error retrieving user:', error);
                    reject(error);
                }
            );
        });
    });
};

const deleteUser = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM User WHERE id = 1',
                [],
                (tx, results) => {
                    console.log('User deleted successfully');
                    resolve();
                },
                (tx, error) => {
                    console.error('Error deleting user:', error);
                    reject(error);
                }
            );
        });
    });
};

export { insertOrUpdateUser, getUser, deleteUser };
