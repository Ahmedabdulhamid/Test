import React from 'react'

import { Bunner } from './components/Bunner';
import Header from './components/Header';
import { Section_one } from './components/Section_one';
import Section_two from './components/Section_two';
import Section_three from './components/Section_three';
import Section_Four from './components/Section_Four';
import Section_Five from './components/Section_Five';
import Section_Six from './components/Section_Six';
import Payment from './components/Payment';
import Footer from './components/Footer';
export const App = () => {
  return (
    <div >
    
    <Bunner/>
    <Header/>
    <Section_one/>
    <Section_two/>
    <Section_three/>
    
    <Section_Four />
    <Section_Five/>
    <Section_Six/>
    <Payment/>
    <Footer/>
    </div>
  )
}

