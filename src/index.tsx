import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router';
import Main from './Components/Experience/Main';
import ApiMain from './Components/API\'s/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/contact' element={<h1>Contact</h1>} />
      <Route path='/mission' element={<h1>Mission Statement</h1>} />
      <Route path='/experience' element={<Main />} />
      <Route path='/profile' element={<h1>Profile</h1>} />
      <Route path="/API" element={<ApiMain/>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
