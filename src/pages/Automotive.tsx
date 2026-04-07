import { AppointmentScheduler } from '../components/AppointmentScheduler';
import { Truck, ShieldCheck, Hammer } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Automotive = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white min-h-screen">
      {/* Heavy Vehicles Banner */}
      <div className="bg-gunmetal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center parallax-bg mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4">{t('automotive.title')}</h1>
          <h2 className="text-xl md:text-2xl text-electric-blue font-bold uppercase tracking-widest mb-4">{t('automotive.subtitle')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl text-balance">
            Industrial-grade bodywork, structural chassis repair, and heavy-duty frame alignment for commercial trucks and specialized transport vehicles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7">
            
            {/* Core Service Definition */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-gunmetal uppercase mb-6 flex items-center">
                <Truck className="h-8 w-8 text-electric-blue mr-3" />
                {t('automotive.coreTitle')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Commercial fleets and heavy vehicles require maintenance that goes beyond standard automotive repair. At Accurate Automation, our Heavy Vehicles division is dedicated exclusively to structural bodywork, chassis integrity, and immense metal repair.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-electric-blue p-6 mb-8">
                <p className="text-gunmetal font-semibold">
                  <span className="font-bold text-electric-blue uppercase tracking-wider text-sm block mb-1">Our Core Focus:</span>
                  We do not service consumer cars or engines. We specialize purely in the structural fabrication and heavy body maintenance of industrial transport vehicles, ensuring your fleet meets strict commercial safety standards.
                </p>
              </div>

              <div className="space-y-8 mt-12">
                <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-8">
                  <div className="bg-gray-50 p-4 shrink-0 self-start">
                    <Hammer className="w-8 h-8 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-gunmetal mb-2">Chassis & Frame Alignment</h3>
                    <p className="text-gray-600 text-sm">Correcting structural deformations caused by immense cargo loads or collisions. We restore the foundational geometry of heavy transport chassis.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-8">
                  <div className="bg-gray-50 p-4 shrink-0 self-start">
                    <ShieldCheck className="w-8 h-8 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-gunmetal mb-2">Industrial Body Fabrication</h3>
                    <p className="text-gray-600 text-sm">Custom metalwork for specialized payload needs. From reinforced flatbeds to heavily corrugated transport containers.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sticky Sidebar - Appointment Form */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24">
              <AppointmentScheduler />
              
              <div className="mt-8 bg-gray-50 p-6 border border-gray-200">
                <h4 className="font-bold text-gunmetal uppercase mb-2 text-sm flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2 text-electric-blue" />
                  {t('automotive.professionalTitle')}
                </h4>
                <p className="text-xs text-gray-500">
                  Our heavy-duty bays are equipped to handle industrial-scale vehicles with precision engineered hoists and plasma fabrication tools.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
