import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
