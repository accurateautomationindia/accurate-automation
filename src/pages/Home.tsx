import { HeroSplit } from '../components/HeroSplit';
import { ServiceCalculator } from '../components/ServiceCalculator';
import { AppointmentScheduler } from '../components/AppointmentScheduler';
import { ArrowRight, Target, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSplit />

      {/* Feature Highlighting AI-SEO Extracted Blocks */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-gunmetal mb-6">{t('home.whyTitle')}</h2>
            <p className="text-lg text-gray-600 font-medium">{t('home.whyDesc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gunmetal flex items-center justify-center rounded-sm mb-6 transform rotate-3">
                <Shield className="w-8 h-8 text-safety-orange" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3 text-gunmetal">{t('home.feat1Title')}</h3>
              <p className="text-gray-600">{t('home.feat1Desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-safety-orange flex items-center justify-center rounded-sm mb-6 transform -rotate-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3 text-gunmetal">{t('home.feat2Title')}</h3>
              <p className="text-gray-600">{t('home.feat2Desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-electric-blue flex items-center justify-center rounded-sm mb-6 transform rotate-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3 text-gunmetal">{t('home.feat3Title')}</h3>
              <p className="text-gray-600">{t('home.feat3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gunmetal mb-4 uppercase text-center">{t('home.estimationTitle')}</h2>
            <p className="text-center text-gray-500 font-semibold max-w-2xl mx-auto">{t('home.estimationDesc')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ServiceCalculator />
              <div className="mt-6 text-center">
                <Link to="/iron-steel" className="text-safety-orange font-bold uppercase tracking-wider text-sm hover:text-gunmetal transition-colors inline-flex items-center">
                  {t('home.fabLink')} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <AppointmentScheduler />
              <div className="mt-6 text-center">
                <Link to="/automotive" className="text-electric-blue font-bold uppercase tracking-wider text-sm hover:text-white transition-colors inline-flex items-center">
                  {t('home.autoLink')} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
