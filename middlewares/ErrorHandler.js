let Errorhandler = function (err, req, res, next){
    
    res
        .status(err.statusCode || 500)
        .json({success:false, error: err.message || "Server Error"});

    // res.statusCode(err.statusCode || 500)
    // .json({success: false,})
}

module.exports = Errorhandler;