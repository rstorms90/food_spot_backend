var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/tags')
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOneTag)
router.post('/', ctrl.create)
<<<<<<< HEAD
//delete for tags??
=======
>>>>>>> master
router.delete('/', ctrl.deleteOne)

module.exports = router;
