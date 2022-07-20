/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from 'components/organism/Footer';
import Navbar from 'components/organism/Navbar';
import Event from 'components/organism/Event';
import Header from 'components/organism/EventHeader';
import EventTitle from 'components/organism/EventTitle';

export default function workshop() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Header title="SQUIRTLE" />
      <EventTitle
        line1="STARTER POKEMON"
        line2="WATER TYPE"
      />
      <Event
        title="BLABLABLA"
        subtitle="WATER"
        description='QWERTYUIOP ASDFG HJKL ZXC VBNM'
        buttonText="GO TO SITE"
        buttonDestination="https://id.portal-pokemon.com/play/pokedex/007"
        illustrationPath="/image/squirtle.png"
        anchorTarget="_blank"
      />
      <Footer />
    </>
  );
}

"/image/charmander.png"