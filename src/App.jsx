import React from 'react';
import Inicio from './components/pages/Inicio';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Login from './components/pages/Login';
import Administrador from './components/pages/Administrador';
import FormularioReceta from './components/pages/Recetas/FormularioReceta';
import "bootstrap-icons/font/bootstrap-icons.css";
import CardRecetasCompletas from './components/pages/Recetas/CardRecetasCompletas';
import Error404 from './components/pages/Error404'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/login' element={<Login></Login>}> </Route>
      <Route exact path='/recetaCompleta' element={<CardRecetasCompletas></CardRecetasCompletas>}> </Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='/administrador/crear' element={<FormularioReceta titulo='Nueva receta' creandoReceta={true}></FormularioReceta>}></Route>
      <Route exact path='/administrador/editar/:id' element={<FormularioReceta titulo='Editar Receta' creandoReceta={false}></FormularioReceta>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
};

export default App;