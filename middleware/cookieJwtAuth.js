const jwt = require("jsonwebtoken");

const cookieJwtAuth = (req, res, next) => {
  
  try {
    console.log("before token");
    console.log(req.cookies);
    const token = req.cookies.token;
    console.log(token);
    const user = jwt.verify(token, process.env.jwtS);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/login");
  }
}

module.exports = cookieJwtAuth;