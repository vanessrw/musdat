import type {NextPage} from 'next';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from 'components/organism/Navbar';
import Footer from 'components/organism/Footer';
import Hero from 'components/organism/Hero';
import About from 'components/organism/About';
import Event from 'components/organism/Event';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const charDescription =
    'blablabla';
  const squirDescription =
    'blablabla';
  const bulbaDescription =
    'blablabla';

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Event
        left
        title="CHARMANDER"
        subtitle="fire"
        description={charDescription}
        buttonText="VIEW"
        buttonDestination="/char"
        illustrationPath="/image/charmander.png"
      />
      <Event
        right
        title="SQUIRTLE"
        subtitle="water"
        description={squirDescription}
        buttonText="VIEW"
        buttonDestination="/squir"
        illustrationPath="/image/squirtle.png"
      />
      <Event
        left
        title="BULBASAUR"
        subtitle="grass"
        description={bulbaDescription}
        buttonText="VIEW"
        buttonDestination="/bulba"
        illustrationPath="/image/bulbasaur.png"
      />
      <Footer />
    </div>
  );
};

export default Home;
