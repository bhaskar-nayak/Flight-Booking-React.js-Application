# ✈️ Full Stack Flight Booking System

A **Full Stack Flight Booking System** built using **React.js** on the frontend and **Spring Boot Microservices** on the backend.  
The system allows users to search flights, view available options, select a flight, and complete the booking with payment.

This project follows **Microservices Architecture** with **API Gateway**, **Service Discovery**, **Centralized Configuration**, and **Fault Tolerance using Resilience4j Circuit Breaker**.

---

## 📌 Project Description

This application simulates a real-world **flight booking platform** where users can:

- Search flights using a user-friendly form
- View a list of available flights
- Select a flight and book tickets
- Proceed with payment
- Experience high availability with **Circuit Breaker & Fallback Mechanism**

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React.js
- Axios
- Bootstrap
- HTML5 / CSS3

### ⚙️ Backend (Microservices)
- Spring Boot
- Spring Cloud
- Spring Data JPA
- Spring Cloud OpenFeign
- Spring Cloud Gateway
- Spring Cloud Config Server
- Eureka Service Discovery
- **Resilience4j Circuit Breaker**
- REST APIs

### 🗄️ Database
- MySQL

### 🧪 Testing & Tools
- Postman
- Maven
- Logging (Console Appender & File Appender)

---

## ✨ Features

- Flight search & booking
- Payment processing
- CRUD operations using Spring Data JPA
- API Gateway as a single entry point
- Service discovery with Eureka
- Inter-service communication using Feign Client
- Centralized configuration using Config Server
- **Fault tolerance with Resilience4j Circuit Breaker**
- **Fallback responses when service is unavailable**
- Logging and exception handling

---

## 🧱 Microservices Architecture

- API Gateway
- Config Server
- Eureka Server (Service Discovery)
- Flight Service
- Booking Service
- Payment Service

---

## 🔄 Application Flow (End-to-End)

```text
Client (React UI)
        |
        ↓
API Gateway
        |
        ↓
Service Discovery (Eureka)
        |
        ↓
Feign Client
        |
        ↓
Controller
        |
        ↓
Service Layer
        |
        ↓
Repository (Spring Data JPA)
        |
        ↓
MySQL Database

```
--- 

## 🖼️ Application Screens

### 🔍 Search Flights
![Search Flights](https://github.com/bhaskar-nayak/Flight-Booking-React.js-Application/blob/main/Screenshot%20(7).png)

### ✈️ Available Flights
![Available Flights](https://github.com/bhaskar-nayak/Flight-Booking-React.js-Application/blob/main/Screenshot%20(6).png)

### 🛒 Booking Cart
![Booking Cart](https://github.com/bhaskar-nayak/Flight-Booking-React.js-Application/blob/main/Screenshot%20(5).png)
