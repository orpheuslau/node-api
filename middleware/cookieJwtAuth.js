const jwt = require("jsonwebtoken");

const cookieJwtAuth = (req, res, next) => {
  
  try {
    const token = req.cookies.jwt;
    const user = jwt.verify(token, process.env.jwtS); 
    next();
  } catch (err) {
        res.status(403).json({ error: "Forbidden access" });
      }
}


module.exports = cookieJwtAuth;