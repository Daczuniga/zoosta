const router= require("express").Router();
const {getComments, createComment}= require("../../controllers/comments-controller")


router.route("/").get(getComments).post(createComment);

module.exports= router;
