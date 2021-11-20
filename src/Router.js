import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginTaeyoung from './pages/taeyoung/Login/Login';
import MainTaeyoung from './pages/taeyoung/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-taeyoung" element={<LoginTaeyoung />} />
        <Route path="/main-taeyoung" element={<MainTaeyoung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
