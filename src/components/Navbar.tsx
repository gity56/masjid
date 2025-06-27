import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun, Book, User, Home, Info, Phone, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
    // Add a small delay before refreshing to ensure the theme is saved
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <nav className={`${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-dark-green2 to-green2' 
        : 'bg-gradient-to-b from-cream-dark to-transparent'
    } ${
      theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
    } py-4 sticky top-0 z-50`}>
      <div className="container quran-text mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold tsr text-2xl flex items-center gap-2">
            <Book className="h-6 w-6" />
            <span>مدرسة عقبة بن نافع</span>
          </Link>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center nav space-x-6 space-x-reverse">
            <Link to="/" className={`flex items-center gap-2 ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>
              <Home size={18} />
              <span>الرئيسية</span>
            </Link>
            <Link to="/sheikh" className={`flex items-center gap-2 ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>
              <GraduationCap size={18} />
              <span>الشيخ</span>
            </Link>
            <Link to="/about" className={`flex items-center gap-2 ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>
              <Info size={18} />
              <span>عن المدرسة</span>
            </Link>
            <Link to="/contact" className={`flex items-center gap-2 ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>
              <Phone size={18} />
              <span>اتصل بنا</span>
            </Link>
            <Link to="/login" className={`flex items-center gap-2 ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>
              <User size={18} />
              <span>تسجيل الدخول</span>
            </Link>
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'hover:bg-green2' : 'hover:bg-cream'
              } transition-colors`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <Link to="/" className={`block ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>الرئيسية</Link>
            <Link to="/sheikh" className={`block ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>الشيخ</Link>
            <Link to="/about" className={`block ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>عن المدرسة</Link>
            <Link to="/contact" className={`block ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>اتصل بنا</Link>
            <Link to="/login" className={`block ${
              theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
            }`}>تسجيل الدخول</Link>
            <button
              onClick={handleThemeToggle}
              className={`flex items-center gap-2 ${
                theme === 'dark' ? 'hover:text-green2' : 'hover:text-cream'
              }`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} />
                  <span>الوضع النهاري</span>
                </>
              ) : (
                <>
                  <Moon size={18} />
                  <span>الوضع الليلي</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;