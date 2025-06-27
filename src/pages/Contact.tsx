import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`islamic-pattern quran-text min-h-screen py-12 ${
      theme === 'dark' 
        ? 'islamic-pattern2 bg-gradient-to-b from-dark-green2 to-green2 text-gold' 
        : 'bg-gradient-to-br from-cream via-cream-light to-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto rounded-lg shadow-xl p-8 relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-dark-green2 via-green2/20 to-transparent border border-gold/20' 
            : 'bg-gradient-to-br from-white via-cream/30 to-transparent border border-maroon/10'
        }`}>
          {/* Decorative gradient overlay */}
          <div className={`absolute inset-0 rounded-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-tr from-dark-green2/80 via-transparent to-green2/20'
              : 'bg-gradient-to-tr from-white/90 via-transparent to-cream/30'
          }`}></div>
          
          <div className="relative z-10">
            <h1 className={`text-6xl font-bold text-center mb-8 ${
              theme === 'dark' ? 'text-gold drop-shadow-lg' : 'text-dark-maroon drop-shadow-md'
            }`}>اتصل بنا</h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`rounded-lg p-6 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-dark-green2/90 to-green2/30 border border-gold/20 shadow-lg'
                  : 'bg-gradient-to-br from-white/90 to-cream/40 border border-maroon/10 shadow-md'
              }`}>
                <h2 className={`text-4xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>معلومات الاتصال</h2>
                
                <div className="space-y-6 quran">
                  <div className={`flex items-center gap-4 p-4 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-green2/20 to-transparent border-l-4 border-gold/50'
                      : 'bg-gradient-to-r from-cream/40 to-transparent border-l-4 border-maroon/50'
                  }`}>
                    <Phone className={`h-6 w-6 ${
                      theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                    }`} />
                    <div>
                      <h3 className={`text-3xl font-bold ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                      }`}>الهاتف</h3>
                      <p className={theme === 'dark' ? 'text-gold text-2xl' : 'text-dark-maroon text-2xl'}>
                        +970 59 123 4567
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center quran gap-4 p-4 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-green2/20 to-transparent border-l-4 border-gold/50'
                      : 'bg-gradient-to-r from-cream/40 to-transparent border-l-4 border-maroon/50'
                  }`}>
                    <Mail className={`h-6 w-6 ${
                      theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                    }`} />
                    <div>
                      <h3 className={`text-3xl font-bold ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                      }`}>البريد الإلكتروني</h3>
                      <p className={theme === 'dark' ? 'text-gold text-2xl' : 'text-dark-maroon text-2xl'}>
                        info@uqba-school.ps
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center quran gap-4 p-4 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-green2/20 to-transparent border-l-4 border-gold/50'
                      : 'bg-gradient-to-r from-cream/40 to-transparent border-l-4 border-maroon/50'
                  }`}>
                    <MapPin className={`h-6 w-6 ${
                      theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                    }`} />
                    <div>
                      <h3 className={`text-3xl font-bold ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                      }`}>العنوان</h3>
                      <p className={theme === 'dark' ? 'text-gold text-2xl' : 'text-dark-maroon text-2xl'}>
                        غزة - فلسطين
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`text-2xl rounded-lg p-6 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-dark-green2/90 to-green2/30 border border-gold/20 shadow-lg'
                  : 'bg-gradient-to-br from-white/90 to-cream/40 border border-maroon/10 shadow-md'
              }`}>
                <h2 className={`text-4xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>أرسل رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block quran text-2xl font-bold mb-2">
                      <h1 className={`text-3xl ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                      }`}>الاسم</h1>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg border transition-all duration-300 focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-green2/80 to-dark-green2/60 border-gold/30 text-gold placeholder-gold/50 focus:border-gold focus:ring-gold/30' 
                          : 'bg-gradient-to-r from-white to-cream/30 border-maroon/20 focus:border-maroon focus:ring-maroon/30'
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
                      className={`w-full p-3 rounded-lg border transition-all duration-300 focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-green2/80 to-dark-green2/60 border-gold/30 text-gold placeholder-gold/50 focus:border-gold focus:ring-gold/30' 
                          : 'bg-gradient-to-r from-white to-cream/30 border-maroon/20 focus:border-maroon focus:ring-maroon/30'
                      }`}
                      required
                    />
                  </div>

                  <div className='text-2xl'>
                    <label htmlFor="phone" className="block quran font-bold text-2xl mb-2">
                      <h1 className={`text-3xl ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                      }`}>رقم الهاتف</h1>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg border transition-all duration-300 focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-green2/80 to-dark-green2/60 border-gold/30 text-gold placeholder-gold/50 focus:border-gold focus:ring-gold/30' 
                          : 'bg-gradient-to-r from-white to-cream/30 border-maroon/20 focus:border-maroon focus:ring-maroon/30'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block quran font-bold text-2xl">
                      <h1 className={`text-3xl ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                      }`}>الرسالة</h1>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full p-3 rounded-lg border transition-all duration-300 focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-green2/80 to-dark-green2/60 border-gold/30 text-gold placeholder-gold/50 focus:border-gold focus:ring-gold/30' 
                          : 'bg-gradient-to-r from-white to-cream/30 border-maroon/20 focus:border-maroon focus:ring-maroon/30'
                      }`}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-gold to-gold/80 text-dark-green2 hover:from-gold/90 hover:to-gold/70 shadow-lg hover:shadow-gold/30'
                        : 'bg-gradient-to-r from-maroon to-maroon/80 text-cream hover:from-maroon/90 hover:to-maroon/70 shadow-lg hover:shadow-maroon/30'
                    }`}
                  >
                    <Send className="h-5 w-5" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;