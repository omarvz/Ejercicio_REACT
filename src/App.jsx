import { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
import {HomePage} from "./pages/HomePage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {NavBar} from "./components/NavBar.jsx";
import {UserPage} from "./pages/UserPage.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";
import {MemeGenerator} from "./pages/MemeGenerator.jsx";

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/meme'} element={<MemeGenerator />} />
        <Route path={'/dashboard/*'} element={<Dashboard />} /> {/* Sub rutas */}
        <Route path={'/aboutPage'} element={<Navigate to={"/about"} />} />
        <Route path={'/users/:id'} element={<UserPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
