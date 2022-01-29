import './App.css';
import LoginView from './components/views/login/LoginView';
import { Routes, Route } from "react-router-dom";
import Home from './components/views/home/Home';
import Others from './components/views/others/Others';

function App() {
  return (
    <div className="App container">
        <Routes>
            <Route path="/" element={<LoginView />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/others" element={<Others />}/>
        </Routes>
    </div>
  );
}

export default App;
