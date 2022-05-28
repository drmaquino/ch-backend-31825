// usuario root
const adminDbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'mysqlpassword',
    database: 'coderhouse'
}

// usuario coder 
const userDbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'lectorch',
    password: 'Lectorch123!',
    database: 'coderhouse'
}

// export function getConfig(modo) {
//     if (modo === 'ADMIN') {
//         return {
//             client: 'mysql2',
//             connection: adminDbConfig
//         }
//     } else {
//         return {
//             client: 'mysql2',
//             connection: userDbConfig
//         }
//     }
// }

export function getConfig(modo) {
    return {
        client: 'sqlite3',
        connection: { filename: './DB/db.sqlite' },
        useNullAsDefault: true
    }
}
