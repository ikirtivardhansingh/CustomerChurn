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
}
function churnRate(tc, churned){
    return (churned/ tc) * 100;
}

module.exports = analyzeData;