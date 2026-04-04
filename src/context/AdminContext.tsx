import { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

export type GalleryProject = { id: string | number; title: string; category: string; img: string; };
export type PricingRates = { iron: number; steel: number; customAlloy: number; };
export type ContactMessage = { id: string; email: string; details: string; date?: string; isImportant: boolean; status?: 'pending' | 'reacted'; };
export type AppointmentRequest = { id: string; email: string; vehicle: string; service: string; preferredDate: string; preferredTime: string; date?: string; isImportant: boolean; status?: 'pending' | 'accepted' | 'rejected'; };

interface AdminContextState {
  isAuthenticated: boolean;
  login: (pw: string) => boolean;
  logout: () => void;
  updatePassword: (newPw: string) => Promise<void>;
  recoverPassword: (mobile: string) => Promise<boolean>;
  adminMobile: string;
  updateAdminMobile: (newMobile: string) => Promise<void>;

  projects: GalleryProject[];
  addProject: (p: Omit<GalleryProject, 'id'>) => void;
  removeProject: (id: string | number) => void;
  updateProject: (id: string | number, p: Omit<GalleryProject, 'id'>) => void;

  pricing: PricingRates;
  updatePricing: (rates: PricingRates) => void;

  messages: ContactMessage[];
  addMessage: (m: Omit<ContactMessage, 'id' | 'date' | 'isImportant' | 'status'>) => void;
  toggleMessageImportant: (id: string) => void;
  updateMessageStatus: (id: string, status: 'reacted') => void;

  appointments: AppointmentRequest[];
  addAppointment: (a: Omit<AppointmentRequest, 'id' | 'date' | 'isImportant' | 'status'>) => void;
  toggleAppointmentImportant: (id: string) => void;
  updateAppointmentStatus: (id: string, status: 'accepted' | 'rejected') => void;
  refreshData: () => Promise<void>;
}

const AdminContext = createContext<AdminContextState | null>(null);

const defaultPricing = { iron: 120, steel: 180, customAlloy: 250 };

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('admin');
  const [adminMobile, setAdminMobile] = useState('9605383887');
  
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [pricing, setPricing] = useState<PricingRates>(defaultPricing);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [appointments, setAppointments] = useState<AppointmentRequest[]>([]);

  const prevMsgTopId = useRef<string | null>(null);
  const prevAptTopId = useRef<string | null>(null);

  const refreshData = async (isPolling = false) => {
    try {
      if (!isPolling) {
        const { data: projData } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
        if (projData) setProjects(projData);

        const { data: priceData } = await supabase.from('pricing').select('*').limit(1).single();
        if (priceData) {
          setPricing({ iron: priceData.iron, steel: priceData.steel, customAlloy: priceData.custom_alloy });
        }
        
        const { data: settingsData } = await supabase.from('settings').select('*').single();
        if (settingsData) {
          if (settingsData.admin_password) setAdminPassword(settingsData.admin_password);
          if (settingsData.admin_mobile) setAdminMobile(settingsData.admin_mobile);
        }
      }

      const { data: msgData } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
      if (msgData) {
        if (isPolling && prevMsgTopId.current && msgData.length > 0 && msgData[0].id !== prevMsgTopId.current) {
          // Verify it's not simply a deletion shifting the list up
          const existingIds = messages.map(m => m.id);
          if (!existingIds.includes(msgData[0].id) && 'Notification' in window && Notification.permission === 'granted') {
            new Notification('New Message', { body: `Inquiry from ${msgData[0].email}` });
          }
        }
        if (msgData.length > 0) prevMsgTopId.current = msgData[0].id;

        setMessages(msgData.map((m: any) => ({ 
          id: m.id, email: m.email, details: m.details, isImportant: m.is_important, date: new Date(m.created_at).toLocaleString(), status: m.status || 'pending'
        })));
      }

      const { data: aptData } = await supabase.from('appointments').select('*').order('created_at', { ascending: false });
      if (aptData) {
        if (isPolling && prevAptTopId.current && aptData.length > 0 && aptData[0].id !== prevAptTopId.current) {
          const existingIds = appointments.map(a => a.id);
          if (!existingIds.includes(aptData[0].id) && 'Notification' in window && Notification.permission === 'granted') {
            new Notification('New Appointment', { body: `Request for ${aptData[0].service}` });
          }
        }
        if (aptData.length > 0) prevAptTopId.current = aptData[0].id;

        setAppointments(aptData.map((a: any) => ({
          id: a.id, email: a.email, vehicle: a.vehicle, service: a.service, preferredDate: a.preferred_date, preferredTime: a.preferred_time,
          isImportant: a.is_important, date: new Date(a.created_at).toLocaleString(), status: a.status || 'pending'
        })));
      }

    } catch (err) {
      console.error("Failed to sync with Supabase cloud backup", err);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAuthenticated) {
      if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
      }
      interval = setInterval(() => {
        refreshData(true);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAuthenticated, messages, appointments]);

  const login = (pw: string) => {
    if (pw === adminPassword) { setIsAuthenticated(true); return true; }
    return false;
  };
  const logout = () => setIsAuthenticated(false);

  const updatePassword = async (newPw: string) => {
    if (newPw.trim().length > 0) {
      setAdminPassword(newPw);
      await supabase.from('settings').update({ admin_password: newPw }).eq('id', 1);
    }
  };

  const updateAdminMobile = async (newMobile: string) => {
    if (newMobile.trim().length > 0) {
      setAdminMobile(newMobile);
      const { error } = await supabase.from('settings').update({ admin_mobile: newMobile }).eq('id', 1);
      if (error) console.error("Update mobile error:", error);
    }
  };

  const recoverPassword = async (mobile: string) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUB_KEY;
    const templateId = import.meta.env.VITE_EMAILJS_RECOVERY_TEMPLATE_ID;
    
    if (serviceId && publicKey && templateId) {
      try {
        await emailjs.send(
          serviceId,
          templateId, 
          {
            to_email: 'accurateautomationindia@gmail.com',
            message: `Your password is ${adminPassword}`,
            mobile: mobile,
            password: adminPassword
          },
          publicKey
        );
        return true;
      } catch (err) {
        console.error("Failed to send recovery email", err);
        return false;
      }
    }
    return false;
  };

  // Optimistic UI updates mapping to async Supabase calls
  const addProject = async (p: Omit<GalleryProject, 'id'>) => {
    const tempId = Date.now().toString();
    setProjects(prev => [{...p, id: tempId}, ...prev]);
    const { data } = await supabase.from('projects').insert([p]).select().single();
    if (data) setProjects(prev => prev.map(proj => proj.id === tempId ? data : proj));
  };

  const removeProject = async (id: string | number) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    await supabase.from('projects').delete().eq('id', id);
  };

  const updateProject = async (id: string | number, p: Omit<GalleryProject, 'id'>) => {
    setProjects(prev => prev.map(proj => proj.id === id ? { ...p, id } : proj));
    await supabase.from('projects').update(p).eq('id', id);
  };

  const updatePricing = async (newRates: PricingRates) => {
    setPricing(newRates);
    await supabase.from('pricing').update({ 
      iron: newRates.iron, 
      steel: newRates.steel, 
      custom_alloy: newRates.customAlloy 
    }).neq('iron', 0); // Unconditional update trick since table is 1 row
  };

  const addMessage = async (m: Omit<ContactMessage, 'id' | 'date' | 'isImportant' | 'status'>) => {
    const tempId = Date.now().toString();
    setMessages(prev => [{ ...m, id: tempId, date: new Date().toLocaleString(), isImportant: false, status: 'pending' }, ...prev]);
    const { data } = await supabase.from('messages').insert([{ email: m.email, details: m.details }]).select().single();
    if (data) {
      setMessages(prev => prev.map(msg => msg.id === tempId ? { ...msg, id: data.id, date: new Date(data.created_at).toLocaleString(), status: data.status || 'pending' } : msg));
    }
  };
  
  const toggleMessageImportant = async (id: string) => {
    const msg = messages.find(m => m.id === id);
    if (!msg) return;
    const newStatus = !msg.isImportant;
    setMessages(prev => prev.map(m => m.id === id ? { ...m, isImportant: newStatus } : m));
    await supabase.from('messages').update({ is_important: newStatus }).eq('id', id);
  };

  const updateMessageStatus = async (id: string, status: 'reacted') => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
    await supabase.from('messages').update({ status }).eq('id', id);
  };

  const addAppointment = async (a: Omit<AppointmentRequest, 'id' | 'date' | 'isImportant' | 'status'>) => {
    const tempId = Date.now().toString();
    setAppointments(prev => [{ ...a, id: tempId, date: new Date().toLocaleString(), isImportant: false, status: 'pending' }, ...prev]);
    const { data } = await supabase.from('appointments').insert([{ 
      vehicle: a.vehicle, email: a.email, service: a.service, preferred_date: a.preferredDate, preferred_time: a.preferredTime
    }]).select().single();
    if (data) {
      setAppointments(prev => prev.map(apt => apt.id === tempId ? { ...apt, id: data.id, date: new Date(data.created_at).toLocaleString(), status: data.status || 'pending' } : apt));
    }
  };
  
  const toggleAppointmentImportant = async (id: string) => {
    const apt = appointments.find(a => a.id === id);
    if (!apt) return;
    const newStatus = !apt.isImportant;
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, isImportant: newStatus } : a));
    await supabase.from('appointments').update({ is_important: newStatus }).eq('id', id);
  };

  const updateAppointmentStatus = async (id: string, status: 'accepted' | 'rejected') => {
    const apt = appointments.find(a => a.id === id);

    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    await supabase.from('appointments').update({ status }).eq('id', id);

    if (apt && apt.email) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUB_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              to_email: apt.email,
              vehicle_name: apt.vehicle,
              service_name: apt.service.replace('-', ' '),
              status: status.toUpperCase(),
              reply_to: 'accurateautomationindia@gmail.com',
            },
            publicKey
          );
          console.log(`Successfully dispatched automated status email to ${apt.email}`);
        } catch (error) {
          console.error("Failed to send automated status email", error);
        }
      } else {
        console.warn("EmailJS credentials missing in .env. Automated email suppressed.");
      }
    }
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated, login, logout, updatePassword, recoverPassword,
      adminMobile, updateAdminMobile,
      projects, addProject, removeProject, updateProject,
      pricing, updatePricing,
      messages, addMessage, toggleMessageImportant, updateMessageStatus,
      appointments, addAppointment, toggleAppointmentImportant, updateAppointmentStatus,
      refreshData
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within an AdminProvider");
  return context;
};
