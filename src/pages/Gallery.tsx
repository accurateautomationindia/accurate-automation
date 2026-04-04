import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import clsx from 'clsx';
import { Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Gallery = () => {
  const { projects } = useAdmin();
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'All' | 'Iron&Steel' | 'Heavy Vehicles'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-gunmetal py-20 text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">{t('gallery.title')}</h1>
        <p className="text-gray-400 font-semibold">{t('gallery.subtitle')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-y-4">
          {['All', 'Iron&Steel', 'Heavy Vehicles'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f as any)}
              className={clsx(
                'px-6 py-2 font-bold uppercase tracking-wider text-sm border-2 transition-colors',
                filter === f 
                  ? f === 'Heavy Vehicles' ? 'bg-electric-blue border-electric-blue text-white' : 'bg-safety-orange border-safety-orange text-white'
                  : 'bg-transparent border-gray-300 text-gray-500 hover:border-gunmetal hover:text-gunmetal'
              )}
            >
              {f === 'All' ? t('gallery.all') : f === 'Iron&Steel' ? t('gallery.iron') : t('gallery.heavy')}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden bg-white shadow-lg cursor-pointer aspect-square">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gunmetal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <Eye className="w-10 h-10 text-white mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100" />
                <h3 className="text-white font-heading font-bold text-xl uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  {project.title}
                </h3>
                <span className={clsx(
                  "text-xs font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200",
                  project.category === 'Heavy Vehicles' ? 'text-electric-blue' : 'text-safety-orange'
                )}>
                  {project.category.replace('&', ' & ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
