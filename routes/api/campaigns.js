const router = require('express').Router();
const campaignCtrl = require('../../controllers/campaigns');

router.post('/', campaignCtrl.create);
router.get('/', campaignCtrl.index);
router.delete('/', campaignCtrl.deleteOne);

module.exports = router;