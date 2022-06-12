import './App.scss';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Update from './components/pages/Update';
import Add from './components/pages/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/update-user" element={<Update />}></Route>
        <Route path="/add-user" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
