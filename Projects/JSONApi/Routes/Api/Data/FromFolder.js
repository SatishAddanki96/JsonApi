var express = require('express');
var router = express.Router();
let CommonGetDirs = require("./FromFolder/GetDirs");
let CommonFromFile = require("./FromFolder/FromFile");
let CommonFromFirmDetails = require("./FromFolder/FirmDetails");
let CommonTreeWitData = require("./FromFolder/TreeWitData");

router.use('/GetDirs', CommonGetDirs);
router.use('/FromFile', CommonFromFile);
router.use('/FirmDetails', CommonFromFirmDetails);
router.use('/TreeWitData', CommonTreeWitData);

module.exports = router;