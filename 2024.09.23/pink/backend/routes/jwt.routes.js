const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
//jwt.io
router.get("/", (req, res) => {
    const token = jwt.sign({name:"Egle", age:28},"secret");
    res.send(token);
});
//middleware
const jwtMiddleware = (req, res, next) => {
    console.log("arriving soon...");
    next();
};
//kontroll : "secret"
router.post("/", jwtMiddleware, (req, res)=>{
    const {token} = req.body;

    jwt.verify(token, "secret", function(err, decoded){
        if(err) return res.send(false);
        console.log(decoded);
        res.send(true);
    })
});
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWdsZSIsImFnZSI6MjgsImlhdCI6MTczMDAzMzA5MX0.WCj5qVPZSvHK_S676s2cKu4He_E3L4x5lwb0pQe5EdY
module.exports = router;