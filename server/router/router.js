const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/add-user', controller.create);
router.get('/users', controller.find);
router.put('/update-user/:id', controller.update);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;
