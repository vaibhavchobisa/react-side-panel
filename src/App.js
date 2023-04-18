import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/Home/home.component';
import Interview from './components/interview/interview.component';
import SidePanel from './components/side_panel/side-panel.component';

const App = () => {
    return (
    <Routes>
      <Route path="/" element={< SidePanel />}>
        <Route index element={< Home />} />
        <Route path="/interview" element={< Interview />} />
      </Route>
    </Routes>
  );
}

export default App;
