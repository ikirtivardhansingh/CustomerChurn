function preprocessData(data){
    const contract = {
        "Month-to-month": 0,
        "One year": 1,
        "Two year": 2
    };
    
    const cleanedData = data.map(customer => {
        return { 
            tenure :         (Number(customer.tenure) - 0) / (72 - 0),
            monthlyCharges : (Number(customer.MonthlyCharges) - 18.25 ) / (118.75 - 18.25),
            totalCharges :   (Number(customer.TotalCharges) - 0) / (8684.8 - 0),
            seniorCitizen : Number(customer.SeniorCitizen),
            churn :         customer.Churn === "Yes" ? 1 : 0,
            partner :       customer.Partner === "Yes" ? 1 : 0,
            dependents :    customer.Dependents === "Yes" ? 1 : 0,
            paperlessBilling : customer.PaperlessBilling === "Yes" ? 1 : 0,
            contract :      contract[customer.Contract]
        };
        }
        
    );
//     console.log(
//     Math.min(...cleanedData.map(c => c.tenure)),
//     Math.max(...cleanedData.map(c => c.tenure))
// );

// console.log(
//     Math.min(...cleanedData.map(c => c.monthlyCharges)),
//     Math.max(...cleanedData.map(c => c.monthlyCharges))
// );

// console.log(
//     Math.min(...cleanedData.map(c => c.totalCharges)),
//     Math.max(...cleanedData.map(c => c.totalCharges))
// );
    const x = cleanedData.map(customer => [
        customer.tenure,
        customer.monthlyCharges,
        customer.totalCharges,
        customer.seniorCitizen,
        customer.partner,
        customer.dependents,
        customer.paperlessBilling,
        customer.contract
    ]);

    const y = cleanedData.map(customer => customer.churn);

    console.log("cleaned Data", cleanedData[0]);

    return {x , y};
}

module.exports = preprocessData;