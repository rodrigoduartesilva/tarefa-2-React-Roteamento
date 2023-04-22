import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Contato from './pages/Contato';
import Login from './pages/Login';
import ServiceList from './components/ServiceList';
import CatShowerServiceItemInformation from './components/CatShowerServiceItemInformation';
import CatVetServiceItemInformation from './components/CatVetServiceItemInformation';
import CatGroomingServiceItemInformation from './components/CatGroomingServiceItemInformation';
import DogShowerServiceItemInformation from './components/DogShowerServiceItemInformation';
import DogGroomingServiceItemInformation from './components/DogGroomingServiceItemInformation';
import DogVetServiceItemInformation from './components/DogVetServiceItemInformation';
import Cadastro from './pages/Cadastro';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/servicelist' element={<ServiceList />} />
        <Route path='/gatomenu/:id' element={<CatShowerServiceItemInformation />} />
        <Route path='/gatomenu/:id' element={<CatVetServiceItemInformation />} />
        <Route path='/gatomenu/:id' element={<CatGroomingServiceItemInformation />} />
        <Route path='/dogmenu/:id' element={<DogShowerServiceItemInformation />} />
        <Route path='/dogmenu/:id' element={<DogGroomingServiceItemInformation />} />
        <Route path='/dogmenu/:id' element={<DogVetServiceItemInformation />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
