import React from 'react';
import Header from '../../components/Header';
import SectionHero from './SectionHero/intex';
import SectionAbout from './SectionAbout';
import SectionAdvantages from './SectionAdvantages';
import SectionCars from './SectionCars';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionAdvantages />
      <SectionCars />
      <Footer />
    </>
  );
};

export default Home;
