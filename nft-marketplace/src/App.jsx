
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
