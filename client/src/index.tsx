import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./modules/login";
import LandingPage from './modules/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/app">
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
