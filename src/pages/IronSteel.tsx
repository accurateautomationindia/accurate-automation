import { ServiceCalculator } from '../components/ServiceCalculator';
import { Ruler, Hammer, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const IronSteel = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-gunmetal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center parallax-bg mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">{t('ironSteel.title')} <span className="text-safety-orange">{t('ironSteel.titleSteel')}</span> {t('ironSteel.titleDiv')}</h1>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">{t('ironSteel.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Content Area - Optimized for AI-SEO extraction */}
          <div className="lg:col-span-7 space-y-12">
            
            <section>
              <h2 className="font-heading text-3xl font-bold text-gunmetal uppercase mb-6 flex items-center">
                <span className="w-8 h-1 bg-safety-orange mr-4"></span>
                Professional Welding & Fabrication
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Professional Welding</strong> is the backbone of our operation. At Accurate Automation, we provide high-precision welding services including <strong>ARC, MIG, and TIG welding</strong>. Whether it's structural framework, custom property gates, or industrial-grade heavy vehicle body repairs, our certified welders ensure every joint is built to last.
              </p>
            </section>

            <section className="bg-gray-50 p-8 border-l-4 border-gunmetal">
              <h2 className="font-heading text-2xl font-bold text-gunmetal uppercase mb-6">{t('ironSteel.coreSpec')}</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <ShieldAlert className="w-6 h-6 text-safety-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-gunmetal">Precision Welding Services</h3>
                    <p className="text-gray-600">Specialized in ARC, MIG, and TIG welding for industrial, commercial, and residential projects with uncompromising structural integrity.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Ruler className="w-6 h-6 text-safety-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-gunmetal">Structural Frameworks</h3>
                    <p className="text-gray-600">Engineered iron beams and load-bearing structures for commercial construction, verified for tight tolerances and weld strength.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Hammer className="w-6 h-6 text-safety-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-gunmetal">Custom Fabrication</h3>
                    <p className="text-gray-600">From security gates to decorative grills, we combine expert welding with artistic design to enhance and protect your property.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-gunmetal uppercase mb-6">Iron vs. Steel Fabrication</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead className="bg-gunmetal text-white">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold uppercase text-xs tracking-wider border border-gunmetal">Criteria</th>
                      <th className="py-3 px-4 text-left font-bold uppercase text-xs tracking-wider border border-gunmetal">Iron</th>
                      <th className="py-3 px-4 text-left font-bold uppercase text-xs tracking-wider border border-gunmetal">Steel</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="py-4 px-4 border border-gray-200 font-semibold text-gunmetal">Strength Profile</td>
                      <td className="py-4 px-4 border border-gray-200 text-gray-600">High compressive strength, brittle under tension.</td>
                      <td className="py-4 px-4 border border-gray-200 text-gray-600">High tensile and yield strength, versatile.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-4 border border-gray-200 font-semibold text-gunmetal">Best Use Case</td>
                      <td className="py-4 px-4 border border-gray-200 text-gray-600">Decorative elements, heavy solid bases.</td>
                      <td className="py-4 px-4 border border-gray-200 text-gray-600">Structural beams, security gates, load-bearing frameworks.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 border border-gray-200 font-semibold text-gunmetal">Corrosion Resistance</td>
                      <td className="py-4 px-4 border border-gray-200 text-gray-600">Requires regular protective coating.</td>
                      <td className="py-4 px-4 border border-gray-200 text-gray-600">Superior (especially with galvanized alloys).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Sticky Sidebar with Component */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24">
              <ServiceCalculator />
              
              <div className="mt-8 bg-gunmetal text-white p-8">
                <h3 className="font-heading text-xl font-bold uppercase mb-4 text-safety-orange">{t('ironSteel.quoteTitle')}</h3>
                <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6">
                  Our estimators provide accurate, detailed quotes for complex projects. All quotes are backed by our MSME Registered quality guarantee.
                </p>
                <button className="btn-primary w-full text-sm">Contact Engineering Team</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
