import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroSplit = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] w-full bg-gunmetal relative overflow-hidden">
      
      {/* Central Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex flex-col items-center justify-center">
        <div className="bg-white text-gunmetal font-heading font-black uppercase tracking-widest px-8 py-3 rounded-sm shadow-2xl transform shadow-black/50 border-y-4 border-safety-orange">
          {t('hero.badge')}
        </div>
      </div>

      {/* Mobile Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none md:hidden flex flex-col items-center justify-center w-max">
        <div className="bg-white/90 backdrop-blur text-gunmetal font-heading font-black uppercase text-xs tracking-widest px-6 py-2 rounded-sm shadow-xl border-b-2 border-safety-orange">
          {t('hero.badge')}
        </div>
      </div>

      {/* Iron & Steel Side */}
      <div className="group relative flex-1 hover:flex-[1.2] md:hover:flex-[1.5] transition-all duration-700 ease-out flex flex-col justify-center items-center p-8 border-b-4 md:border-b-0 md:border-r-4 border-gunmetal overflow-hidden cursor-crosshair">
        <div className="absolute inset-0 bg-gunmetal-light"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-multiply group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-gunmetal via-transparent to-transparent opacity-80"></div>

        <div className="relative z-20 text-center flex flex-col items-center max-w-md mx-auto w-full pt-8 md:pt-0">
          <Wrench className="w-12 h-12 md:w-16 md:h-16 text-safety-orange mb-6 transform group-hover:-rotate-12 transition-transform duration-500 drop-shadow-lg" />
          
          <h1 className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2 drop-shadow-md">
            {t('hero.ironTitle')}
          </h1>
          <h3 className="font-heading text-lg md:text-xl font-bold text-safety-orange uppercase tracking-widest mb-6 drop-shadow-md">
            {t('hero.ironSubtitle')}
          </h3>
          
          <p className="text-gray-200 font-semibold mb-8 text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform md:translate-y-4 md:group-hover:translate-y-0 text-balance">
            {t('hero.ironDesc')}
          </p>
          
          <Link to="/iron-steel" className="btn-primary flex items-center group-hover:scale-105 transition-transform shadow-xl shadow-safety-orange/20 w-max">
            {t('hero.ironCta')} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Automotive Side */}
      <div className="group relative flex-1 hover:flex-[1.2] md:hover:flex-[1.5] transition-all duration-700 ease-out flex flex-col justify-center items-center p-8 overflow-hidden cursor-crosshair">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-luminosity group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90"></div>

        <div className="relative z-20 text-center flex flex-col items-center max-w-md mx-auto w-full">
          <Settings className="w-12 h-12 md:w-16 md:h-16 text-electric-blue mb-6 transform group-hover:rotate-180 transition-transform duration-700 drop-shadow-lg" />
          
          <h1 className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2 drop-shadow-md">
            {t('hero.autoTitle')}
          </h1>
          <h3 className="font-heading text-lg md:text-xl font-bold text-electric-blue uppercase tracking-widest mb-6 drop-shadow-md">
            {t('hero.autoSubtitle')}
          </h3>
          
          <p className="text-gray-200 font-semibold mb-8 text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform md:translate-y-4 md:group-hover:translate-y-0 text-balance">
            {t('hero.autoDesc')}
          </p>
          
          <Link to="/automotive" className="btn-touch bg-electric-blue text-white hover:bg-blue-600 uppercase tracking-wide flex items-center group-hover:scale-105 transition-transform shadow-xl shadow-electric-blue/20 w-max font-semibold">
            {t('hero.autoCta')} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

    </div>
  );
};
