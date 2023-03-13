import logo from './logo.svg';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
