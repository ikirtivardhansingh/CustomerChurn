const loadData = require("./src/loadData");
const analyzeData = require("./src/eda");
const preprocessData = require("./src/preprocess");

async function main(){
    const data = await loadData("./data/WA_Fn-UseC_-Telco-Customer-Churn.csv");

    console.log(data[0]);
    console.log(data.length);
    analyzeData(data);
    const result = preprocessData(data);
     console.log(result.x[0]);
     console.log(result.y[0]);

  }
  main();