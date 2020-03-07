const router = require('express').Router();
const websiteCtrl = require('../../controllers/websites')

router.post('/', websiteCtrl.create);
router.get('/', websiteCtrl.index);

module.exports = router;