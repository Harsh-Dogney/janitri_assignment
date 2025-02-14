
# **🏥 Healthcare Management API**  

A **secure and efficient** backend API for managing patients, users, and heart rate monitoring in a healthcare system. Built with **Node.js, Express, and MongoDB**, it provides robust **user authentication, patient management, and real-time health monitoring**.  

## 🚀 **Features**  

### 🔐 **User Management**  
- **Register & Login** with email/password  
- **JWT-based authentication**  
- **Role-based access control (doctor, nurse, admin)**  

### 🏥 **Patient Management**  
- **Create, Read, Update, Delete (CRUD)** operations  
- Store **medical history & patient details**  
- **Associate patients with assigned doctors**  

### ❤️ **Heart Rate Monitoring**  
- Record **heart rate measurements**  
- Retrieve **patient heart rate history**  
- **Classify heart rate status** (_normal, warning, critical_)  

### 🔒 **Security Features**  
- **Password hashing** using `bcrypt`  
- **JWT authentication** for secure access  
- **Input validation** using `express-validator`  
- **Protected routes** for authorized users only  

---

## 📦 **Tech Stack**  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Authentication**: JWT, bcrypt  
- **Validation**: express-validator  
- **Tools**: Postman (API testing)  

---

## 🚀 **Getting Started**  

### **1️⃣ Prerequisites**  
Make sure you have:  
- **Node.js** installed  
- **MongoDB** running locally or on a cloud database (e.g., MongoDB Atlas)  

### **2️⃣ Installation**  
Clone the repository:  
```bash
git clone https://github.com/yourusername/healthcare-api.git
cd healthcare-api
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add:  
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Start the Server**  
```bash
npm run dev
```
> The server will start on `http://localhost:3000`

---

## 📡 **API Endpoints**  

### **🔑 User APIs**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | Login and get JWT token |

### **🏥 Patient APIs**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/patients` | Add a new patient |
| `GET` | `/api/patients` | Get all patients |
| `GET` | `/api/patients/:id` | Get a patient by ID |

### **❤️ Heart Rate APIs**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/heart-rate` | Record heart rate data |
| `GET` | `/api/heart-rate/patient/:patientId` | Get heart rate history for a patient |

🔒 **_All API requests (except user registration & login) require authentication via JWT._**  

---

## 🧪 **Testing with Postman**  
1. Import the API collection into **Postman**  
2. Set the `Authorization` token (JWT) in headers  
3. Test each endpoint 🚀  

---
