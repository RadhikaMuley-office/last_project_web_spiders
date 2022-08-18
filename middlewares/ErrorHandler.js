let Errorhandler = function (err, req, res, next){
    // console.error(err.stack);
    // res.status(500).send('something wnt wrong')//one way

    res
        .status(err.statusCode || 500)
        .json({success:false, error: err.message || "Server Error"});

    
}

module.exports = Errorhandler;