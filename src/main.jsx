import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <Provider store={store}>
    </Provider> */}
  </React.StrictMode>,
)
