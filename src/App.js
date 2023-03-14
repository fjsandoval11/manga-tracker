import Header from './Components/Header';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
