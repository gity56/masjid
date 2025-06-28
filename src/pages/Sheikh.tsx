import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

function Sheikh() {
  const { theme } = useTheme();

  return (
    <div className={`islamic-pattern quran-text min-h-screen py-12 ${
      theme === 'dark' 
        ? 'islamic-pattern2 bg-gradient-to-b from-dark-green2 to-green2 text-gold' 
        : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto rounded-lg shadow-xl p-8 ${
          theme === 'dark' ? 'bg-dark-green2 text-gold' : 'bg-white'
        }`}>
          <h1 className={`text-4xl font-bold text-center quran-text mb-8 ${
            theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
          }`}>الشيخ سامي كمون</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/1.png"
                alt="صورة الشيخ"
                className="rounded-lg shadow-lg mb-4 w-full fade-border"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-4">
                <h2 className={`font-bold mb-4 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>السيرة الذاتية</h2>
                <p className={`text-lg t leading-relaxed
                  ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }
                  
                  `}>
                  الشيخ سامي كمون معلم متميز في المدرسة القرآنية، يجمع بين الصوت العذب والتدريس المتقن، مكرّسًا جهوده لتحفيظ القرآن وتعليم التجويد بفهم عميق.
                </p>
                
                <div className="space-y-2">
                  <h3 className={`font-bold ${
                    theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                  }`}>المؤهلات العلمية:</h3>
                  <ul className={`list-disc t list-inside space-y-1 mr-4
                                      ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }
                    
                    `}>
                    <li>دكتوراه في القراءات من جامعة الأزهر</li>
                    <li>إجازة في القراءات العشر الكبرى</li>
                    <li>إجازة في علوم الحديث</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className={`font-bold ${
                    theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                  }`}>الخبرات التدريسية:</h3>
                  <ul className={`list-disc t list-inside space-y-1 mr-4
                                      ${
                    theme === 'dark' ? 'text-gray-300' : 'text-garay-900'
                  }
                    
                    `}>
                    <li>٢٠ عاماً في تعليم القرآن الكريم</li>
                    <li>إجازة أكثر من ١٠٠٠ طالب في القراءات</li>
                    <li>مؤلف لعدة كتب في علوم القرآن</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`mt-8 p-6 ${
              theme === 'dark' ? 'bg-green2' : 'bg-cream-dark dark:bg-cream-dark'
            } rounded-lg`}
          >
            <h2 className={`font-bold mb-4 ${
              theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
            }`}>رسالة الشيخ</h2>
            <p className={`text-lg t leading-relaxed
                                        ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }
                    
              
              `}>
              نسعى لتخريج جيل متمكن من كتاب الله، قادر على فهمه وتدبره والعمل به. نؤمن بأن تعليم القرآن الكريم رسالة سامية تتطلب الإخلاص والتفاني.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Sheikh;