const loadData = require("./src/loadData");
const analyzeData = require("./src/eda");

async function main(){
    const data = await loadData("./data/WA_Fn-UseC_-Telco-Customer-Churn.csv");

    console.log(data[0]);
    console.log(data.length);
  analyzeData(data);
    
  }
  main();