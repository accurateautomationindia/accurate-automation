import { Award, ShieldCheck, Factory } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-gunmetal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1565439390214-c146e4313f8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center parallax-bg mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">{t('about.title')} <span className="text-safety-orange">{t('about.titleAccurate')}</span> {t('about.titleAuto')}</h1>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gunmetal uppercase mb-6 flex items-center">
              {t('about.legacyTitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded on the principles of immense structural integrity and unparalleled machine performance, Accurate Automation operates as a dual-specialty firm. We bridge the gap between <strong>professional welding services</strong>, heavy iron & steel fabrication, and advanced automotive diagnostics.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every certified weld we lay and every ECU we tune is backed by decades of combined experience. We don't just build, we over-engineer.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-safety-orange transform rotate-3 rounded-sm"></div>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Accurate Automation workshop in Kerala specializing in iron and steel works and heavy vehicle maintenance" className="relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-sm object-cover h-96 w-full grayscale hover:grayscale-0" />
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-gray-50 p-12 border-t-4 border-gunmetal shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 opacity-5">
            <Award className="w-64 h-64 text-gunmetal" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-gunmetal uppercase mb-12 text-center">{t('about.certifiedTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-white p-6 border border-gray-200 text-center shadow-sm">
              <ShieldCheck className="w-12 h-12 text-electric-blue mx-auto mb-4" />
              <h3 className="font-bold text-gunmetal uppercase mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">Every project undergoes a rigorous multi-point inspection. We hold our structural seams and engine tunes to the identical standard.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center shadow-sm">
              <Factory className="w-12 h-12 text-gunmetal mx-auto mb-4" />
              <h3 className="font-bold text-gunmetal uppercase mb-2">Integrated Facility</h3>
              <p className="text-sm text-gray-600">A singular operational base housing both heavy metal fabrication bays and sanitized automotive diagnostic centers.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
