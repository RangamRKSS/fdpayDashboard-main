# 💳 FDPay Dashboard

![logo](https://via.placeholder.com/150x80?text=FDPay)

---

## 🚀 About

**FDPay** is a **fake demo payment service** built for developers.
You can easily integrate it into your apps or websites to simulate payment flows.

👉 This is **only for testing & demo purposes** (not real payments).

---

## ⚡ Features

* 🏦 Create fake bank accounts
* 📲 Generate fake UPI IDs
* 💸 Simulate payments between UPI IDs
* 🔑 Generate API keys
* 📊 Track transaction history

---

## 📦 Run Locally

```bash
npx fdpaydashboard
```

👉 Opens dashboard at:

```
http://localhost:4000
```

---

## 🔑 Authentication

All API requests require an API key:

```
x-api-key: YOUR_SECRET_KEY
```

---

## 📡 API Endpoints

### 📁 Get Accounts

```js
fetch("/api-key/accounts/", {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_SECRET_KEY"
  }
});
```

---

### 📲 Send UPI Payment

```js
fetch("/api-key/upi/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_SECRET_KEY"
  },
  body: JSON.stringify({
    sender_upi: "upi_id",
    receiver_upi: "upi_id",
    amount: 244
  })
});
```

---

### 💳 Payment Status

```js
fetch("/api-key/pay/", {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_SECRET_KEY"
  }
});
```

---

### 📜 Transaction History

```js
fetch("/api-key/history/", {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_SECRET_KEY"
  }
});
```

---

## ⚠️ Important Note

This is a **fake payment system** designed only for:

* Development
* Testing
* Demo purposes

❌ No real money or real bank transactions are involved.

---

## 🛠️ Tech Stack

* React (Vite)
* Node.js
* Express
* CLI Tool

---

## 👨‍💻 Author

FDPay Team
