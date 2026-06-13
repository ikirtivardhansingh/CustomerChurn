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
/*
what .fit() here dosw:
1. Take one training example
2. Predict
3. Calculate loss
4. Calculate gradients
5. Update weights using Adam
6. Repeat
*/

const X_test_tensor = tf.tensor2d(x_test);
const predictiom = model.predict(X_test_tensor);

// if after this point I feel like revisiting the actual value,
// I will have to do this:
// const predictionArray = await predictions.array()
// or I can do this:
// const predictionArray = predictions.dataSync();

const predictedLabels = Array.from(predictions.dataSync())
    .map(p => p >= 0.5 ? 1 : 0);
    
}

module.exports = trainModel;
