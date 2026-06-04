function preprocessData(data){

    const cleanedData = data.map(customer => {
        return { 
            tenure :        Number(customer.tenure),
            monthlyCharges :Number(customer.MonthlyCharges),
            totalCharges :  Number(customer.TotalCharges),
            seniorCitizen : Number(customer.SeniorCitizen),
            churn :         customer.Churn === "Yes" ? 1 : 0,
            partner :       customer.Partner === "Yes" ? 1 : 0
        };
        }
    );
    const x = cleanedData.map(customer => [
        customer.tenure,
        customer.monthlyCharges,
        customer.totalCharges,
        customer.seniorCitizen,
        customer.partner
    ]);

    const y = cleanedData.map(customer => customer.churn);

    console.log("cleaned Data", cleanedData[0]);

    return {x , y};
}

module.exports = preprocessData;