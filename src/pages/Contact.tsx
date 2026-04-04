import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const { addMessage } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    department: 'Iron & Steel',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage({
      email: formData.email,
      details: `Name: ${formData.name}\nPhone: ${formData.phone}\nCompany: ${formData.company || 'N/A'}\nDept: ${formData.department}\n\nMessage:\n${formData.details}`
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gunmetal py-24 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">{t('contact.title')}</h1>
        <p className="text-gray-400 font-semibold max-w-2xl mx-auto">{t('contact.subtitle')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-gunmetal uppercase mb-8">{t('contact.directLines')}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-safety-orange p-3 shrink-0 rounded-sm shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gunmetal uppercase mb-1">{t('contact.fabDesk')}</h3>
                  <p className="text-gray-600">+91 9605383887</p>
                  <p className="text-xs text-gray-400 mt-1">{t('contact.availability')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-electric-blue p-3 shrink-0 rounded-sm shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gunmetal uppercase mb-1">{t('contact.heavyDesk')}</h3>
                  <p className="text-gray-600">+91 9562826058</p>
                  <p className="text-xs text-gray-400 mt-1">{t('contact.availability')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gunmetal p-3 shrink-0 rounded-sm shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gunmetal uppercase mb-1">{t('contact.emailDesk')}</h3>
                  <p className="text-gray-600 font-semibold break-all">accurateautomationindia@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gunmetal p-3 shrink-0 rounded-sm shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gunmetal uppercase mb-1">{t('contact.hq')}</h3>
                  <p className="text-gray-600 text-sm">P.K. Nagar, Iqbal Hills, Peringammala<br />Thiruvananthapuram, Kerala, India <br />695563</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-200 w-full h-64 flex items-center justify-center border-4 border-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale opacity-50"></div>
              <div className="relative z-10 bg-gunmetal text-white px-6 py-2 uppercase font-bold text-sm tracking-widest shadow-2xl">
                {t('contact.mapPin')}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-10 border-t-4 border-safety-orange shadow-2xl">
            {submitted ? (
              <div className="text-center py-20">
                <h3 className="font-heading text-2xl font-bold text-gunmetal uppercase mb-4">{t('contact.successTitle')}</h3>
                <p className="text-gray-600">{t('contact.successDesc')}</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-safety-orange font-bold uppercase underline">{t('contact.submitAnother')}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('contact.inquiryType')}</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border border-gray-300 bg-white cursor-pointer hover:border-safety-orange transition-colors">
                      <input 
                        type="radio" 
                        name="department" 
                        value="Iron & Steel"
                        checked={formData.department === 'Iron & Steel'}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="form-radio text-safety-orange mr-3" required />
                      <span className="font-semibold text-sm">Iron & Steel</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 bg-white cursor-pointer hover:border-electric-blue transition-colors">
                      <input 
                        type="radio" 
                        name="department" 
                        value="Heavy Vehicles"
                        checked={formData.department === 'Heavy Vehicles'}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="form-radio text-electric-blue mr-3" required />
                      <span className="font-semibold text-sm">Heavy Vehicles</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('contact.fullName')}</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={e=>setFormData({...formData, name: e.target.value})}
                      className="w-full border-2 border-gray-200 p-3 bg-white focus:border-gunmetal focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('contact.company')}</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={e=>setFormData({...formData, company: e.target.value})}
                      className="w-full border-2 border-gray-200 p-3 bg-white focus:border-gunmetal focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('contact.emailLabel')}</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={e=>setFormData({...formData, email: e.target.value})}
                      className="w-full border-2 border-gray-200 p-3 bg-white focus:border-gunmetal focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('contact.phone')}</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={e=>setFormData({...formData, phone: e.target.value})}
                      className="w-full border-2 border-gray-200 p-3 bg-white focus:border-gunmetal focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('contact.projectDetails')}</label>
                  <textarea 
                    required 
                    rows={5} 
                    value={formData.details}
                    onChange={e=>setFormData({...formData, details: e.target.value})}
                    className="w-full border-2 border-gray-200 p-3 bg-white focus:border-gunmetal focus:outline-none transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center">
                  {t('contact.transmitBtn')} <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
