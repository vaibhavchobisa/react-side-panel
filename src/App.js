import './App.css';

import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './components/home/home.component';
import Interview from './components/interview/interview.component';
import SidePanel from './components/side_panel/side-panel.component';

const App = () => {

const [isActive1, setIsActive1] = useState(false);
const [isActive2, setIsActive2] = useState(false);

const toggleClass1 = (event) => {
if (!isActive1 && !isActive2) {
  setIsActive1(true);
}
else if (!isActive1 && isActive2) {
  setIsActive1(true);
  setIsActive2(false);
}
}

const toggleClass2 = (event) => {
if (!isActive1 && !isActive2) {
  setIsActive2(true);
}
else if (isActive1 && !isActive2) {
  setIsActive2(true);
  setIsActive1(false);
}
}

return (
<Routes>
  <Route path="/" element=
  {
  < SidePanel 
  toggleClass1={toggleClass1}
  toggleClass2={toggleClass2}
  isActive1={isActive1}
  isActive2={isActive2}
  />
  }
  >
    <Route path='/home' element={< Home  />} />
    <Route path='/interview' element={< Interview />} />
  </Route>
</Routes>
);
}

export default App;
