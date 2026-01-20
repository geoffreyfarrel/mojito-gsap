'use client';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './components/navbar';
import Hero from './components/hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </div>
  );
}
