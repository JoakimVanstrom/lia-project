import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneInfo from "./views/Index";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PhoneInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
