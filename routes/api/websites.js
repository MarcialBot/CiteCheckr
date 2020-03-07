const router = require('express').Router();
const websiteCtrl = require('../../controllers/websites')

router.get('/', websiteCtrl.create);

module.exports = router;