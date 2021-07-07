
const checkURL = function(req,res,next) {
    console.warn("current route is from other page", req.originalUrl)
    next();
}
module.exports = checkURL