import pandas as pd
df = pd.read_csv("data/WA_Fn-UseC_-Telco-Customer-Churn.csv")

# print(df.head())
# print(df.shape)
# print(df.columns)
# print(df.dtypes)
# features = ["tenure",
#     "MonthlyCharges",
#     "TotalCharges",
#     "SeniorCitizen",
#     "Partner",
#     "Dependents",
#     "PaperlessBilling",
#     "Contract"]
# print(df["TotalCharges"].head())
# print(df.tail())
#  print(df.info())
# print(df.describe())
# print(df.index)
print(df['MonthlyCharges'])
