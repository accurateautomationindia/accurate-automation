import { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Lock, Smartphone } from 'lucide-react';

export const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isRecovering, setIsRecovering] = useState(false);
  const { login, recoverPassword, adminMobile } = useAdmin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.toLowerCase() === 'forget') {
      if (!mobile) return setError(true);
      
      const cleanMobile = mobile.replace(/\D/g, '');
      const cleanAuthorized = (adminMobile || '9605383887').replace(/\D/g, '');
      
      if (!cleanMobile.endsWith(cleanAuthorized)) {
        setError(true);
        setTimeout(() => setError(false), 3000);
        return;
      }

      setIsRecovering(true);
      const sent = await recoverPassword(mobile);
      if (sent) {
        setSuccess(true);
        setTimeout(() => {
           setSuccess(false);
           setPassword('');
           setMobile('');
        }, 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
      setIsRecovering(false);
      return;
    }

    if (!login(password)) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-2xl border-t-4 border-electric-blue">
        <div className="flex justify-center mb-6">
          <div className="bg-gunmetal p-4 rounded-full">
            <Lock className="w-8 h-8 text-electric-blue" />
          </div>
        </div>
        <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-wider text-gunmetal mb-8">Admin Access</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Master Password</label>
            <input 
              type={password.toLowerCase() === 'forget' ? 'text' : 'password'} 
              className="w-full p-3 border-2 border-gray-200 focus:border-electric-blue outline-none text-center font-bold tracking-widest transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={isRecovering}
              autoFocus
            />
          </div>

          {password.toLowerCase() === 'forget' && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2 flex items-center justify-center"><Smartphone className="w-4 h-4 mr-1" /> Mobile Phone Number</label>
              <input 
                type="tel" 
                className="w-full p-3 border-2 border-safety-orange bg-orange-50 focus:border-orange-500 outline-none text-center font-bold tracking-widest transition-colors"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                disabled={isRecovering}
                required
              />
            </div>
          )}

          {error && <p className="text-red-500 text-sm font-bold animate-pulse text-center">Operation Failed / Invalid Credentials</p>}
          {success && <p className="text-green-500 text-sm font-bold animate-pulse text-center">Password Transmitted to exact admin email.</p>}
          
          <button type="submit" disabled={isRecovering} className={`w-full text-white font-bold py-3 uppercase tracking-widest transition-colors ${password.toLowerCase() === 'forget' ? 'bg-safety-orange hover:bg-orange-600' : 'bg-electric-blue hover:bg-blue-600'} ${isRecovering ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isRecovering ? 'Transmitting...' : password.toLowerCase() === 'forget' ? 'Recover Password' : 'Authorize'}
          </button>
        </form>
      </div>
    </div>
  );
};
