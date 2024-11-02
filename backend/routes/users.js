const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/users');

router.get('/', UsersControllers.getUsers);
router.post('/', UsersControllers.createUser);
router.delete('/:id', UsersControllers.deleteUser);
router.put('/:id', UsersControllers.updateUser);

module.exports = router;
