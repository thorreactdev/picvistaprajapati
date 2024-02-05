const express = require("express");
const router = express.Router();
const { userDetails , userLogin ,userInfo} = require("../controller/auth-controller");
const authMiddleWare = require("../middleware/auth-middleware");

router.route("/registration").post(userDetails);
router.route("/user/login").post(userLogin);
router.route("/userdata").get(authMiddleWare , userInfo);

module.exports = router;