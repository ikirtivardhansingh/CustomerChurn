const preprocess = require('./preprocess');
const createModel = require("./model");
const tf =require("@tensorflow/tfjs");

async function trainModel(data){
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

    const model = createModel();

    const X_train_tensor = tf.tensor2d(x_train);
    const y_train_tensor = tf.tensor2d(y_train, [y_train.length, 1]);

await model.fit(
    X_train_tensor,
    y_train_tensor,
    {
        epochs: 10
    }
);
}

module.exports = trainModel;
