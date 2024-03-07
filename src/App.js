import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import './App.css';

import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Register from './pages/user-register';
import LogIn from './pages/user-login';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <main className="pt-[60px] xs:px-4 md:pt-20 md:px-6 xl:pt-[100px] xl:px-[75px] pb-[100px] md:pb-[160px]">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}