import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Register() {
  const { theme } = useTheme();
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError('كلمات المرور غير متطابقة');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(formData.email, formData.password, formData.fullName);
      navigate('/dashboard');
    } catch (err: unknown) {
      console.error("Registration error:", err);
      
      // Type guard to check if err is a Firebase error with code property
      if (err && typeof err === 'object' && 'code' in err) {
        // Now TypeScript knows err has a code property
        const firebaseError = err as { code: string; message?: string };
        
        if (firebaseError.code === 'auth/email-already-in-use') {
          setError('البريد الإلكتروني مستخدم بالفعل. يرجى استخدام بريد إلكتروني آخر.');
        } else if (firebaseError.code === 'auth/invalid-email') {
          setError('البريد الإلكتروني غير صالح. يرجى التحقق من صحة البريد الإلكتروني.');
        } else if (firebaseError.code === 'auth/weak-password') {
          setError('كلمة المرور ضعيفة جدًا. يرجى استخدام كلمة مرور أقوى.');
        } else {
          setError(`فشل إنشاء الحساب: ${firebaseError.message || 'يرجى المحاولة مرة أخرى.'}`);
        }
      } else {
        // Handle case where err is not a Firebase error object
        setError('فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.');
      }
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
          }`}>إنشاء حساب جديد</h1>

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
              <label htmlFor="fullName" className="block quran text-2xl font-bold mb-2">
                <h1 className={`text-3xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                }`}>الاسم الكامل</h1>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
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

            <div>
              <label htmlFor="confirmPassword" className="block quran text-2xl font-bold mb-2">
                <h1 className={`text-3xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                }`}>تأكيد كلمة المرور</h1>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
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
              <UserPlus className="h-5 w-5" />
              {loading ? 'جاري التسجيل...' : 'إنشاء حساب'}
            </button>
          </form>

          <p className={`text-center mt-6 text-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            لديك حساب بالفعل؟{' '}
            <Link 
              to="/login" 
              className={`font-bold ${
                theme === 'dark' 
                  ? 'text-gold hover:text-gold/80' 
                  : 'text-dark-maroon hover:text-maroon'
              }`}
            >
              سجل دخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;