import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/home/home.component';
import Interview from './components/interview/interview.component';
import SidePanel from './components/side_panel/side-panel.component';

import { useState } from 'react';

const App = () => {

  const [path, setPath] = useState('');

return (
<Routes>
  <Route path="/" element={< SidePanel path={path} />}>
    <Route path="/home" element={< Home setPath={setPath} />} />
    <Route path="/interview" element={< Interview setPath={setPath} />} />
  </Route>
</Routes>
);
}

export default App;
