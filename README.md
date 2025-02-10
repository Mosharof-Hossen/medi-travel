# Project Name : BikeHut
## Api Link : [Link](https://medi-travel-server.vercel.app/)
## Live Site : [Link](https://medi-travel-client.vercel.app/)

MediTravel is a **full-featured medical travel management platform** where users can browse hospitals, read blogs, and (for admins) create new clinics.  

## 🌟 Features  
✅ **Authentication & Authorization**  
   - 🔐 JSON Web Token (JWT) Authentication  
   - 🎭 Role-Based Access Control (RBAC) (User/Admin)  
   - 🔄 Persistent Login (Redux Persistor & Local Storage)  

✅ **User Interface & Navigation**  
   - 🏠 **Home Page**: Includes a banner, top hospitals listing, and footer  
   - 🏥 **Hospital Details Page**: Displays detailed information about selected hospitals  
   - 📖 **Blog Page**: Contains blogs related to medical travel  
   - 📜 **About Page**: Provides information about MediTravel  
   - 🏥 **Create Clinic Page (Admin Only)**: Allows admins to add new clinics (**Private Route**)  


## Technologies

*   **TypeScript**
*   **React.Js**
*   **Node.js**
*   **Express.js**
*   **MongoDB with Mongoose**
*   **Authentication: JSON Web Token (JWT)**
*   **Authorization: Role-Based Access Control (RBAC)**

---
Admin Email and Password:
{
    "email": "admin@admin.com",
    "password": "12345"
}


## **Project setup guideline**
### Frontend
Step 1: Clone the Repository
``` git
https://github.com/Mosharof-Hossen/medi-travel.git
```

Step 2: Install Dependencies
``` javascript
cd client
npm install
```
Step 3: Run
```javascript
npm run dev
```

### Backend
Step 1: Clone the Repository
``` git
https://github.com/Mosharof-Hossen/medi-travel.git
```

Step 2: Install Dependencies
``` javascript
cd server
npm install
```

Step 3: Set Up Backend Environment Variables
``` javascript
PORT = 4000
DATABASE_URL = ----------
JWT_ACCESS_SECRET = -------
```

Step 54: Start the Server
```javascript
npm run start:dev
```




Author <br>
Mosharof Hossen <br>
[GitHub Profile](https://github.com/Mosharof-Hossen)

