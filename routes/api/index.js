const router = require('express').Router();
// update
const driverRoutes = require('./driverRoutes');
// update
router.use('/drivers', driverRoutes);

module.exports = router;
