import { useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './assets/pages/home';
import Mainlayout from './assets/pages/mainlayout';
import Contact from './assets/pages/contact';
import Adminpanel from './assets/pages/adminpanel';


function App() {
  const [products, setProducts] = useState([])







  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path='/' index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/adminpanel' element={<Adminpanel />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
