import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import User from './pages/User';

const App = () => {
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Signin />} />
          <Route path="/" element={<User />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default App;



