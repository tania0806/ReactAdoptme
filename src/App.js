import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="">

        <Router>
          <NavBar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
