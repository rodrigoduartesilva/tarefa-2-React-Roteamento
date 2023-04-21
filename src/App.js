import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Contato from './pages/Contato';
import Login from './pages/Login';
import ServiceList from './components/ServiceList';
import CatShowerServiceItemInformation from './components/CatShowerServiceItemInformation';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/servicelist' element={<ServiceList />} />
        <Route path='/gatomenu/:id' element={<CatShowerServiceItemInformation />} />
      </Routes>
    </>
  );
}

export default App;
