import { useTheme } from '../hooks/useTheme';
import { Book, Users, Award, Clock } from 'lucide-react';

function About() {
  const { theme } = useTheme();

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
            }`}>عن المدرسة</h1>

            <div className={`mb-12 rounded-lg p-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-dark-green2/90 to-green2/30 border border-gold/20 shadow-lg'
                : 'bg-gradient-to-br from-white/90 to-cream/40 border border-maroon/10 shadow-md'
            }`}>
              <img 
                src="/4.jpg"
                alt="المدرسة"
                className="rounded-lg shadow-lg w-full mb-6 h-81 object-cover"
              />
              <p className={`text-2xl leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
              }`}>
                تأسست مدرسة عقبة بن نافع القرآنية عام ١٩٩٠، وهي من أعرق المدارس القرآنية في المنطقة. تهدف المدرسة إلى تعليم القرآن الكريم وعلومه بأحدث الطرق التعليمية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`space-y-6 rounded-lg p-6 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-dark-green2/90 to-green2/30 border border-gold/20 shadow-lg'
                  : 'bg-gradient-to-br from-white/90 to-cream/40 border border-maroon/10 shadow-md'
              }`}>
                <h2 className={`text-4xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>رؤيتنا</h2>
                <div className={`p-4 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-green2/20 to-transparent border-r-4 border-gold/50'
                    : 'bg-gradient-to-r from-cream/40 to-transparent border-r-4 border-maroon/50'
                }`}>
                  <p className={`text-2xl leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                    أن نكون الصرح التعليمي الرائد في تخريج حفظة القرآن الكريم المتقنين لتلاوته والعاملين بأحكامه.
                  </p>
                </div>
              </div>

              <div className={`space-y-6 rounded-lg p-6 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-dark-green2/90 to-green2/30 border border-gold/20 shadow-lg'
                  : 'bg-gradient-to-br from-white/90 to-cream/40 border border-maroon/10 shadow-md'
              }`}>
                <h2 className={`text-4xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>رسالتنا</h2>
                <div className={`p-4 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-green2/20 to-transparent border-r-4 border-gold/50'
                    : 'bg-gradient-to-r from-cream/40 to-transparent border-r-4 border-maroon/50'
                }`}>
                  <p className={`text-2xl leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                    تقديم تعليم قرآني متميز يجمع بين الأصالة والمعاصرة، وتخريج جيل متمسك بكتاب الله تعالى.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`text-center p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green2/80 to-dark-green2/60 shadow-lg hover:shadow-gold/30 border border-gold/20' 
                  : 'bg-gradient-to-br from-cream/60 to-white/80 shadow-md hover:shadow-maroon/30 border border-maroon/10'
              }`}>
                <div className={`mb-4 p-3 rounded-full mx-auto w-fit ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gold/20 to-gold/10'
                    : 'bg-gradient-to-br from-maroon/20 to-maroon/10'
                }`}>
                  <Book className={`mx-auto h-12 w-12 ${
                    theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>50+</h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>برنامج تعليمي</p>
              </div>

              <div className={`text-center p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green2/80 to-dark-green2/60 shadow-lg hover:shadow-gold/30 border border-gold/20' 
                  : 'bg-gradient-to-br from-cream/60 to-white/80 shadow-md hover:shadow-maroon/30 border border-maroon/10'
              }`}>
                <div className={`mb-4 p-3 rounded-full mx-auto w-fit ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gold/20 to-gold/10'
                    : 'bg-gradient-to-br from-maroon/20 to-maroon/10'
                }`}>
                  <Users className={`mx-auto h-12 w-12 ${
                    theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>1000+</h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>طالب وطالبة</p>
              </div>

              <div className={`text-center p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green2/80 to-dark-green2/60 shadow-lg hover:shadow-gold/30 border border-gold/20' 
                  : 'bg-gradient-to-br from-cream/60 to-white/80 shadow-md hover:shadow-maroon/30 border border-maroon/10'
              }`}>
                <div className={`mb-4 p-3 rounded-full mx-auto w-fit ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gold/20 to-gold/10'
                    : 'bg-gradient-to-br from-maroon/20 to-maroon/10'
                }`}>
                  <Award className={`mx-auto h-12 w-12 ${
                    theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>30+</h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>معلم ومعلمة</p>
              </div>

              <div className={`text-center p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green2/80 to-dark-green2/60 shadow-lg hover:shadow-gold/30 border border-gold/20' 
                  : 'bg-gradient-to-br from-cream/60 to-white/80 shadow-md hover:shadow-maroon/30 border border-maroon/10'
              }`}>
                <div className={`mb-4 p-3 rounded-full mx-auto w-fit ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gold/20 to-gold/10'
                    : 'bg-gradient-to-br from-maroon/20 to-maroon/10'
                }`}>
                  <Clock className={`mx-auto h-12 w-12 ${
                    theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>33</h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>عام خبرة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;