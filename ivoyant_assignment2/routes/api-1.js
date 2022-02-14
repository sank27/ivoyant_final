const { Router } = require("express");
const router = new Router();
const fs = require("fs");

router.get("/", (req,res) => {
    try {
        fs.readFile("./data/api1.json", "utf-8", function(err,result) {
            if(err){
                console.error(err);
            }
            else {
                res.send(result);
            }
        })
    } catch (error) {
        console.error(error);
    }
    
})
module.exports = router;