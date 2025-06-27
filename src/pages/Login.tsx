import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

function Login() {
  const { theme } = useTheme();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signIn(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError('فشل تسجيل الدخول. يرجى التحقق من بريدك الإلكتروني وكلمة المرور.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`islamic-pattern quran-text min-h-screen py-12 ${
      theme === 'dark' 
        ? 'islamic-pattern2 bg-gradient-to-b from-dark-green2 to-green2 text-gold' 
        : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-md mx-auto rounded-lg shadow-xl p-8 ${
          theme === 'dark' ? 'bg-dark-green2 text-gold' : 'bg-white'
        }`}>
          <h1 className={`text-6xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
          }`}>تسجيل الدخول</h1>

          {error && (
            <div className={`border px-4 py-3 rounded mb-4 ${
              theme === 'dark'
                ? 'bg-red-900/20 border-red-500 text-red-300'
                : 'bg-red-100 border-red-400 text-red-700'
            }`}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 text-2xl">
            <div>
              <label htmlFor="email" className="block quran text-2xl font-bold mb-2">
                <h1 className={`text-3xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                }`}>البريد الإلكتروني</h1>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-green2 border-gold text-gold placeholder-gold/50' 
                    : 'bg-white border-gray-300'
                }`}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block quran text-2xl font-bold mb-2">
                <h1 className={`text-3xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                }`}>كلمة المرور</h1>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-green2 border-gold text-gold placeholder-gold/50' 
                    : 'bg-white border-gray-300'
                }`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 ${
                theme === 'dark'
                  ? 'bg-gold text-dark-green2 hover:bg-gold/90'
                  : 'bg-maroon text-cream hover:bg-cream-dark hover:text-dark-maroon'
              }`}
            >
              <LogIn className="h-5 w-5" />
              {loading ? 'جاري التسجيل...' : 'تسجيل الدخول'}
            </button>
          </form>

          <p className={`text-center mt-6 text-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            ليس لديك حساب؟{' '}
            <Link 
              to="/register" 
              className={`font-bold ${
                theme === 'dark' 
                  ? 'text-gold hover:text-gold/80' 
                  : 'text-dark-maroon hover:text-maroon'
              }`}
            >
              سجل الآن
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;