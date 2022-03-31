import React from 'react';
import Announcement from '../components/Announcement';
import CategoryItems from '../components/CategoryItems';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoryItems />
    </div>
  );
};

export default Home;
