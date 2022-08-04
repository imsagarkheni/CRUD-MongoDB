const router =require("express").Router();

const {
    doctorInsert,
    docdetailID,
    docViewByname,
    docdetailCity,
    docdetailAll,
    docUpdate,
    detailsDelete,

} = require("../controller/controller");

router.post("/doctorInsert", doctorInsert);
router.get("/docdetailID/:id",docdetailID)
router.get("/docViewByname/:name",docViewByname)
router.get("/docdetailCity/:city",docdetailCity)
router.get("/docdetailAll",docdetailAll)
router.put("/docUpdate/:id",docUpdate)
router.delete("/detailsDelete/:id", detailsDelete)


module.exports = router;