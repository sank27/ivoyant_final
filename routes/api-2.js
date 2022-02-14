const { Router } = require("express");
const xml2js = require('xml2js');

const router = new Router();

const fs = require("fs");


//route for api2
router.get("/", (req,res) => {
    try {
        fs.readFile("./data/api2.xml", "utf-8", function(err,result) {
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
});

//route for combineApi
router.get("/combinedApis", (req,res) => {
    try {
        fs.readFile("./data/api2.xml", "utf-8", async function(err,result) {
            if(err){
                console.error(err);
            }
            else {
                xml2js.parseString(result, (err, data) => {
                    
                    if(err) {
                        throw err;
                    }
                
                    res.send(data);
                });
            }
        })
    } catch (error) {
        console.error(error);
    }
})
module.exports = router;


