import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Greeting from './components/Greetings';

const App = () => (
  <Router>
    <Routes>
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
