<img width="1680" alt="Screenshot 2024-11-30 at 2 57 32 PM" src="https://github.com/user-attachments/assets/c05e0f74-bdc7-4fb9-99b0-26a88c071ef9"># 🍽️ FoodyHub: A Dynamic Food Website  

**FoodyHub** is a responsive web application that displays food items dynamically fetched from a backend API. It allows users to explore and filter food options based on categories like **Breakfast**, **Lunch**, and **Dinner**.

---

## 🚀 Features  

- **Dynamic Search & Filter:**  
  Users can filter food items by categories such as Breakfast, Lunch, Dinner, or view them all at once.  

- **Backend API Integration:**  
  Food data is fetched dynamically from a **Node.js & Express.js API**, ensuring a smooth and responsive experience.  

- **Static File Handling:**  
  Images are served efficiently using an `/images` endpoint in Express.js for optimized performance.  

- **Frontend Interactivity:**  
  Filtered food items are displayed in real-time, creating a clean and user-friendly interface.

---

## 🛠️ Tech Stack  

### **Frontend:**  
- HTML  
- CSS  
- JavaScript  

### **Backend:**  
- Node.js  
- Express.js  

### **Middleware:**  
- CORS for handling cross-origin requests  
- `express.json()` and `express.urlencoded()` for parsing JSON and form data  

---

## 📂 Folder Structure  

```
FoodyHub/
├── public/
│   ├── images/         # Food images
├── src/
│   ├── index.html      # Frontend HTML file
│   ├── styles.css      # CSS for the UI
│   ├── app.js          # Backend API code
```

---

## 💻 How to Run the Project  

1. **Clone the repository:**  
   ```bash  
   git clone https://github.com/Sobanhanif4/foodyhub.git  
   cd foodyhub  
   ```  

2. **Install dependencies:**  
   ```bash  
   npm install  
   ```  

3. **Start the server:**  
   ```bash  
   node app.js  
   ```  

4. **Access the application:**  
   Open your browser and navigate to:  
   ```  
   http://localhost:9000  
   ```  

---

## 🧩 API Details  

### **Endpoint:**  
`GET /`  

### **Response:**  
Returns a JSON array of food items:  

```json  
[
  {
    "name": "Boiled Egg",
    "price": 10,
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "image": "/images/egg.png",
    "type": "breakfast"
  },
  {
    "name": "Ramen",
    "price": 25,
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "image": "/images/ramen.png",
    "type": "lunch"
  }
]
```  

---

## 📸 Screenshots  

| **Homepage** | **Filtered Results** |  
|--------------|-----------------------|  
| <img width="1680" alt="Screenshot 2024-11-30 at 2 57 32 PM" src="https://github.com/user-attachments/assets/8286e76c-ed5b-4447-884f-2c5e8cef0192">
 | <img width="1680" alt="Screenshot 2024-11-30 at 2 57 56 PM" src="https://github.com/user-attachments/assets/2adbdab8-f99d-4992-a5fb-b1a2e5bf9da7">
|  

---

## 📖 What I Learned  

- How to build and serve APIs using **Node.js** and **Express.js**.  
- Efficiently serving static files with Express.  
- Dynamically displaying content on the frontend based on API responses.  

---

## 🤝 Let's Connect!  

I’m always excited to collaborate and discuss web development! Feel free to reach out or connect with me:  

- [LinkedIn](https://linkedin.com/in/sobanhanif)  
- [GitHub](https://github.com/Sobanhanif4)  

---
