import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Service from './Pages/Service';
import Error from './Pages/Error';
import Contactus from './Pages/Contactus';

function App() {
  return (
   <>
    <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route exact path="/contact" element={<Contactus />}> </Route>
        <Route exact path="/service" element={<Service />}> </Route>
        <Route exact path="/about" element={<Aboutus />}> </Route>
        <Route exact path="/error" element={<Error />}> </Route>
      </Routes>
   </>
  );
}

export default App;
