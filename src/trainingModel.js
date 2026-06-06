const preprocess = require('./preprocess');

function trainModel(data){
    const {x, y} = preprocess(data)
    const splitIndex = Math.floor(x.length * 0.8);
    
    const x_train = x.slice(0, splitIndex);
    const x_test = x.slice(splitIndex);
    const y_train = y.slice(0, splitIndex);
    const y_test = y.slice(splitIndex);

    console.log("x_train", x_train.length);
    console.log("x_test", x_test.length);
    console.log("y_train", y_train.length);
    console.log("y_test", y_test.length);
}

module.exports = trainModel;
