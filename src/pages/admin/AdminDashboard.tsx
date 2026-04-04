import { useState } from 'react';
import type { GalleryProject } from '../../context/AdminContext';
import { useAdmin } from '../../context/AdminContext';
import { LogOut, Bell, Image as ImageIcon, DollarSign, Star, Trash2, Plus, Upload, RefreshCw, Pencil, X, Check, Lock, Smartphone } from 'lucide-react';

export const AdminDashboard = () => {
  const { 
    logout, refreshData, updatePassword,
    adminMobile, updateAdminMobile,
    messages, toggleMessageImportant, updateMessageStatus,
    appointments, toggleAppointmentImportant, updateAppointmentStatus,
    projects, addProject, removeProject, updateProject,
    pricing, updatePricing
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'notifications' | 'gallery' | 'pricing' | 'security'>('notifications');
  const [aptFilter, setAptFilter] = useState<'all' | 'new' | 'reacted'>('new');
  const [msgFilter, setMsgFilter] = useState<'all' | 'new' | 'reacted'>('new');

  // local state for Gallery Manager Add / Edit
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCat, setNewProjCat] = useState('Iron&Steel');
  const [newProjImg, setNewProjImg] = useState('');

  const [editingProjectId, setEditingProjectId] = useState<string | number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCat, setEditCat] = useState('Iron&Steel');
  const [editImg, setEditImg] = useState('');

  const [newPw, setNewPw] = useState('');
  const [newMobile, setNewMobile] = useState('');

  const startEdit = (p: GalleryProject) => {
    setEditingProjectId(p.id);
    setEditTitle(p.title);
    setEditCat(p.category);
    setEditImg(p.img);
  };

  const saveEdit = async () => {
    if (!editingProjectId) return;
    await updateProject(editingProjectId, { title: editTitle, category: editCat, img: editImg });
    setEditingProjectId(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProjImg(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // local state for Pricing
  const [rates, setRates] = useState(pricing);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newProjTitle || !newProjImg) return;
    addProject({ title: newProjTitle, category: newProjCat, img: newProjImg });
    setNewProjTitle(''); setNewProjImg('');
  };

  const handleUpdatePricing = (e: React.FormEvent) => {
    e.preventDefault();
    updatePricing(rates);
    alert('Pricing Updated Live!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gunmetal text-white p-6 shrink-0 flex flex-col min-h-[auto] md:min-h-screen border-r-4 border-electric-blue">
        <h2 className="font-heading text-xl font-bold text-safety-orange uppercase tracking-widest mb-10">Command Center</h2>
        
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center p-3 text-left font-bold uppercase text-sm transition-colors ${activeTab === 'notifications' ? 'bg-electric-blue' : 'hover:bg-gray-800'}`}>
            <Bell className="w-5 h-5 mr-3 shrink-0" /> Notifications <span className="ml-auto bg-white text-gunmetal px-2 py-0.5 rounded-full text-xs text-center min-w-[24px]">{(messages.filter(m => !m.status || m.status === 'pending').length + appointments.filter(a => !a.status || a.status === 'pending').length)}</span>
          </button>
          <button onClick={() => setActiveTab('gallery')} className={`w-full flex items-center p-3 text-left font-bold uppercase text-sm transition-colors ${activeTab === 'gallery' ? 'bg-electric-blue' : 'hover:bg-gray-800'}`}>
            <ImageIcon className="w-5 h-5 mr-3 shrink-0" /> Gallery Manager
          </button>
          <button onClick={() => setActiveTab('pricing')} className={`w-full flex items-center p-3 text-left font-bold uppercase text-sm transition-colors ${activeTab === 'pricing' ? 'bg-electric-blue' : 'hover:bg-gray-800'}`}>
            <DollarSign className="w-5 h-5 mr-3 shrink-0" /> Service Estimator
          </button>
          <button onClick={() => setActiveTab('security')} className={`w-full flex items-center p-3 text-left font-bold uppercase text-sm transition-colors ${activeTab === 'security' ? 'bg-safety-orange transition-colors' : 'hover:bg-gray-800'}`}>
            <Lock className="w-5 h-5 mr-3 shrink-0" /> System Security
          </button>
        </nav>

        <div className="mt-10 md:mt-auto space-y-2">
          <button onClick={refreshData} className="w-full flex items-center p-3 text-left font-bold uppercase text-sm text-gray-400 hover:text-white transition-colors">
            <RefreshCw className="w-5 h-5 mr-3 shrink-0" /> Sync Data
          </button>
          <button onClick={logout} className="w-full flex items-center p-3 text-left font-bold uppercase text-sm text-gray-400 hover:text-white transition-colors">
            <LogOut className="w-5 h-5 mr-3 shrink-0" /> Disconnect
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {activeTab === 'notifications' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-heading text-2xl font-bold uppercase mb-8 border-b-2 border-gray-200 pb-4 text-gunmetal">Incoming Requests & Mail</h3>
            
            <h4 className="font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center">
              Appointments <span className="ml-3 bg-gray-200 text-gunmetal px-2 py-1 rounded text-xs">{appointments.filter(a => !a.status || a.status === 'pending').length} New</span>
            </h4>

            <div className="flex flex-wrap gap-2 mb-6">
              <button onClick={() => setAptFilter('all')} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${aptFilter === 'all' ? 'bg-gunmetal text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>All</button>
              <button onClick={() => setAptFilter('new')} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${aptFilter === 'new' ? 'bg-gunmetal text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>New</button>
              <button onClick={() => setAptFilter('reacted')} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${aptFilter === 'reacted' ? 'bg-gunmetal text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Reacted</button>
            </div>

            <div className="space-y-4 mb-12">
              {appointments.filter(a => aptFilter === 'all' ? true : aptFilter === 'new' ? (!a.status || a.status === 'pending') : (a.status === 'accepted' || a.status === 'rejected')).length === 0 && <p className="text-gray-400 italic">No appointments in this category.</p>}
              {appointments.filter(a => aptFilter === 'all' ? true : aptFilter === 'new' ? (!a.status || a.status === 'pending') : (a.status === 'accepted' || a.status === 'rejected')).map(a => (
                <div key={a.id} className={`p-5 bg-white shadow-md border-l-4 ${a.isImportant ? 'border-safety-orange bg-orange-50/50' : 'border-gray-200'} flex flex-col sm:flex-row justify-between items-start gap-4 transition-colors relative`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-lg text-gunmetal">{a.vehicle}</p>
                      <span className={`px-2 py-0.5 text-[0.65rem] font-bold uppercase rounded-sm border ${(!a.status || a.status === 'pending') ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : a.status === 'accepted' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-red-100 text-red-800 border-red-200'}`}>
                        {a.status || 'pending'}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-500 text-sm mt-1">{a.email}</p>
                    <p className="font-semibold text-electric-blue uppercase tracking-wider text-sm mt-1 mb-3">{a.service.replace('-', ' ')}</p>
                    <p className="text-gray-600 text-sm"><span className="font-bold">Requested:</span> {a.preferredDate} ({a.preferredTime})</p>
                    <p className="text-xs text-gray-400 mt-2 font-mono">ID: {a.id} | Received: {a.date}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 self-end sm:self-start">
                    <button onClick={() => toggleAppointmentImportant(a.id)} className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Mark Important">
                      <Star className={`w-6 h-6 transition-colors ${a.isImportant ? 'fill-safety-orange text-safety-orange' : 'text-gray-300 hover:text-gray-400'}`} />
                    </button>
                    {(a.status === 'pending' || !a.status) && (
                      <div className="flex gap-2 mt-2">
                        <button onClick={() => updateAppointmentStatus(a.id, 'accepted')} className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow transition-colors font-bold uppercase tracking-wider">Accept</button>
                        <button onClick={() => updateAppointmentStatus(a.id, 'rejected')} className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow transition-colors font-bold uppercase tracking-wider">Reject</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center mt-12">
              Direct Mail <span className="ml-3 bg-gray-200 text-gunmetal px-2 py-1 rounded text-xs">{messages.filter(m => !m.status || m.status === 'pending').length} New</span>
            </h4>

            <div className="flex flex-wrap gap-2 mb-6">
              <button onClick={() => setMsgFilter('all')} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${msgFilter === 'all' ? 'bg-gunmetal text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>All</button>
              <button onClick={() => setMsgFilter('new')} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${msgFilter === 'new' ? 'bg-gunmetal text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>New</button>
              <button onClick={() => setMsgFilter('reacted')} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${msgFilter === 'reacted' ? 'bg-gunmetal text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Reacted</button>
            </div>

            <div className="space-y-4">
              {messages.filter(m => msgFilter === 'all' ? true : msgFilter === 'new' ? (!m.status || m.status === 'pending') : m.status === 'reacted').length === 0 && <p className="text-gray-400 italic">No messages in this category.</p>}
              {messages.filter(m => msgFilter === 'all' ? true : msgFilter === 'new' ? (!m.status || m.status === 'pending') : m.status === 'reacted').map(m => (
                <div key={m.id} className={`p-5 bg-white shadow-md border-l-4 ${m.isImportant ? 'border-electric-blue bg-blue-50/50' : 'border-gray-200'} flex flex-col sm:flex-row justify-between items-start gap-4 transition-colors`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-lg text-gunmetal">{m.email}</p>
                      <span className={`px-2 py-0.5 text-[0.65rem] font-bold uppercase rounded-sm border ${(!m.status || m.status === 'pending') ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                        {m.status || 'pending'}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-3 whitespace-pre-wrap">{m.details}</p>
                    <p className="text-xs text-gray-400 mt-4 font-mono">ID: {m.id} | Received: {m.date}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 self-end sm:self-start">
                    <button onClick={() => toggleMessageImportant(m.id)} className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Mark Important">
                      <Star className={`w-6 h-6 transition-colors ${m.isImportant ? 'fill-electric-blue text-electric-blue' : 'text-gray-300 hover:text-gray-400'}`} />
                    </button>
                    {(!m.status || m.status === 'pending') && (
                      <button onClick={() => updateMessageStatus(m.id, 'reacted')} className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded shadow transition-colors font-bold uppercase tracking-wider w-full mt-2">Mark Read</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-heading text-2xl font-bold uppercase mb-8 border-b-2 border-gray-200 pb-4 text-gunmetal">Manage Gallery</h3>
            
            <div className="bg-white p-6 shadow-xl mb-10 border-t-4 border-electric-blue">
              <h4 className="font-bold uppercase tracking-wider mb-6 flex items-center text-gunmetal"><Plus className="w-5 h-5 mr-3 text-electric-blue" /> Add New Project</h4>
              <form onSubmit={handleAddProject} className="flex flex-wrap gap-6 items-end">
                <div className="flex-1 min-w-[250px]">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Title</label>
                  <input required type="text" value={newProjTitle} onChange={e=>setNewProjTitle(e.target.value)} className="w-full p-3 border-2 border-gray-200 outline-none focus:border-electric-blue transition-colors font-semibold" placeholder="e.g. Steel Canopy" />
                </div>
                <div className="min-w-[200px]">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Division</label>
                  <select value={newProjCat} onChange={e=>setNewProjCat(e.target.value)} className="w-full p-3 border-2 border-gray-200 outline-none focus:border-electric-blue font-semibold cursor-pointer">
                    <option value="Iron&Steel">Iron & Steel</option>
                    <option value="Heavy Vehicles">Heavy Vehicles</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[300px]">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Image URL or Local Upload</label>
                  <div className="flex gap-2">
                    <input required type="text" value={newProjImg} onChange={e=>setNewProjImg(e.target.value)} className="w-full p-3 border-2 border-gray-200 outline-none focus:border-electric-blue transition-colors font-semibold text-sm" placeholder="https:// images.unsplash..." />
                    
                    <label className="shrink-0 flex items-center justify-center px-6 border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                      <Upload className="w-4 h-4 text-gunmetal mr-2" />
                      <span className="font-bold text-xs uppercase text-gunmetal">Browse Local</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full md:w-auto bg-gunmetal hover:bg-gray-800 text-white font-bold px-8 py-3 h-[52px] uppercase tracking-widest transition-colors shadow-lg">Deploy Addition</button>
              </form>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projects.map(p => (
                <div key={p.id} className="relative group overflow-hidden bg-gray-200 aspect-square flex flex-col border border-transparent shadow shadow-black/10 hover:shadow-xl transition-shadow">
                  {editingProjectId === p.id ? (
                     <div className="absolute inset-0 bg-white z-10 p-3 flex flex-col gap-2 overflow-y-auto shadow-inner">
                        <input value={editTitle} onChange={e=>setEditTitle(e.target.value)} className="w-full border-2 border-gray-200 focus:border-electric-blue p-2 text-xs font-bold transition-colors outline-none" placeholder="Project Title" />
                        <select value={editCat} onChange={e=>setEditCat(e.target.value)} className="w-full border-2 border-gray-200 focus:border-electric-blue p-2 text-xs font-bold transition-colors outline-none">
                          <option value="Iron&Steel">Iron & Steel</option>
                          <option value="Heavy Vehicles">Heavy Vehicles</option>
                        </select>
                        <input value={editImg} onChange={e=>setEditImg(e.target.value)} className="w-full border-2 border-gray-200 focus:border-electric-blue p-2 text-[10px] font-mono transition-colors outline-none" placeholder="Image URL / Base64" />
                        
                        <label className="text-[10px] text-center bg-gray-100 border border-gray-300 p-2 cursor-pointer font-bold uppercase tracking-wider hover:bg-gunmetal hover:text-white transition-colors flex items-center justify-center gap-2">
                           <Upload className="w-3 h-3" /> Swap Image
                           <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                             const file = e.target.files?.[0];
                             if(!file) return;
                             const r = new FileReader();
                             r.onloadend = () => setEditImg(r.result as string);
                             r.readAsDataURL(file);
                           }} />
                        </label>
                        
                        <div className="flex gap-2 mt-auto">
                           <button onClick={saveEdit} className="flex-1 bg-green-500 hover:bg-green-600 transition-colors text-white py-2 text-xs font-bold uppercase flex items-center justify-center"><Check className="w-4 h-4 mr-1"/> OK</button>
                           <button onClick={() => setEditingProjectId(null)} className="flex-1 bg-gray-200 hover:bg-gray-300 transition-colors text-gunmetal py-2 text-xs font-bold uppercase flex items-center justify-center"><X className="w-4 h-4 mr-1"/> Cancel</button>
                        </div>
                     </div>
                  ) : (
                    <>
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover absolute inset-0" />
                      <div className="absolute inset-0 bg-gunmetal/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                        <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                        <p className="text-electric-blue text-[10px] uppercase font-bold mb-4">{p.category}</p>
                        <div className="flex gap-3">
                          <button onClick={() => startEdit(p)} className="p-3 bg-white/20 hover:bg-electric-blue hover:text-white rounded-full transition-colors text-white">
                            <Pencil className="w-5 h-5" />
                          </button>
                          <button onClick={() => removeProject(p.id)} className="p-3 bg-white/20 hover:bg-red-500 hover:text-white rounded-full transition-colors text-white">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-heading text-2xl font-bold uppercase mb-8 border-b-2 border-gray-200 pb-4 text-gunmetal">Service Estimator Pricing</h3>
            <div className="bg-white p-8 shadow-xl max-w-xl border-t-4 border-safety-orange">
              <p className="text-gray-600 text-sm mb-8 font-semibold">Update the baseline multiplier values (₹) per square meter for your metal fabrication materials. These rates reflect instantly on the public Service Estimator component.</p>
              
              <form onSubmit={handleUpdatePricing} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                    Iron Rate <span>(₹ / m²)</span>
                  </label>
                  <input type="number" required value={rates.iron} onChange={e=>setRates({...rates, iron: Number(e.target.value)})} className="w-full p-4 border-2 border-gray-200 focus:border-safety-orange outline-none font-black text-xl text-gunmetal transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                    Steel Rate <span>(₹ / m²)</span>
                  </label>
                  <input type="number" required value={rates.steel} onChange={e=>setRates({...rates, steel: Number(e.target.value)})} className="w-full p-4 border-2 border-gray-200 focus:border-safety-orange outline-none font-black text-xl text-gunmetal transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                    Custom Alloy Rate <span>(₹ / m²)</span>
                  </label>
                  <input type="number" required value={rates.customAlloy} onChange={e=>setRates({...rates, customAlloy: Number(e.target.value)})} className="w-full p-4 border-2 border-gray-200 focus:border-safety-orange outline-none font-black text-xl text-gunmetal transition-colors" />
                </div>
                
                <button type="submit" className="w-full bg-safety-orange hover:bg-orange-600 text-white font-black py-4 uppercase tracking-widest transition-colors shadow-lg mt-8 text-lg">
                  Deploy Pricing Matrix
                </button>
              </form>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="animate-fade-in pb-20">
              <h3 className="font-heading text-2xl font-bold uppercase mb-8 border-b-2 border-gray-200 pb-4 text-gunmetal">System Security</h3>
              
              <div className="bg-white p-8 md:p-12 shadow max-w-xl mx-auto border-t-4 border-safety-orange">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-orange-100 rounded-full">
                    <Lock className="w-8 h-8 text-safety-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gunmetal uppercase tracking-widest text-lg">Master Password</h4>
                    <p className="text-sm text-gray-500">Update local administrative access token</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="password"
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    placeholder="Enter new 🔴 password..."
                    className="w-full text-center tracking-widest font-mono text-xl border-4 outline-none border-gray-200 focus:border-safety-orange p-4 placeholder-gray-300 transition-colors"
                  />
                  <p className="text-xs text-gray-400 font-semibold mb-4 leading-relaxed bg-gray-50 p-4 border border-gray-200 text-center">
                    Note: Your custom password will be securely synchronized to your central database, allowing you to access this dashboard from any mobile or desktop device globally using these exact credentials.
                  </p>

                  <button 
                    onClick={async () => {
                      if(newPw.trim().length > 0) {
                        await updatePassword(newPw);
                        alert('Password successfully overwritten remotely!');
                        setNewPw('');
                      } else {
                        alert('Password cannot be empty.');
                      }
                    }} 
                    className="w-full bg-gunmetal hover:bg-black transition-colors text-white py-4 font-bold uppercase tracking-widest mb-10"
                  >
                    Overwrite Credentials
                  </button>

                  {/* Mobile Recovery Update */}
                  <div className="flex items-center gap-4 mb-6 mt-12 py-8 border-t-2 border-dashed border-gray-200">
                    <div className="p-4 bg-orange-100 rounded-full">
                      <Smartphone className="w-8 h-8 text-safety-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gunmetal uppercase tracking-widest text-lg">Recovery Mobile</h4>
                      <p className="text-sm text-gray-500">Authorized phone number for password reset</p>
                    </div>
                  </div>
                  
                  <input
                    type="tel"
                    value={newMobile}
                    onChange={(e) => setNewMobile(e.target.value)}
                    placeholder={`Current: ${adminMobile}`}
                    className="w-full text-center tracking-widest font-mono text-xl border-4 outline-none border-gray-200 focus:border-safety-orange p-4 placeholder-gray-300 transition-colors mt-4"
                  />
                  <p className="text-xs text-gray-400 font-semibold mt-4 mb-4 leading-relaxed bg-gray-50 p-4 border border-gray-200 text-center">
                    Note: This is the ONLY mobile number authorized to send the "forget" recovery command from the login screen.
                  </p>

                  <button 
                    onClick={async () => {
                      if(newMobile.trim().length > 0) {
                        await updateAdminMobile(newMobile);
                        alert('Recovery mobile successfully updated remotely!');
                        setNewMobile('');
                      } else {
                        alert('Mobile cannot be empty.');
                      }
                    }} 
                    className="w-full bg-gunmetal hover:bg-black transition-colors text-white py-4 font-bold uppercase tracking-widest"
                  >
                    Overwrite Mobile
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};
