import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Temp from './pages/Temp/Temp';
import About from './routers/About/About';
import Home from './routers/Home/Home';
import Layout from './routers/Layout';
import Projects from './routers/Projects/Projects';

function App() {
  return (
    <>
      <Temp />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<Home />}></Route>
    //       <Route path="about" element={<About />}></Route>
    //       <Route path="projects" element={<Projects />}></Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
