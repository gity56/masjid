
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  createRoutesFromElements,
  Outlet 
} from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import './index.css';

// Import all components
import Navbar from './components/Navbar';
import Footer from './components/footer'; // ✅ Import Footer Component
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sheikh from './pages/Sheikh';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

// Create Layout component
function Layout() {
  const { theme } = useTheme();
  
  return (
    <AuthProvider>
      <div className={`relative min-h-screen theme-transition ${theme === 'dark' ? 'bgreen2 text-gold' : 'bg-cream text-gray-900'}`}>
        {/* Background Video */}
        
        {/* Linear Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[#F5F5DC] to-[#e6e6b3] z-0 
          ${theme === 'dark' ? 'bgreen2 text-cream' : 'bg-cream text-gray-900'}
          
          `} />
        
        <div className={`relative z-10`}>
          <header className={`text-center py-4 bg-gradient-to-b from-[#F5F5DC] to-[#e6e6b3] text-dark-maroon
          ${theme === 'dark' ? 'bgreen2 text-cream' : 'bg-cream text-gray-900'}
          ${theme === 'dark' ? ' text-gold' : ' text-dark-maroon'}
          ${
            theme === 'dark' 
              ? 'bg-gradient-to-b  from-green2 to-dark-green2 text-gold' 
              : 'bg-gradient-to-b from-cream-dark to-cream text-dark-maroon'
          }          
        `}>
            <h1 className="bismillah" style={{ fontFamily: 'ElegantAR, serif', textShadow: '0px 0px 15px rgba(255, 215, 0, 0.8)' }}>
              بسم الله الرحمن الرحيم
            </h1>
          </header>
          
          <Navbar/>
          <main>
            <Outlet />
          </main>

          {/* ✅ Add Footer Here */}
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sheikh" element={<Sheikh />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
    </Route>
  )
);
// Main App component
function App() {
  return <RouterProvider router={router} />;
}


export default App;
