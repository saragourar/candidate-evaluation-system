# Candidate Evaluation System – Assistant Professor B

## 📌 Project Description

This project is a web-based candidate evaluation system designed to support the recruitment process of Assistant Professor Class B.
It automates the calculation of evaluation scores based on official academic criteria and ensures fairness, transparency, and efficiency.

The project has been developed using two different approaches:

1. A PHP & MySQL-based web application
2. A Python Flask-based web application

## 🎯 Objective

* Standardize the academic evaluation process
* Automate score calculation
* Improve efficiency and transparency

## 🛠️ Technologies Used

### 🔹 Version 1: PHP Web Application

* HTML
* CSS
* JavaScript
* PHP
* MySQL
* XAMPP Server

### 🔹 Version 2: Python Web Application

* Python
* Flask
* HTML / CSS

## ⚙️ System Features

* Candidate information input
* Scientific works evaluation
* Conference evaluation
* Professional experience evaluation
* Interview score calculation
* Automatic final score calculation
* Data storage (PHP version)

## ▶️ How to Run the Project

### 🔹 Run PHP Version

1. Install XAMPP
2. Copy the project folder to:
   `C:\xampp\htdocs\`
3. Start Apache and MySQL
4. Open phpMyAdmin
5. Import `evaluation_db.sql`
6. Open browser and run:
   `http://localhost/evaluation-assistant-b`

### 🔹 Run Python (Flask) Version

1. Install Python
2. Install Flask:

   ```
   pip install flask
   ```
3. Run the application:

   ```
   python EvaluationGridWebApp.py
   ```
4. Open browser:

   ```
   http://127.0.0.1:5000/
   ```

## 📂 Project Structure

### PHP Version

* index.html → User interface
* style.css → Design
* script.js → Logic
* save.php → Database storage
* evaluation_db.sql → Database

### Python Version

```
EvaluationGridProject/
│
├── EvaluationGridWebApp.py
├── templates/
│   └── index.html
```

## 📊 Evaluation Criteria

* Scientific works: 8 points
* Conferences: 3 points
* Professional experience: 3 points
* Interview: 4 points

**Total: 20 points**

