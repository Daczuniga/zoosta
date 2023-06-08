const router= require ("express").Router();
const commentRoutes= require ("./comments");
router.use("/comments",commentRoutes)



module.exports=router