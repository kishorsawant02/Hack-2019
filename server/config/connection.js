var dbConfig = {
    'LocalPoolConnection': {
        'multipleStatements': true,
        'connectionLimit': 50,
        'queueLimit': 30,
        'aquireTimeout': 10000,
        'timeout': 10000,
        'host': 'localhost',
        'port': 3306,
        'user': 'root',
        'password': 'root',
        'database': 'hk'
    }
};

module.exports = {
    'dbConnection': dbConfig.LocalPoolConnection
};