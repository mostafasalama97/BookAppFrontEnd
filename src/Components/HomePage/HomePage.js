import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer';
import MainSection from './MainSection/MainSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Outlet />
      <Footer />
    </>
  );
}
