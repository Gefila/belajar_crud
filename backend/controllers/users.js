const UserModel = require('../models/users');

async function getUsers(req, res){
    try {
        const [data] = await UserModel.getUsers();
        res.json({
            message : 'get users success',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            data: error
        })
    }
}

async function createUser(req, res){
    if(!req.body.name || !req.body.email || !req.body.address){
        res.status(400).json({
            message: 'All fields are required'
        })
        return;
    }
    try {
        await UserModel.createUser(req.body);
        res.json({
            message: 'create user success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

async function deleteUser(req, res){
    try{
        await UserModel.deleteUser(req.params.id);
        res.json({
            message: 'delete user success',
            data: req.params.id
        })
    }catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

async function updateUser(req, res){
    if(!req.body.name || !req.body.email || !req.body.address){
        res.status(400).json({
            message: 'All fields are required'
        })
        return;
    }
    try{
        await UserModel.updateUser(req.params.id, req.body);
        res.json({
            message: 'update user success',
            data: req.body
        })
    }catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
}