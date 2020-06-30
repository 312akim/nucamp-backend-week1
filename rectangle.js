
//Callback param passed in when module is called. Defined elsewhere
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        //Asynchronous function. Convention return error object as first argumeent.
        //If error condition detected, callback run
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`))
    } else {
        //Timeout simulates delay for response
        setTimeout(() =>
            callback(null, {
                //Closure access x & y
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};

/*
//module.exports long hand. Node Module
exports.perimeter = (x, y) => 2 * (x + y);
exports.area = (x, y) => x * y;
*/