# Customer Churn Prediction in Core JavaScript

## ML Restart Project

---

# Project Overview


The project intentionally avoids TensorFlow.js and external Machine Learning libraries during the initial implementation.

The objective is to understand how a Machine Learning model works internally before using frameworks that automate the process.

---

# Why This Project Exists

Current Goals:

1. Restart Machine Learning after a gap.
2. Improve JavaScript proficiency.
3. Build an end-to-end Machine Learning project.
4. Understand Logistic Regression deeply.
5. Create a foundation for future TensorFlow.js projects.
6. Prepare for future ML Engineer and GenAI work.

---

# Project Objective

Predict whether a customer is likely to leave a company based on information such as:

* Customer tenure
* Monthly charges
* Senior citizen status
* Contract information
* Other customer attributes

Output:

* Churn = Yes
* Churn = No

This is a Binary Classification problem.

---

# What Will Be Built

By the end of the project we will have:

* Data loading system
* Data analysis utilities
* Data preprocessing pipeline
* Train-test split implementation
* Logistic Regression implementation from scratch
* Evaluation metrics
* Prediction engine
* Modular JavaScript codebase

No Machine Learning libraries will be used.

---

# Project Structure

customer-churn/

├── data/

│   └── churn.csv

│

├── src/

│   ├── loadData.js

│   ├── eda.js

│   ├── preprocess.js

│   ├── splitData.js

│   ├── logisticRegression.js

│   ├── metrics.js

│   └── predict.js

│

├── index.js

│

└── PROJECT_GUIDE.md

---

# Learning Philosophy

Project Style:

Hybrid Learning

Each phase follows:

Problem
→ Concept
→ Intuition
→ Mathematics
→ JavaScript Implementation
→ Real Dataset Example
→ Common Mistakes
→ Interview Questions

This allows rapid progress while still understanding the theory.

---

# Phase 0

# Business Problem and Dataset Understanding

## Goal

Understand what problem is being solved.

## Questions To Answer

What is customer churn?

Why do businesses care about churn?

What is classification?

What is supervised learning?

What is a feature?

What is a label?

What is a prediction?

## Deliverables

* Project structure created
* Dataset downloaded
* Understanding of the business problem

## Success Criteria

Able to explain the project in simple language.

---

# Phase 1

# Exploratory Data Analysis (EDA)

## Goal

Understand the data.

## Concepts

Dataset

Records

Rows

Columns

Features

Labels

Missing Values

Descriptive Statistics

## Tasks

Load CSV file.

Convert rows into JavaScript objects.

Calculate:

* Total customers
* Churned customers
* Churn percentage
* Average tenure
* Average monthly charges

Identify:

* Missing values
* Suspicious records
* Data quality issues

## Deliverables

Console report showing dataset statistics.

## Success Criteria

Able to explain the dataset structure.

---

# Phase 2

# Feature Engineering and Preprocessing

## Goal

Convert raw business data into numerical data suitable for Machine Learning.

## Concepts

Feature Engineering

Encoding

Numerical Representation

Feature Vectors

Labels

## Tasks

Convert:

Yes → 1

No → 0

Male → 0

Female → 1

Select initial features:

* tenure
* monthlyCharges
* seniorCitizen

Create:

X = Features

y = Labels

## Deliverables

Clean ML-ready dataset.

## Success Criteria

Able to explain why Machine Learning models require numerical inputs.

---

# Phase 3

# Train-Test Split

## Goal

Create a fair evaluation system.

## Concepts

Training Data

Testing Data

Generalization

Overfitting

Underfitting

## Tasks

Shuffle dataset.

Split:

80% Training

20% Testing

Create:

trainX

trainY

testX

testY

## Deliverables

Training and testing datasets.

## Success Criteria

Able to explain why training and testing on the same data is a mistake.

---

# Phase 4

# Classification Fundamentals

## Goal

Understand what a classifier actually does.

## Concepts

Binary Classification

Probability

Decision Boundary

Prediction

Confidence

## Questions

How does a model estimate churn probability?

Why is probability useful?

How are predictions generated?

## Deliverables

Conceptual understanding of classification.

---

# Phase 5

# Logistic Regression Mathematics

## Goal

Understand the mathematics behind the model.

## Concepts

Weights

Bias

Linear Combination

Sigmoid Function

Probability Mapping

## Learning Outcomes

Understand how inputs become probabilities.

Understand why Logistic Regression is suitable for binary classification.

## Deliverables

Manual calculation of predictions.

---

# Phase 6

# Building Logistic Regression

## Goal

Implement the model from scratch.

## Concepts

Forward Pass

Loss Function

Gradient Descent

Optimization

Parameter Updates

## Tasks

Initialize weights.

Initialize bias.

Compute predictions.

Calculate loss.

Update parameters.

Train model.

## Deliverables

Fully functioning Logistic Regression implementation.

## Success Criteria

Able to explain how learning occurs.

---

# Phase 7

# Model Evaluation

## Goal

Determine whether the model is useful.

## Concepts

Accuracy

Precision

Recall

F1 Score

Confusion Matrix

False Positives

False Negatives

## Tasks

Generate evaluation report.

Analyze model mistakes.

## Deliverables

Performance metrics report.

## Success Criteria

Able to interpret model performance.

---

# Phase 8

# Prediction Engine

## Goal

Use the model on unseen customers.

## Tasks

Accept customer data.

Generate probability.

Generate prediction.

## Example Output

Probability of Churn: 0.84

Prediction: Likely To Churn

## Deliverables

Working prediction system.

---

# Phase 9

# ML Engineer Improvements

## Goal

Move beyond a beginner implementation.

## Topics

Feature Scaling

Normalization

Additional Features

Hyperparameters

Model Improvements

## Deliverables

Improved model performance.

---

# Phase 10

# TensorFlow.js Migration

## Goal

Understand what frameworks automate.

## Topics

Sequential Models

Training APIs

Automatic Differentiation

Optimizers

Evaluation APIs

## Deliverables

TensorFlow.js implementation of the same project.

---

# Expected Outcomes

After completing this project, I should be able to explain:

1. Supervised Learning
2. Classification
3. Logistic Regression
4. Sigmoid Function
5. Gradient Descent
6. Train-Test Split
7. Precision and Recall
8. Feature Engineering
9. Model Evaluation
10. End-to-End ML Workflow

without relying on a Machine Learning library.

---

# Project Status Tracker

Phase 0: Not Started

Phase 1: Not Started

Phase 2: Not Started

Phase 3: Not Started

Phase 4: Not Started

Phase 5: Not Started

Phase 6: Not Started

Phase 7: Not Started

Phase 8: Not Started

Phase 9: Not Started

Phase 10: Not Started

---

# Notes Section

This section will be updated throughout the project with:

* Important insights
* Common mistakes
* Interview questions
* Revision notes
* Future improvements
