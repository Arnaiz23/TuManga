const { Router } = require('express');

const router = Router();

const controllers = require('../controllers/apiControllers');

router.get("/", controllers.test);



module.exports = router;