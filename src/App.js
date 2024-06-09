import logo from './logo.svg';
import './App.css';
import AddFisat from './components/AddFisat';
import SearchFisat from './components/SearchFisat';
import DeleteFisat from './components/DeleteFisat';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFisat/>}/>
      <Route path='/SearchFisat' element={<SearchFisat/>}/>
      <Route path='/DeleteFisat' element={<DeleteFisat/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
