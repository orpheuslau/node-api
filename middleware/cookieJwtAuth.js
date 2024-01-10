const jwt = require("jsonwebtoken");

const cookieJwtAuth = (req, res, next) => {

  const token = req.cookies.jwt;
  //const user = jwt.verify(token, process.env.jwtS); 
  jwt.verify(token, process.env.jwtS, (err, decodedtorken) => {
    if (err)
      res.status(403).json({ error: "Forbidden access" })
    else
      next();
  });





}


module.exports = cookieJwtAuth;