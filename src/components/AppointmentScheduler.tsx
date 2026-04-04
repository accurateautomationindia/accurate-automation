import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { CalendarClock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AppointmentScheduler = () => {
  const { t } = useTranslation();
  const { addAppointment } = useAdmin();
  const [formData, setFormData] = useState({
    vehicle: '',
    email: '',
    serviceType: 'heavy-body',
    date: '',
    time: 'morning'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAppointment({
      vehicle: formData.vehicle,
      email: formData.email,
      service: formData.serviceType,
      preferredDate: formData.date,
      preferredTime: formData.time
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gunmetal-light p-8 border-t-4 border-electric-blue shadow-2xl text-white text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle className="w-16 h-16 text-electric-blue mb-4 animate-bounce" />
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wider mb-2">{t('appointments.successTitle')}</h3>
        <p className="text-gray-300 font-medium">{t('appointments.successDesc')}</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-bold uppercase tracking-wider text-electric-blue hover:text-white transition-colors underline underline-offset-4"
        >
          {t('appointments.bookAnother')}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gunmetal p-8 border-t-4 border-electric-blue shadow-2xl relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none">
        <CalendarClock className="w-48 h-48" />
      </div>

      <div className="relative z-10">
        <h3 className="font-heading text-2xl font-bold text-white mb-2 uppercase flex items-center">
          <CalendarClock className="h-6 w-6 mr-3 text-electric-blue" />
          {t('appointments.title')}
        </h3>
        <p className="text-sm font-semibold text-gray-400 mb-8">{t('appointments.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t('appointments.vehicleLabel')}</label>
            <input
              type="text"
              required
              value={formData.vehicle}
              onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
              className="w-full bg-gunmetal-light border-2 border-gray-600 text-white p-3 rounded-none focus:border-electric-blue focus:ring-0 outline-none font-semibold transition-colors placeholder-gray-500"
              placeholder="e.g. 2023 Ford F-150"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t('appointments.emailLabel')}</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gunmetal-light border-2 border-gray-600 text-white p-3 rounded-none focus:border-electric-blue focus:ring-0 outline-none font-semibold transition-colors placeholder-gray-500"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t('appointments.serviceLabel')}</label>
            <select 
              value={formData.serviceType}
              onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
              className="w-full bg-gunmetal-light border-2 border-gray-600 text-white p-3 rounded-none focus:border-electric-blue focus:ring-0 outline-none font-semibold transition-colors cursor-pointer appearance-none"
            >
              <option value="heavy-body">{t('appointments.heavyBody')}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t('appointments.dateLabel')}</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-gunmetal-light border-2 border-gray-600 text-white p-3 rounded-none focus:border-electric-blue focus:ring-0 outline-none font-semibold transition-colors color-scheme-dark"
                style={{ colorScheme: 'dark' }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">{t('appointments.timeLabel')}</label>
              <select 
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full bg-gunmetal-light border-2 border-gray-600 text-white p-3 rounded-none focus:border-electric-blue focus:ring-0 outline-none font-semibold transition-colors cursor-pointer appearance-none"
              >
                <option value="morning">{t('appointments.timeMorning')}</option>
                <option value="afternoon">{t('appointments.timeAfternoon')}</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full btn-touch bg-electric-blue text-white hover:bg-blue-600 uppercase tracking-wide py-4 mt-4 font-bold">
            {t('appointments.submitBtn')}
          </button>
        </form>
      </div>
    </div>
  );
};
