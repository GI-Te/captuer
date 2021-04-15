const express = require("express");
const  {createCaptuer, getAllCaptuer,
     getSingleCaptuer,
     updateCaptuer,
      captuer,} =require("../controller/captuerController");
const Captuer = require("../models/captuerSchema");
const router =express.Router();

router.route("/").post(createCaptuer).get(getAllCaptuer);
router.route("/:_id").get(getSingleCaptuer).put(updateCaptuer).delete(Captuer);

module.exports= router;