import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Cabecera';
import Inicio from './components/home/Inicio';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
