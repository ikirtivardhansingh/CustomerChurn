const loadData = require("./src/loadData");

async function main() {
  const data = await loadData(
    "./data/WA_Fn-UseC_-Telco-Customer-Churn.csv"
  );

  console.log(data.length);

  console.log(data[0]);
}

main();