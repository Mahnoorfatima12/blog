import './App.css';

import { Routes, Route } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <div className="App">

      <Routes>
<Route path="" element={<work/>}/>
<Route path="/services" element={<services/>}/>
<Route path="/about" element={<about/>}/>           
</Routes>
<Router/>
    </div>
  );
}

export default App;