import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import EnhancedTestimonials from './components/EnhancedTestimonials.jsx';
import Footer from './components/Footer.jsx';
import StyleGuide from './components/StyleGuide.jsx';

function useRoute() {
  const getPath = () => (typeof window !== 'undefined' ? window.location.pathname : '/');
  const [path, setPath] = React.useState(getPath());

  React.useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return [path, setPath];
}

export default function App() {
  const [path] = useRoute();
  const isStyleGuide = path === '/style-guide';

  return (
    <div className="min-h-screen bg-white text-[#0F101D] scroll-smooth">
      <Navbar />
      {isStyleGuide ? (
        <main className="pt-24">
          <StyleGuide />
        </main>
      ) : (
        <main>
          <Hero />
          <Services />
          <EnhancedTestimonials />
        </main>
      )}
      <Footer />
    </div>
  );
}
