const router = require('koa-router')()
const ListController = require('../controller/list')
const verify = require('../middleware/error')

router.get('/list', ListController.getList)
      .post('/list', ListController.addList)
      .delete('/list', ListController.delList)
      .put('/list', ListController.updateList)

module.exports = router