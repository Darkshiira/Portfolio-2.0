
import './App.css';

import Nav from './Components/Nav'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}


    </div>
  );
}

export default App;
