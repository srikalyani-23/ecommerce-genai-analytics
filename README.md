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
