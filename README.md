
## 📌 Super Mall Web Application - README

### 🔗 Live App
[https://super-mall-web-applicati-71ea0.web.app](https://super-mall-web-applicati-71ea0.web.app)

---

## 📝 Project Overview
A modern web portal to help rural and small merchants manage and promote their shop details, offers, and products online through a simple and mobile-friendly Firebase-backed web app.

---

## 🚀 Features
- 🔐 Email/Password + Google Authentication
- 🏪 Create & Manage Shop Information (name, category, floor)
- 🎁 Add & View Product Offers
- 🔍 Category and Floor-based Filtering
- 🧾 Product Comparison
- 📋 Shop and Offer Listing
- 🪵 Console-based Logging for Key Actions

---

## ⚙️ Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Firebase Realtime Database, Firebase Auth
- **Hosting:** Firebase Hosting

---

## 🛠️ Project Structure
```
super-mall-app/
├── public/
│   ├── index.html       # Main HTML file
│   ├── app.js           # App logic (auth, db)
│   ├── style.css        # Styling
├── firebase.json        # Firebase hosting config
```

---

## 📸 Screenshots
*(Add screenshots of your deployed UI if available)*

---

## 🧪 How to Run Locally
```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Initialize Project (if not done)
firebase init

# 4. Deploy your app
firebase deploy
```

---

## 🧠 System Architecture
```
+----------------------------+
|        Web Browser        |
|    (HTML/CSS/JS App)      |
+-------------+-------------+
              |
              v
+-------------+-------------+
|     Firebase Hosting      |  <- Serves HTML/CSS/JS
+-------------+-------------+
              |
              v
+-------------+-------------+
|  Firebase Authentication  |  <- Google / Email Login
+-------------+-------------+
              |
              v
+-------------+-------------+
| Firebase Realtime Database|  <- Shop / Offer Data
+----------------------------+
```

---

## 🧩 Low Level Design (LLD)

**Functions in `app.js`:**
- `signUp()` – Email/Password Sign Up
- `login()` – Email/Password Login
- `googleLogin()` – Google Popup Login
- `logout()` – Sign out user
- `addShop()` – Push new shop to DB
- `addOffer()` – Push new offer to DB
- `listShops()` – Read and display all shops
- `listOffers()` – Display all offers
- `filterByCategory()` – Show shops by category
- `filterByFloor()` – Show shops by floor number
- `compareProducts()` – Show side-by-side product comparison
- Console logs are used for logging actions

**Data Structure in Realtime DB:**
```
/shops
  shopId/
    name: "Sample Shop"
    category: "Electronics"
    floor: 1
    owner: "user@gmail.com"

offers/
  offerId/
    product: "Laptop"
    price: 49999
    feature: "i7"
    user: "user@gmail.com"
```

---

## ✅ Project Checklist
- [x] Firebase Auth + DB Setup
- [x] Google Login
- [x] Realtime DB Integration
- [x] Shop / Offer CRUD
- [x] Filtering and Comparison
- [x] Firebase Hosting
- [x] Logging (console)

---

## 🧾 Submission Info
- 🔗 GitHub Repo: *(you'll update with actual link)*
- 📄 Project Report: Attached as PDF
- 📌 Deployment: Firebase Hosting
- 🧱 System Design: Above included
- 🧪 Test Cases: Manually tested UI + functionality

---

## 👨‍💻 Developed By
Gokulakrishnan S (AIML Student)

---
