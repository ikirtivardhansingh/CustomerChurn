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

    // console.log("x_train", x_train.length);
    // console.log("x_test", x_test.length);
    // console.log("y_train", y_train.length);
    // console.log("y_test", y_test.length);

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

   // console.log("Weights:" + model.getWeights());
    /*
    what .fit() here dosw:
    1. Take one training example
    2. Predict
    3. Calculate loss
    4. Calculate gradients
    5. Update weights using Adam
    6. Repeat
    addition: 
    Run forward passes
    Calculate loss
    Run backpropagation
    Update weights
    Repeat for every batch and every epoch
    */

    const X_test_tensor = tf.tensor2d(x_test);
    const predictions = model.predict(X_test_tensor);
    const y_test_tensor = tf.tensor2d(
        y_test,
        [y_test.length, 1]
    );
    // if after this point I feel like revisiting the actual value,
    // I will have to do this:
    // const predictionArray = await predictions.array()
    // or I can do this:
    // const predictionArray = predictions.dataSync();

    const predictedLabels = Array.from(predictions.dataSync())
        .map(p => p >= 0.5 ? 1 : 0);
        
    let correct = 0;

    for ( let i =0; i< y_test.length; i++){
        if ( predictedLabels[i] === y_test[i]){
            correct++;
        }
    }

    const accuracy = correct / y_test.length;

    console.log(`Accuracy: ${(accuracy * 100).toFixed(2)}%`)

    // const evaluation = model.evaluate(
    //     X_test_tensor,
    //     y_test_tensor
    // );
    // console.log("Loss:", lossTensor.dataSync()[0]);
    // console.log("Accuracy:", accuracyTensor.dataSync()[0]);


    let tp = 0, fp = 0, fn = 0, tn = 0;
    for (let i = 0; i < y_test.length; i++){
        if (predictedLabels[i] === 1 && y_test[i] === 1)
            tp++;
        else if (predictedLabels[i] === 0 && y_test[i] === 0)
            tn++;
        
        else if (predictedLabels[i] === 1 && y_test[i] === 0)
            fp++;
        else if (predictedLabels[i] === 0 && y_test[i] === 1)
            fn++;

    }
    console.log({tp, fp, fn, tn});
    ///console.log(    Array.from(predictions.dataSync()).slice(0, 20));
    const precision = (tp + fp) === 0 ? 0 : tp / (tp + fp);
        console.log("Precision:", precision);
    const recall = (tp + fn) === 0 ? 0 : tp / (tp + fn);
        console.log("Recall:", recall);
    const f1 = (precision + recall) === 0 ? 0 : 
                2 * ((precision * recall) / 
                    (precision + recall));
    console.log("F1: ", f1);
}

module.exports = trainModel;
