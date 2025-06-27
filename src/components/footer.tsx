import { useState, useEffect } from "react";
import { FaStarAndCrescent } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const versesList = [
  { verse: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "Indeed, with hardship comes ease.", surah: "Al-Inshirah", surahArabic: "الشرح", number: 6 },
  { verse: "وَقُل رَّبِّ زِدْنِي عِلْمًا", translation: "And say, 'My Lord, increase me in knowledge.'", surah: "Taha", surahArabic: "طه", number: 114 },
  { verse: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translation: "Allah does not burden a soul beyond that it can bear.", surah: "Al-Baqarah", surahArabic: "البقرة", number: 286 },
  { verse: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", translation: "And when I am ill, it is He who cures me.", surah: "Ash-Shu'ara", surahArabic: "الشعراء", number: 80 },
  { verse: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", translation: "Indeed, We have granted you, [O Muhammad], Al-Kawthar.", surah: "Al-Kawthar", surahArabic: "الكوثر", number: 1 },
  { verse: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "For indeed, with hardship will be ease.", surah: "Al-Inshirah", surahArabic: "الشرح", number: 5 },
  { verse: "فَاذْكُرُونِي أَذْكُرْكُمْ", translation: "So remember Me; I will remember you.", surah: "Al-Baqarah", surahArabic: "البقرة", number: 152 },
  { verse: "رَّبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي", translation: "My Lord, make me an establisher of prayer, and [many] from my descendants.", surah: "Ibrahim", surahArabic: "إبراهيم", number: 40 },
  { verse: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ", translation: "Indeed, Allah loves the doers of good.", surah: "Al-Baqarah", surahArabic: "البقرة", number: 195 },
  { verse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", translation: "Indeed, Allah is with the patient.", surah: "Al-Baqarah", surahArabic: "البقرة", number: 153 },
];

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % versesList.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // The theme will automatically update thanks to the useTheme hook
  return (
    <footer 
      className={`${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-dark-green2 to-green2' 
          : 'bg-gradient-to-b from-cream-dark to-transparent'
      } ${
        theme === 'dark' ? 'text-gold' : 'text-dark-maroon'
      }
      py-6 text-center relative overflow-hidden`}
    >
      <FaStarAndCrescent className="absolute top-2 left-2 text-3xl opacity-60" />
      <FaStarAndCrescent className="absolute top-2 right-2 text-3xl opacity-60" />
      <FaStarAndCrescent className="absolute bottom-2 left-2 text-3xl opacity-60" />
      <FaStarAndCrescent className="absolute bottom-2 right-2 text-3xl opacity-60" />

      <p
        className={`ts transition-all duration-700 ease-in-out transform ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <span className={`text-2xl ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} text-bold italic`}>
          "{versesList[currentIndex].translation}"
        </span>
        <br />
        {versesList[currentIndex].verse} <br />
        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          ({versesList[currentIndex].surah} - {versesList[currentIndex].surahArabic} {versesList[currentIndex].number})
        </span>
      </p>
    </footer>
  );
};

export default Footer;