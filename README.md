# E-Commerce GenAI Analytics

An end-to-end e-commerce analytics project that combines Python ETL, historical currency exchange rates, Google BigQuery, SQL analytics, and Generative AI to enable natural-language data analysis.

## 📌 Project Overview

This project processes historical e-commerce orders from multiple countries and currencies and transforms them into an analytics-ready data warehouse.

The pipeline:

- Cleans and validates raw e-commerce data
- Integrates historical foreign exchange rates
- Converts transaction revenue into USD
- Handles changing customer segments using SCD Type 2
- Builds a dimensional star schema
- Loads data into Google BigQuery
- Performs analytical queries using SQL
- Uses Generative AI to convert natural-language questions into SQL
- Provides a React-based chatbot interface through FastAPI

## 🏗️ Architecture

```text
E-Commerce Orders
       ↓
   Python ETL
       ↓
Historical FX API
       ↓
Data Cleaning & Validation
       ↓
    Star Schema
       ↓
    BigQuery
       ↓
  SQL Analytics
       ↓
    GenAI Layer
       ↓
 Natural Language
       ↓
    FastAPI
       ↓
 React Chatbot
🛠️ Tech Stack
Data & ETL
Python
Pandas
REST API
Data Cleaning
Data Validation
Data Warehouse
Google BigQuery
Star Schema
Dimensional Modeling
Slowly Changing Dimension Type 2 (SCD Type 2)
Analytics
SQL
Revenue Analysis
Customer Analysis
Product Analysis
Country Analysis
Category Analysis
Year-over-Year Analysis
Average Order Value (AOV)
GenAI & Backend
Generative AI
Natural Language to SQL
FastAPI
SQL Validation
Google BigQuery
Frontend
React.js
Vite
JavaScript
CSS
📊 Dataset

The project uses an e-commerce dataset containing:

10,000 orders
2,890 unique customers
500 products
15 countries
Multiple currencies
Transaction dates from 2022 to 2025

The dataset contains sales information such as:

Order ID
User ID
Product ID
Category
Price
Quantity
Total Price
Order Date
Country
Customer Segment
💱 Currency Conversion

The dataset contains transactions from multiple countries and currencies.

Historical foreign exchange rates are retrieved using an FX API and matched with transaction dates.

The conversion process:

Local Currency Revenue
        ↓
Historical Exchange Rate
        ↓
USD Conversion
        ↓
Revenue USD

For each transaction, the pipeline uses the latest available exchange rate on or before the order date.

👥 Slowly Changing Dimension Type 2

Customer segments can change over time.

For example, the same customer may be classified as:

Regular → Premium → VIP

Instead of overwriting historical values, the project uses SCD Type 2 to preserve customer history.

The customer dimension contains:

customer_key
user_id
customer_segment
valid_from
valid_to
is_current

This allows historical transactions to remain associated with the correct customer segment.

⭐ Data Warehouse

The project follows a Star Schema design.

Fact Table

fact_sales

Contains transaction-level metrics:

order_id
date_key
customer_key
product_key
country_key
quantity
price
total_price
currency_code
rate_to_usd
revenue_usd
Dimension Tables

dim_customer

Stores customer information and historical segment changes.

dim_product

Stores product and category information.

dim_country

Stores country and currency information.

dim_date

Stores date-related attributes such as year, quarter, month and day.

📈 SQL Analytics

The BigQuery warehouse supports several analytical queries:

Total Revenue
Monthly Revenue
Revenue by Country
Revenue by Product
Revenue by Category
Revenue by Customer Segment
Year-over-Year Revenue Growth
Average Order Value
Top Customers

Example:

SELECT
    SUM(revenue_usd) AS total_revenue
FROM `healthy-bazaar-508810-m3.ecommerce_analytics.fact_sales`;
🤖 GenAI Analytics Assistant

The project includes a natural-language analytics assistant.

Instead of writing SQL manually, users can ask questions such as:

What was the total revenue in 2024?

The system converts the question into SQL, validates the generated query, executes it in BigQuery, and returns the result.

GenAI Workflow
User Question
      ↓
Natural Language
      ↓
LLM
      ↓
SQL Query
      ↓
SQL Validation
      ↓
BigQuery
      ↓
Query Result
      ↓
Natural Language Answer

This makes the analytics warehouse accessible to users who may not know SQL.

🔐 Security

API keys and credentials are not stored in the repository.

Sensitive files such as:

.env
credentials.json
service-account.json

are excluded using .gitignore.

API keys should be stored using environment variables or secure secret management.

Example:

import os

API_KEY = os.getenv("API_KEY")

Never commit API keys, passwords, tokens, or cloud credentials to GitHub.

💻 Frontend

The project includes a React-based chatbot interface.

Users can:

Enter a business question
Send the question to the FastAPI backend
Receive the generated analytical response
View the response directly in the chatbot
📁 Project Structure
ecommerce-genai-analytics/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── Chatbot.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
▶️ Run the Frontend

Clone the repository:

git clone https://github.com/srikalyani-23/ecommerce-genai-analytics.git

Navigate to the project:

cd ecommerce-genai-analytics

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:5173
🔮 Future Improvements
Deploy the FastAPI backend
Deploy the React frontend
Replace temporary development tunneling with production deployment
Add authentication
Add interactive analytics dashboards
Add loading and error states
Add more natural-language analytics capabilities
Add automated data-quality monitoring
Add scheduled ETL pipelines
