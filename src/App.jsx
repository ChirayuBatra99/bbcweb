import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Stats from './sections/Stats/Stats';
import Programs from './sections/Programs/Programs';
import Team from './sections/Team/Team';
import Location from './sections/Location/Location';
import Contact from './sections/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Programs />
        <Team />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
