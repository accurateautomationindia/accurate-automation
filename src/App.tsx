import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { IronSteel } from './pages/IronSteel';
import { Automotive } from './pages/Automotive';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

// Admin Integrations
import { AdminProvider, useAdmin } from './context/AdminContext';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

const AdminRoute = () => {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
};

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="iron-steel" element={<IronSteel />} />
            <Route path="automotive" element={<Automotive />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
