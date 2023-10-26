import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import SignIn from './components/SignIn';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
        <Route
          path="/"
          element={<SignIn />}
        />
        <Route
          path="/Home"
          element={<Home />}
        />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
