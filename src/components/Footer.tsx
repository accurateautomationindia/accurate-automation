import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gunmetal-light text-gray-300 border-t-4 border-safety-orange pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-700 pb-12 mb-8">
          
          {/* Brand & Trust */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Accurate Automation Logo" className="h-10 w-auto object-contain" />
              <h3 className="font-heading text-xl text-white font-bold tracking-wider">ACCURATE <span className="text-safety-orange">AUTOMATION</span></h3>
            </div>
            <p className="mb-6 font-semibold">{t('footer.tagline')}</p>
            <div className="bg-gunmetal p-4 rounded-sm border-l-4 border-electric-blue flex items-center space-x-3">
              <ShieldCheck className="text-electric-blue h-8 w-8 shrink-0" />
              <div>
                <p className="font-bold text-white uppercase text-sm">MSME Registered</p>
                <p className="text-xs text-gray-400">Quality Guaranteed & Certified</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4 uppercase tracking-wider relative after:content-[''] after:block after:w-12 after:h-1 after:bg-safety-orange after:mt-2">Divisions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/iron-steel" className="hover:text-safety-orange flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" /> Iron & Steel Fabrication
                </Link>
              </li>
              <li>
                <Link to="/automotive" className="hover:text-safety-orange flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" /> Heavy Vehicles
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-safety-orange flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-2" /> Project Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4 uppercase tracking-wider relative after:content-[''] after:block after:w-12 after:h-1 after:bg-safety-orange after:mt-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-safety-orange mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-400 font-semibold max-w-[250px]">P.K. Nagar, Iqbal Hills, Peringammala, Thiruvananthapuram, Kerala, India, 695563</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-safety-orange mr-3 shrink-0" />
                <span className="text-gray-400 font-semibold">+91 9605383887<br/>+91 9562826058</span>
              </li>
              <li className="flex items-center mt-2">
                <Mail className="h-5 w-5 text-safety-orange mr-3 shrink-0" />
                <span className="text-gray-400 font-semibold break-all text-sm">accurateautomationindia@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4 uppercase tracking-wider relative after:content-[''] after:block after:w-12 after:h-1 after:bg-safety-orange after:mt-2">Operating Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-safety-orange mr-3 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Sun - Sat</p>
                  <p className="text-sm">08:00 AM - 06:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-semibold tracking-wide border-t border-gray-800 pt-8 mt-8">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-400">Developed by <a href="https://www.jrina.online" target="_blank" rel="noopener noreferrer" className="text-safety-orange font-bold hover:underline">JRINA</a></p>
            <div className="flex space-x-4">
              <span className="text-gray-500 hover:text-white cursor-pointer transition-colors text-xs uppercase tracking-tighter">Privacy Policy</span>
              <span className="text-gray-500 hover:text-white cursor-pointer transition-colors text-xs uppercase tracking-tighter">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
