import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
// 2-video 14-daqiqadan ko'r
// check greenshop2024
