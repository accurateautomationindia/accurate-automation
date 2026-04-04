import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Calculator, IndianRupee } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ServiceCalculator = () => {
  const { pricing } = useAdmin();
  const { t } = useTranslation();
  const [material, setMaterial] = useState('Iron');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (isNaN(l) || isNaN(w)) return;

    let baseRate = 0;
    if (material === 'Iron') baseRate = pricing.iron;
    if (material === 'Steel') baseRate = pricing.steel;
    if (material === 'Custom Alloy') baseRate = pricing.customAlloy;

    const area = l * w;
    const cost = area * baseRate;
    setEstimatedCost(cost);
  };

  return (
    <div className="bg-white p-8 border-t-4 border-safety-orange shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-5 text-gunmetal pointer-events-none">
        <Calculator className="w-48 h-48" />
      </div>

      <div className="relative z-10">
        <h3 className="font-heading text-2xl font-bold text-gunmetal mb-2 uppercase flex items-center">
          <Calculator className="h-6 w-6 mr-3 text-safety-orange" />
          {t('estimator.title')}
        </h3>
        <p className="text-sm font-semibold text-gray-500 mb-8">{t('estimator.subtitle')}</p>

        <form onSubmit={calculateCost} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('estimator.length')}</label>
              <input
                type="number"
                min="0.1"
                step="0.1"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 text-gunmetal p-3 rounded-none focus:border-safety-orange focus:ring-0 outline-none font-semibold transition-colors"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="e.g. 5.5"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('estimator.width')}</label>
              <input
                type="number"
                min="0.1"
                step="0.1"
                required
                className="w-full bg-gray-50 border-2 border-gray-200 text-gunmetal p-3 rounded-none focus:border-safety-orange focus:ring-0 outline-none font-semibold transition-colors"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="e.g. 2.0"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gunmetal uppercase tracking-wider mb-2">{t('estimator.material')}</label>
            <div className="grid grid-cols-3 gap-3">
              {['Iron', 'Steel', 'Custom Alloy'].map((mat) => (
                <button
                  type="button"
                  key={mat}
                  onClick={() => setMaterial(mat)}
                  className={`py-3 px-2 border-2 font-bold text-xs uppercase tracking-wider transition-colors ${
                    material === mat
                      ? 'bg-gunmetal border-gunmetal text-safety-orange'
                      : 'bg-white border-gray-200 text-gray-500 hover:border-gunmetal'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-4 mt-4">
            {t('estimator.calcBtn')}
          </button>
        </form>

        {estimatedCost !== null && (
          <div className="mt-8 p-6 bg-gunmetal text-white border-l-4 border-safety-orange animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{t('estimator.baseCost')}</h4>
            <p className="font-heading text-4xl font-bold text-safety-orange flex items-center">
              <IndianRupee className="w-8 h-8 mr-1" />
              {estimatedCost.toLocaleString('en-IN')}
            </p>
            <p className="text-xs mt-2 text-gray-300 font-medium">
              {t('estimator.note')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
