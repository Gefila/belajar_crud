const dbPool = require('../config/database');

function getUsers(){
    const query = 'SELECT * FROM users';
    return dbPool.execute(query)
}

function createUser(body){
    const query = `INSERT INTO users (name, email, address) VALUES ("${body.name}", "${body.email}", "${body.address}")`;
    return dbPool.execute(query)
}

function deleteUser(id){
    const query = `DELETE FROM users WHERE id = ${id}`;
    return dbPool.execute(query)
}

function updateUser(id, body){
    const query = `UPDATE users SET name = "${body.name}", email = "${body.email}", address = "${body.address}" WHERE id = ${id}`;
    return dbPool.execute(query)
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
}   