const rect = require('./rectangle'); //Takes exports from file & set them as properties for rect object.

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
                //Only used once called within rectangle module
    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectange with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);