import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Assistant from './components/Assistant';
import FadeIn from './components/FadeIn';
import { HERO_CONTENT, LATEST_NEWS, VEHICLES } from './constants';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

const App: React.FC = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollPosition = window.scrollY;
        // Move image down at 40% of scroll speed to create parallax depth
        // We maintain the scale(1.1) to prevent edges from showing during overscroll or movement
        heroImageRef.current.style.transform = `translate3d(0, ${scrollPosition * 0.4}px, 0) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-red-600 selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Background - Simulating Video/High-Res Image */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
           <img 
            ref={heroImageRef}
            src={HERO_CONTENT.image} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80 will-change-transform"
            style={{ transform: 'scale(1.1)' }} // Initial state
           />
           {/* Lighter overlay to let the forest greens show through, with a gradient for text legibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <FadeIn>
            <h2 className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 border-l-4 border-red-600 pl-4">
              Huijsmans Service Center
            </h2>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 max-w-4xl">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 font-medium leading-relaxed drop-shadow-md">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
                {HERO_CONTENT.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/40 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-current" />
                Watch The Film
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats / Quick Info Strip */}
      <div className="bg-black text-white py-12 border-b border-gray-800">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Operational Range', value: '500 km' },
            { label: 'Response Time', value: '< 3s' },
            { label: 'Markets', value: '140+' },
            { label: 'Founded', value: '1916' }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex flex-col border-l border-gray-700 pl-6 hover:border-red-600 transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Featured Vehicles (Carousel Style Layout) */}
      <section id="innovation" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="mb-16 flex justify-between items-end">
             <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">The Fleet.</h3>
                <p className="text-gray-500 max-w-md">Engineering masterpieces designed for duty and performance.</p>
             </div>
             <a href="#" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
               View All Models <ChevronRight className="w-4 h-4 ml-1" />
             </a>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {VEHICLES.map((vehicle, i) => (
              <FadeIn key={vehicle.id} delay={i * 200} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[16/10] bg-gray-200 shadow-xl">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className="block text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Service Spec</span>
                    <h4 className="text-white text-3xl font-bold mb-1">{vehicle.name}</h4>
                    <p className="text-gray-300 text-sm mb-6">{vehicle.tagline}</p>
                    
                    <div className="grid grid-cols-3 border-t border-white/20 pt-4 gap-4">
                      <div>
                        <span className="block text-white font-semibold">{vehicle.specs.range}</span>
                        <span className="block text-gray-400 text-[10px] uppercase">Range</span>
                      </div>
                      <div>
                        <span className="block text-white font-semibold">{vehicle.specs.acceleration}</span>
                        <span className="block text-gray-400 text-[10px] uppercase">0-100 km/h</span>
                      </div>
                      <div>
                        <span className="block text-white font-semibold">{vehicle.specs.power}</span>
                        <span className="block text-gray-400 text-[10px] uppercase">Power</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Split Section */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="h-[60vh] lg:h-auto relative overflow-hidden">
             <img 
              src="https://www.bmw-hsc.com/media/HP/2018/HP_teaser_over_ons_v2.jpg" 
              alt="Sustainability" 
              className="w-full h-full object-cover"
             />
           </div>
           <div className="flex items-center p-12 lg:p-24 bg-black text-white">
             <FadeIn>
               <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-6 block">Sustainability</span>
               <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Over ons</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                 HSC Nieuw-Vennep is gespecialiseerd in ontwikkeling en productie van motorfietsen voor speciale taken. Zonder compromissen. Veiligheid van de rijder, betrouwbaarheid en bedieningsgemak van de machine en alle apparatuur staan daarbij voorop.
               </p>
               <button className="text-white border-b border-white pb-1 text-sm font-bold uppercase tracking-widest hover:text-red-500 hover:border-red-500 transition-colors">
                 Read Our Strategy
               </button>
             </FadeIn>
           </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 px-6 md:px-12 bg-white container mx-auto">
        <FadeIn className="mb-16 border-b border-gray-100 pb-8">
          <h3 className="text-4xl font-bold tracking-tight mb-2">Corporate News.</h3>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {LATEST_NEWS.map((news, i) => (
            <FadeIn key={news.id} delay={i * 150} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100 relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {news.category}
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                <span>{news.date}</span>
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                <span>3 min read</span>
              </div>
              <h4 className="text-xl font-bold mb-3 leading-snug group-hover:text-red-700 transition-colors">
                {news.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                {news.description}
              </p>
              <span className="text-xs font-bold uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Read More <ArrowRight className="w-3 h-3 ml-2" />
              </span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <h5 className="text-2xl font-bold uppercase tracking-tighter mb-8">HSC</h5>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-current" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-span-1">
              <h6 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Quick Links</h6>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h6 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Brands</h6>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Van Hal Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">W&G</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CTS</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
               <h6 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Stay Informed</h6>
               <p className="text-gray-400 text-sm mb-4">Receive the latest press releases and financial reports.</p>
               <div className="flex border-b border-gray-700 pb-2">
                 <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent w-full outline-none text-sm placeholder-gray-600 focus:placeholder-gray-400"
                 />
                 <button className="text-xs font-bold uppercase hover:text-red-500">Subscribe</button>
               </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2025 HSC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Legal Notice</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <Assistant />
    </div>
  );
};

export default App;