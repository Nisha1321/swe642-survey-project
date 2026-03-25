
```markdown
# 🎓 SWE 642 – Assignment 3: Campus Visit Survey Application

**George Mason University | SWE 642 – Software Engineering for the World Wide Web**  
**Semester:** Spring 2026  
**Team Members:** Nisha Patel (G01575036) | Disha Yadav  

---

## 📌 Project Overview

This is a full-stack web application that allows prospective students to fill out 
a campus visit feedback survey. The application supports complete CRUD operations — 
users can Create, Read, Update, and Delete survey responses through a modern, 
responsive Angular frontend connected to a Spring Boot REST API backed by MySQL.

---

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

---

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
├── backend/                                   ← Spring Boot REST API
│   ├── src/
│   │   └── main/
│   │       ├── java/survey/example/project/
│   │       │   ├── ProjectApplication.java    ← Main entry point
│   │       │   ├── model/
│   │       │   │   └── Survey.java            ← JPA Entity / DB Table
│   │       │   ├── repository/
│   │       │   │   └── SurveyRepository.java  ← Spring Data JPA Repository
│   │       │   └── controller/
│   │       │       └── SurveyController.java  ← REST API Controller
│   │       └── resources/
│   │           └── application.properties     ← DB & server configuration
│   └── pom.xml                                ← Maven dependencies
│
└── frontend/                                  ← Angular Application
    └── src/
        └── app/
            ├── home/                          ← Welcome homepage component
            ├── survey-form/                   ← Create & Edit survey form
            ├── survey-list/                   ← List all surveys table
            ├── services/
            │   └── survey.service.ts          ← HTTP calls to REST API
            ├── models/
            │   └── survey.model.ts            ← TypeScript data interface
            ├── app.routes.ts                  ← Application routing
            └── app.config.ts                  ← App configuration
```

---

## ✅ Features Implemented

### 🏠 Homepage
- Welcome landing page with GMU green/yellow theme
- Navigation cards linking to Survey Form and Survey List

### 📝 Survey Form (Create & Edit)
- Text fields: First Name, Last Name, Street Address, City, State, Zip, Telephone, Email, Date of Survey
- Checkboxes: Students, Location, Campus, Atmosphere, Dorm Rooms, Sports
- Radio Buttons: Friends, Television, Internet, Other
- Dropdown: Very Likely, Likely, Unlikely
- Text area for Additional Comments
- Submit and Cancel buttons
- Client-side validation on all required fields
- Pre-fills all fields when editing an existing survey

### 📋 Survey List
- Displays all surveys in a full-width responsive table
- Avatar initials generated from first/last name
- Color-coded recommendation badges (green/yellow/red)
- Campus features displayed as individual pill tags
- Edit button — navigates to pre-filled form
- Delete button — removes survey with confirmation dialog

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
Make sure the following are installed:
- ✅ Java 21
- ✅ Apache Maven 3.9+
- ✅ Node.js 22+
- ✅ Angular CLI 21 (`npm install -g @angular/cli`)
- ✅ MySQL 8.0

---

### Step 1 — Setup MySQL Database

Open MySQL command line and run:
```sql
CREATE DATABASE IF NOT EXISTS surveydb;
```

---

### Step 2 — Configure Backend

Open `backend/src/main/resources/application.properties` and update:
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

---

### Step 3 — Run the Backend

```bash
cd backend
mvn spring-boot:run
```
✅ Backend runs at: `http://localhost:8080`  
✅ Test it: `http://localhost:8080/api/surveys` should return `[]`

---

### Step 4 — Run the Frontend

Open a **new terminal**:
```bash
cd frontend
npm install
ng serve
```
✅ Frontend runs at: `http://localhost:4200`

---

### Step 5 — Open the App

Open your browser and go to:
```
http://localhost:4200
```

> ⚠️ Both terminals must stay open at the same time

---

## 🧪 Testing CRUD Operations

| Operation | Steps |
|---|---|
| **Create** | Click Student Survey → Fill form → Submit |
| **Read** | Click List All Surveys → View table |
| **Update** | Click Edit on any row → Modify → Update |
| **Delete** | Click Delete on any row → Confirm |

---

## 📦 Submission Contents

```
📦 swe642-assignment3.zip
├── 📁 backend/          ← Spring Boot source code
├── 📁 frontend/         ← Angular source code  
├── 📄 README.md         ← This file
├── 📄 documentation.pdf ← Project documentation
└── 🎥 demo-video.mp4    ← Screen recording of working app
```

---

## 🎥 Demo Video Covers

1. ✅ Homepage loading with GMU theme
2. ✅ Filling out and submitting the survey form
3. ✅ Survey appearing in List All Surveys table
4. ✅ Editing an existing survey
5. ✅ Deleting a survey
6. ✅ MySQL table showing saved data

---

## 👥 Team Members

| Name | G-Number | Role |
|---|---|---|
| Nisha Patel | G01575036 | Full-Stack Development |
| Disha Yadav | — | Full-Stack Development |

---

## 📝 Academic Integrity

This project was developed as part of SWE 642 coursework at George Mason University.  
All code was written by the team members listed above.

---

*© 2026 George Mason University – SWE 642 Assignment 3*
```

***

Just copy everything between the triple backticks, create a file called `README.md` in your `swe642-survey-project` root folder, paste it, and save! 🚀
