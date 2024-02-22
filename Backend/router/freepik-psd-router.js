const express = require("express");
const router = express.Router();

const { FreepikPSD ,SinglePSDPhotos }= require("../controller/freepik-psd-controller");

router.route("/freepikpsd").get(FreepikPSD);
router.route("/freepikpsdsingle").get(SinglePSDPhotos);

module.exports = router;