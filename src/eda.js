function analyzeData(data){

    const totalCustomers = data.length;

    const totalChurns = 
        data.filter(customer => 
            customer.Churn === "Yes"
        ).length;

    console.log("Total Customers:", totalCustomers);
    console.log("Total Churned Customers:", totalChurns);
    const ChurnedPerc = churnRate(totalCustomers, totalChurns).toFixed(2);
    console.log("Churn Rate:", ChurnedPerc + "%");
    avgTenure(data, totalCustomers);
    avgMonthCharges(data, totalCustomers);
    missingVals(data);
}

function churnRate(tc, churned){
    return (churned/ tc) * 100;
}

function avgTenure(data, tc){
  const avegTenure =  data.reduce((acc, customer) => acc + Number(customer.tenure), 0)/tc;
    
  console.log("avg tenure:", avegTenure.toFixed(2));
}

function avgMonthCharges(data, tc){
    const  avgmCharges = data.reduce((acc, customer) => acc + Number(customer.MonthlyCharges), 0)/tc
    
    console.log("avg Monthly Charges:", avgmCharges.toFixed(2));
}

function missingVals(data){
    const missingVal = data.filter(customer => customer.TotalCharges === "").length;
    console.log("Number of Missing Values: ", missingVal);
}

module.exports = analyzeData;