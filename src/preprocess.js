function preprocessData(data){
    const contract = {
        "Month-to-month": 0,
        "One year": 1,
        "Two year": 2
    };
    
    const cleanedData = data.map(customer => {
        return { 
            tenure :        Number(customer.tenure),
            monthlyCharges :Number(customer.MonthlyCharges),
            totalCharges :  Number(customer.TotalCharges),
            seniorCitizen : Number(customer.SeniorCitizen),
            churn :         customer.Churn === "Yes" ? 1 : 0,
            partner :       customer.Partner === "Yes" ? 1 : 0,
            dependents :    customer.Dependents === "Yes" ? 1 : 0,
            paperlessBilling : customer.PaperlessBilling === "Yes" ? 1 : 0,
            contract :      contract[customer.Contract]
        };
        }
    );
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