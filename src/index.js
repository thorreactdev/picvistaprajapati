import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './store/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <GoogleOAuthProvider clientId="54858408616-jdbb91pu7cp9qt2v3qrne2tutsl9g8ia.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={2400}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      style={{width : "400px"}}
/>
  </React.StrictMode>
  </GoogleOAuthProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
