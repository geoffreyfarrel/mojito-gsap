'use client';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Cocktails from './components/cocktails';
import About from './components/about';
import Art from './components/art';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </div>
  );
}
