import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import View from './Components/View';
import Search from './Components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './Components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/View' element={<View/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
