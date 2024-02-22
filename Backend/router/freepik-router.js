const express = require("express");
const router = express.Router();
// const fetch = require('node-fetch');

const {FreepikPhotos} = require("../controller/freepik-controller");

router.route("/freepikphotos").get(FreepikPhotos);

module.exports = router;