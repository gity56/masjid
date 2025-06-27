import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import BackgroundVideo from '../components/bg-video';

// Add custom CSS for animations
const customStyles = `
  @keyframes shake {
    0%, 100% { transform: translateX(0) scale(1.05); }
    25% { transform: translateX(-5px) scale(1.05); }
    75% { transform: translateX(5px) scale(1.05); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-shake {
    animation: shake 0.5s ease-in-out;
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;

// Inject styles
if (typeof document !== 'undefined' && !document.querySelector('#quiz-animations')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'quiz-animations';
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

const quranVerses = [
  {
    start: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ",
    end: "إِلَّا لِيَعْبُدُونِ",
    options: [
      "إِلَّا لِيَعْبُدُونِ",
      "إِلَّا لِيَعْمَلُونَ",
      "إِلَّا لِيَتَّقُونَ",
      "إِلَّا لِيُؤْمِنُونَ"
    ]
  },
  {
    "start": "قُلْ هُوَ اللَّهُ",
    "end": "أَحَدٌ",
    "options": [
      "الصَّمَدُ",
      "أَحَدٌ",
      "الْوَاحِدُ",
      "الْعَظِيمُ"
    ]
  },
  {
    "start": "اللَّهُ لَا إِلَٰهَ إِلَّا",
    "end": "هُوَ الْحَيُّ الْقَيُّومُ",
    "options": [
      "الرَّحْمَٰنُ الرَّحِيمُ",
      "الْمَلِكُ الْقُدُّوسُ",
      "السَّلَامُ الْمُؤْمِنُ",
      "هُوَ الْحَيُّ الْقَيُّومُ"
    ]
  },
  {
    "start": "إِنَّا أَعْطَيْنَاكَ",
    "end": "الْكَوْثَرَ",
    "options": [
      "الْفُرْقَانَ",
      "الْكَوْثَرَ",
      "الْقُرْآنَ",
      "النُّورَ"
    ]
  },
  {
    "start": "وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي",
    "end": "خُسْرٍ",
    "options": [
      "فَوْزٍ",
      "عَذَابٍ",
      "خُسْرٍ",
      "رَحْمَةٍ"
    ]
  },
  {
    "start": "مَالِكِ يَوْمِ",
    "end": "الدِّينِ",
    "options": [
      "الْحِسَابِ",
      "الْقِيَامَةِ",
      "الدِّينِ",
      "الْفَتْحِ"
    ]
  },
  {
    "start": "اهْدِنَا الصِّرَاطَ",
    "end": "الْمُسْتَقِيمَ",
    "options": [
      "الْمُسْتَقِيمَ",
      "الْمُؤْمِنِينَ",
      "الْمُتَّقِينَ",
      "الْأَبْرَارَ"
    ]
  },
  {
    "start": "كُلُّ نَفْسٍ ذَائِقَةُ",
    "end": "الْمَوْتِ",
    "options": [
      "الْعَذَابِ",
      "النَّارِ",
      "الْحَيَاةِ",
      "الْمَوْتِ"
    ]
  },
  {
    "start": "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ وَالَّذِي يُمِيتُنِي",
    "end": "ثُمَّ يُحْيِينِ",
    "options": [
      "ثُمَّ يُحْيِينِ",
      "ثُمَّ يُرْزِقُنِي",
      "ثُمَّ يَهْدِينِ",
      "ثُمَّ يُنْجِينِ"
    ]
  },
  {
    "start": "وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ",
    "end": "الْبَاطِلُ",
    "options": [
      "الشَّرُّ",
      "الضَّلَالُ",
      "الْبَاطِلُ",
      "الكَذِبُ"
    ]
  },
  {
    "start": "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا",
    "end": "وُسْعَهَا",
    "options": [
      
      "قُدْرَتَهَا",
      "وُسْعَهَا",
      "إِيمَانَهَا",
      "عَمَلَهَا"
    ]
  }
  // ... (Autres questions ici)
];

function Home() {
  const { theme } = useTheme();
  const [currentVerse, setCurrentVerse] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (answer: string) => {
    const correct = answer === quranVerses[currentVerse].end;
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (!correct) {
      setCorrectAnswer(quranVerses[currentVerse].end);
    } else {
      setCorrectAnswer(null);
    }
    
    // Auto hide feedback after animation
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % quranVerses.length);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectAnswer(null);
    setShowFeedback(false);
  };

  return (
    <div className={`relative min-h-screen ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-dark-green2 to-green2 text-gold' 
        : 'bg-cream text-dark-maroon'
    }`}>
      <BackgroundVideo />
      <div className="relative z-10 min-h-screen py-12 container mx-auto px-4">
        <div className={`max-w-4xl mx-auto rounded-lg shadow-xl p-8 transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-dark-green2 via-green2 to-dark-green2 text-gold' 
            : 'bg-gradient-to-br from-cream via-cream-dark to-cream text-dark-maroon'
        }`}>
          <h1 className={`text-4xl font-bold ts text-center mb-8 ${
            theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
          }`}>
            مدرسة عقبة بن نافع القرآنية
          </h1>

          <div className="mt-12 text-center">
            <h2 className={`text-2xl font-bold mb-6 quran-text ${
              theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
            }`}>
              اختبر معرفتك القرآنية
            </h2>
            <div className={`p-6 rounded-lg tsr shadow-lg transition-all duration-500 hover:shadow-xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-t from-green2 to-dark-green2' 
                : 'bg-gradient-to-t from-cream-dark to-cream'
            } ${
              selectedAnswer && isCorrect === true 
                ? 'animate-pulse ring-4 ring-green-400 ring-opacity-75' 
                : selectedAnswer && isCorrect === false
                ? 'ring-4 ring-red-400 ring-opacity-75'
                : ''
            }`}>
              <p className={`text-xl mb-4 quran-tex ${
                theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
              }`}>
                {quranVerses[currentVerse].start}...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 quran-tex">
                {quranVerses[currentVerse].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                    className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      selectedAnswer === option
                        ? isCorrect
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg animate-pulse scale-110'
                          : 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg animate-shake scale-105'
                        : correctAnswer === option
                        ? 'bg-gradient-to-r from-green-300 to-green-400 text-black shadow-lg animate-pulse scale-105'
                        : theme === 'dark'
                        ? 'bg-gradient-to-r from-dark-green2 to-green2 text-gold hover:from-green2 hover:to-dark-green2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
                        : 'bg-gradient-to-r from-cream to-cream-dark hover:from-cream-dark hover:to-cream shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedAnswer && (
                <div className="mt-6 space-y-4">
                  {/* Feedback Message */}
                  <div className={`text-center transition-all duration-500 transform ${
                    showFeedback ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {isCorrect ? (
                      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                          <span className="text-white text-xl">✓</span>
                        </div>
                        <p className={`text-xl quran-text font-bold ${
                          theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>
                          أحسنت! إجابة صحيحة
                        </p>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce delay-100">
                          <span className="text-white text-xl">🎉</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-ping">
                            <span className="text-white text-xl">✗</span>
                          </div>
                          <p className={`text-xl quran-text font-bold ${
                            theme === 'dark' ? 'text-red-400' : 'text-red-600'
                          }`}>
                            إجابة خاطئة
                          </p>
                        </div>
                        <p className={`text-lg quran-text ${
                          theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>
                          الإجابة الصحيحة: {correctAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Next Button */}
                  <button
                    onClick={nextVerse}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg animate-fadeIn ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-dark-green2 to-green2 text-gold hover:from-green2 hover:to-dark-green2'
                        : 'bg-gradient-to-r from-cream-dark to-cream text-dark-maroon hover:from-cream hover:to-cream-dark'
                    }`}
                  >
                    السؤال التالي
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 quran-text text-center">
            <h2 className={`text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
            }`}>
              مرحباً بكم في مدرستنا
            </h2>
            <p className={`text-3xl leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
            }`}>
              نحن نقدم تعليماً عالي الجودة للقرآن الكريم وعلومه، مع التركيز على التجويد والحفظ والفهم.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-green2 to-dark-green2' 
                  : 'bg-gradient-to-br from-cream-dark to-cream'
              }`}>
                <h3 className={`text-5xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>
                  برامجنا
                </h3>
                <ul className={`text-3xl space-y-2
                 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                } 
                  
                  `}>
                  <li>تحفيظ القرآن الكريم</li>
                  <li>دروس التجويد</li>
                  <li>تفسير القرآن</li>
                  <li>علوم القرآن</li>
                </ul>
              </div>
              <div className={`text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-bl from-green2 to-dark-green2' 
                  : 'bg-gradient-to-bl from-cream-dark to-cream'
              }`}>
                <h3 className={`text-5xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
                }`}>
                  مميزاتنا
                </h3>
                <ul className={`text-3xl space-y-2
                 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                } 
                  
                  `}>
                  <li>معلمون متخصصون</li>
                  <li>فصول صغيرة</li>
                  <li>متابعة فردية</li>
                  <li>شهادات معتمدة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;