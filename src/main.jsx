import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



const firebaseConfig = {
  apiKey: "AIzaSyDA8uNpLf86f8InI2KodGLyJ1PZtVrJOpQ",
  authDomain: "ecommerce-287b8.firebaseapp.com",
  projectId: "ecommerce-287b8",
  storageBucket: "ecommerce-287b8.appspot.com",
  messagingSenderId: "421142870662",
  appId: "1:421142870662:web:675c8745804dcfebe4ef07"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




