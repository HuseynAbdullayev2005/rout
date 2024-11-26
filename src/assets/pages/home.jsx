import { useEffect, useState } from 'react';

import Card from '../components/cards/card';
import Navbar from '../components/navbar/navbar';
import Swipper from '../components/swipper/swipper';
function Home() {
  return (
    <>
      <Navbar />
      <Swipper />
      <Card />


    </>
  );
}

export default Home;