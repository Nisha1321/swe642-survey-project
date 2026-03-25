


# 🎓 SWE 642 – Assignment 3: Campus Visit Survey Application

**George Mason University | SWE 642 – Software Engineering for the World Wide Web**
**Semester:** Spring 2026
**Team Members:** Nisha Patel (G01575036) | Disha Yadav

## 📌 Project Overview

This is a full-stack web application that allows prospective students to fill out
a campus visit feedback survey. The application supports complete CRUD operations —
users can Create, Read, Update, and Delete survey responses through a modern,
responsive Angular frontend connected to a Spring Boot REST API backed by MySQL.



## 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Frontend | Angular | 21.2.3 |
| UI Framework | Bootstrap | 5.3.0 |
| Backend | Spring Boot | 3.2.3 |
| Language | Java | 21 |
| ORM | Spring Data JPA / Hibernate | 3.2.3 |
| Database | MySQL | 8.0 |
| Build Tool | Apache Maven | 3.9.14 |
| Runtime | Node.js | 22.17.0 |



## 🏗️ Application Architecture

```
┌─────────────────────┐         HTTP/REST          ┌──────────────────────┐
│   Angular Frontend  │  ─────────────────────────▶ │  Spring Boot Backend │
│   localhost:4200    │  ◀─────────────────────────  │   localhost:8080     │
└─────────────────────┘       JSON Responses        └──────────┬───────────┘
                                                               │ JPA/Hibernate
                                                               ▼
                                                    ┌──────────────────────┐
                                                    │    MySQL Database     │
                                                    │  surveydb / port 3306│
                                                    └──────────────────────┘
```

---

## 📁 Project Structure

```
swe642-survey-project/
│
├── backend/
│   ├── src/main/java/survey/example/project/
│   │   ├── ProjectApplication.java
│   │   ├── model/Survey.java
│   │   ├── repository/SurveyRepository.java
│   │   └── controller/SurveyController.java
│   ├── src/main/resources/application.properties
│   └── pom.xml
│
└── frontend/
    └── src/app/
        ├── home/
        ├── survey-form/
        ├── survey-list/
        ├── services/survey.service.ts
        ├── models/survey.model.ts
        ├── app.routes.ts
        └── app.config.ts
```

---

## ✅ Features Implemented

### 🏠 Homepage
- Welcome landing page with GMU green/yellow theme
- Navigation cards linking to Survey Form and Survey List

### 📝 Survey Form (Create & Edit)
- Text fields: First Name, Last Name, Street Address, City, State, Zip, Telephone, Email, Date
- Checkboxes: Students, Location, Campus, Atmosphere, Dorm Rooms, Sports
- Radio Buttons: Friends, Television, Internet, Other
- Dropdown: Very Likely, Likely, Unlikely
- Text area for Additional Comments
- Submit and Cancel buttons
- Client-side validation on all required fields
- Pre-fills all fields when editing an existing survey

### 📋 Survey List
- Full-width responsive table
- Avatar initials from first/last name
- Color-coded recommendation badges
- Campus features as individual pill tags
- Edit and Delete buttons per row

---

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/surveys` | Retrieve all surveys |
| GET | `/api/surveys/{id}` | Retrieve survey by ID |
| POST | `/api/surveys` | Create a new survey |
| PUT | `/api/surveys/{id}` | Update an existing survey |
| DELETE | `/api/surveys/{id}` | Delete a survey |

---

## 🗄️ Database

- **Database Name:** `surveydb`
- **Table:** `surveys` (auto-created by Hibernate on first run)
- **Port:** 3306
- **DDL Auto:** `update`

---

## 🚀 How to Run Locally

### Prerequisites
- Java 21
- Apache Maven 3.9+
- Node.js 22+
- Angular CLI 21
- MySQL 8.0

### Step 1 — Setup MySQL
```sql
CREATE DATABASE IF NOT EXISTS surveydb;
```

### Step 2 — Configure Backend
Edit `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/surveydb?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
server.port=8080
```

### Step 3 — Run Backend
```bash
cd backend
mvn spring-boot:run
```
✅ Runs at: http://localhost:8080
✅ Test: http://localhost:8080/api/surveys

### Step 4 — Run Frontend
```bash
cd frontend
npm install
ng serve
```
✅ Runs at: http://localhost:4200

> ⚠️ Keep both terminals open at the same time

---

## 🧪 CRUD Testing

| Operation | Steps |
|---|---|
| **Create** | Click Student Survey → Fill form → Submit |
| **Read** | Click List All Surveys → View table |
| **Update** | Click Edit → Modify fields → Update |
| **Delete** | Click Delete → Confirm dialog |

---

## 👥 Team Members

| Name | G-Number |
|---|---|
| Nisha Patel | G01575036 |
| Disha Yadav | — |

---

## 📦 Submission Contents

```
📦 swe642-assignment3.zip
├── 📁 backend/
├── 📁 frontend/
├── 📄 README.md
├── 📄 documentation.pdf
└── 🎥 demo-video.mp4
```

---

*© 2026 George Mason University – SWE 642 Assignment 3*
```
