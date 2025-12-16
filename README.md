# ✈️ Full Stack Flight Booking System

A **Full Stack Flight Booking System** built using **React.js** on the frontend and **Spring Boot Microservices** on the backend.  
The system allows users to search flights, view available options, select a flight, and complete the booking with payment integration.

This project follows **microservices architecture** with centralized configuration, service discovery, and API Gateway for scalability and maintainability.

---

## 📌 Project Description

This application simulates a real-world **flight booking platform** where users can:

- Search for flights using a dynamic form
- View a list of available flights
- Select a flight
- Proceed with booking and payment
- Store and manage data using a relational database

The backend is built using **Spring Boot Microservices**, communicating via **Feign Clients**, routed through an **API Gateway**, and registered with **Service Discovery**.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React.js
- Axios (HTTP client)
- Bootstrap (UI styling)
- HTML5 / CSS3
- Form handling and validation

### ⚙️ Backend (Microservices)
- Spring Boot
- Spring Cloud
- Spring Data JPA (CRUD operations)
- Spring Security (Basic security – optional)
- RESTful APIs

### 🧩 Microservices Components
- API Gateway
- Config Server (Centralized configuration)
- Service Discovery (Eureka Server)
- Feign Client (Inter-service communication)

### 🗄️ Database
- MySQL

### 🧪 Testing & Tools
- Postman (API testing)
- Logging using Appender Console & File Appender
- Maven (Dependency management)

---

## ✨ Features

- Flight search using user input (source, destination, date)
- Display available flights dynamically
- Flight selection and booking
- Payment simulation
- CRUD operations for flight data
- Centralized API routing via Gateway
- Load balancing using Service Discovery
- Centralized configuration management
- Exception handling and logging
- Scalable microservices architecture

---

## 🧱 Microservices Architecture

- **API Gateway** – Single entry point for all client requests
- **Config Server** – Centralized configuration for all services
- **Service Discovery (Eureka)** – Registers and discovers services
- **Flight Service** – Manages flight-related operations
- **Booking Service** – Handles booking logic
- **Payment Service** – Processes payments

---

## 🔄 Application Flow (End-to-End)

```text
Client (React UI)
        |
        ↓
API Gateway (Single Entry Point)
        |
        ↓
Service Discovery (Eureka Server)
        |
        ↓
Feign Client (Inter-service communication)
        |
        ↓
Controller Layer
        |
        ↓
Service Layer
        |
        ↓
Repository Layer (Spring Data JPA)
        |
        ↓
MySQL Database
