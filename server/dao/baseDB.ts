import * as mysql from 'mysql';

export class BaseDB {
    public static getDBConnection() {
        return mysql.createConnection({
            host: 'elvira0702.mysql.rds.aliyuncs.com',
            user: 'root',
            password: 'Kylin@0702',
            port: '3306',
            database: 'piotek'
        });
    }

    public static dealData(sql, param, callback) {
        const connection = BaseDB.getDBConnection();
        connection.connect();
        connection.query(sql, param, (err, result) => {
            callback(err, result);
        });
        connection.end();
    }
}