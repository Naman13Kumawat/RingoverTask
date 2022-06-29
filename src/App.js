import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact/Contact"
import Team from "./pages/Team/Team"
import Journey from "./pages/Journey/Journey"
import Store from "./pages/Store/Store"

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}
