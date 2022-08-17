let errorHandler = function (err, req, res, next) {
    let err = new Error();
    console.error(err.stack);
    res.status(500).send("Something Broke!");
};

module.exports = errorHandler;