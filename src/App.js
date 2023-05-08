import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './Components/FirstTask/Main/Main';

import { Description } from './Components/SecondTask/Description/Description';
import { Menu } from './Components/Navigation/Menu';




function App() {
  return (
    <Router>
      <div className="App">
       <Menu></Menu>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Advertisement" element={<Description/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
