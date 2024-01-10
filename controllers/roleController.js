const jwt = require("jsonwebtoken");

const getRoles = (req, res, next) => {

  const token = req.cookies.jwt;
  //const user = jwt.verify(token, process.env.jwtS); 
  jwt.verify(token, process.env.jwtS, (err, decodedtorken) => {
    if (err)
      res.status(403).json({ error: "Forbidden access" })
    else
    res.status(200).json({ role: decodedtorken.role, username: decodedtorken.username })  
    next();
  });


}


module.exports = {
    getRoles

}