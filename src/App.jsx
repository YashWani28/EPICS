import './App.css'
import Form from './Components/Form/Form'
import Login from './Components/Login/Login'

import Navbar from './Components/Navbar/Navbar';
import Journal from './Screens/Journal/Journal';
import Dashboard from './Screens/Dashboard/Dashboard';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Dashboard/>} />
        <Route path="/myjournal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App
