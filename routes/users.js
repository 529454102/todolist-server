const router = require('koa-router')()
const UserController = require('../controller/user')


router.post('/register', UserController.register)
router.post('/login', UserController.login)


module.exports = router
