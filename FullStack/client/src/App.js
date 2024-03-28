import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FullMember from "./components/FullMember.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar";
import MemberListPage from "./pages/MemberListPage.tsx";
import UpdateDatePage from "./pages/UpdateDatePage.tsx";
import Introducing from "./pages/Introducing.tsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/member" element={<FullMember />} />
          <Route path="/member/:id" element={<FullMember />} />
          <Route path="/allmembers" element={<MemberListPage />} />
          <Route path="/corona/:id" element={<UpdateDatePage />} />
          <Route path="/intro/:id" element={<Introducing />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
