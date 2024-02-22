const express = require("express");
const router = express.Router();

const { FreepikAiPhotos,SinglePhotoAi,SingleFreepikAiPhotos } = require("../controller/freepik-ai-controller");

router.route("/freepikai").get(FreepikAiPhotos);
router.route("/singleaiphoto").get(SinglePhotoAi)
router.route("/aicategory").get(SingleFreepikAiPhotos);


module.exports = router;