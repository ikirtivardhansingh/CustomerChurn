const tf = require("@tensorflow/tfjs");
const trainingModel = require("./trainingModel");

function createModel(data){
    const model = tf.sequential();

    model.add(
        tf.layers.dense({
            inputShape: [8],
            units: 1,
            activation: "sigmoid"
        })
    );
    model.compile({
        optimizer: "adam",
        loss: "binaryCrossentropy",
        metrics: ["accuracy"]
    });
      
}

module.exports = createModel;
