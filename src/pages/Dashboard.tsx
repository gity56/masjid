import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../context/AuthContext';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { Award, Clock } from 'lucide-react';

interface Mark {
  id: string;
  evaluation_date: string;
  mark: number;
  subject: string;
  notes: string;
}

interface AppUser {
  uid: string;
  email?: string | null;
  displayName?: string | null;
}

function StudentDashboard() {
  const { theme } = useTheme();
  const { user } = useAuth() as { user: AppUser | null };
  
  const [marks, setMarks] = useState<Mark[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize Firestore
  const db = getFirestore();

  // Function to add a test document for debugging
  const addTestDocument = async () => {
    if (!user) return;
    
    try {
      const docRef = await addDoc(collection(db, 'marks'), {
        student_id: user.uid,
        evaluation_date: new Date().toISOString().split('T')[0],
        mark: 95,
        subject: "Test Subject",
        notes: "Test Note"
      });
      console.log("Test document added with ID:", docRef.id);
      
      // Reload data after adding test document
      fetchData();
    } catch (error) {
      console.error("Error adding test document:", error);
      setError("Failed to add test document");
    }
  };

  // Extract fetchData as a named function to call it after adding test data
  const fetchData = async () => {
    if (!user) {
      console.log("No user is logged in");
      setLoading(false);
      return;
    }
  
    console.log("Current user ID:", user.uid);
  
    try {
      setError(null);
      
      // Try different queries to identify the issue
      
      // Try without orderBy first to avoid composite index requirement
      const simpleQuery = query(
        collection(db, 'marks'),
        where('student_id', '==', user.uid)
      );
      
      let marksSnapshot = await getDocs(simpleQuery);
      console.log("Simple query returned", marksSnapshot.size, "documents");
      
      // If no documents found, try alternative field names
      if (marksSnapshot.empty) {
        console.log("Trying alternative field name 'studentId'");
        const alternativeQuery = query(
          collection(db, 'marks'),
          where('studentId', '==', user.uid)
        );
        
        marksSnapshot = await getDocs(alternativeQuery);
        console.log("Alternative query returned", marksSnapshot.size, "documents");
      }
      
      // Log document snapshots for debugging
      if (marksSnapshot.empty) {
        console.log("No matching documents found with any field name");
        
        // Try a collection-only query to see if any documents exist at all
        const allDocsQuery = query(collection(db, 'marks'));
        const allDocs = await getDocs(allDocsQuery);
        console.log("Total documents in collection:", allDocs.size);
        
        if (allDocs.size > 0) {
          console.log("Sample document fields:", allDocs.docs[0].data());
        }
      }
      
      const fetchedMarks = marksSnapshot.docs.map(doc => {
        const data = doc.data();
        console.log("Document data:", data);
        return {
          id: doc.id,
          evaluation_date: data.evaluation_date || data.evaluationDate || '',
          mark: data.mark || 0,
          subject: data.subject || '',
          notes: data.notes || '',
        };
      });
      
      // Sort manually instead of using orderBy to avoid index issues
      fetchedMarks.sort((a, b) => 
        new Date(b.evaluation_date).getTime() - new Date(a.evaluation_date).getTime()
      );
      
      console.log("Processed marks:", fetchedMarks);
      setMarks(fetchedMarks);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError("Failed to load marks data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Small delay to ensure authentication is complete
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="islamic-pattern min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto rounded-lg shadow-xl p-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h1 className="text-3xl font-bold text-center mb-8 font-islamic">لوحة تحكم الطالب</h1>

          {/* Add a button to manually add test data */}
          <div className="mb-6 text-center">
            <button 
              onClick={addTestDocument}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Add Test Mark
            </button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg text-center">
              <Award className="mx-auto h-8 w-8 mb-2 text-purple-600 dark:text-purple-400" />
              <h3 className="font-bold">متوسط العلامات</h3>
              <p className="text-2xl font-bold">
                {marks.length > 0
                  ? Math.round(marks.reduce((acc, m) => acc + m.mark, 0) / marks.length)
                  : 0}%
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg text-center">
              <Clock className="mx-auto h-8 w-8 mb-2 text-purple-600 dark:text-purple-400" />
              <h3 className="font-bold">التقييمات</h3>
              <p className="text-2xl font-bold">{marks.length}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">سجل التقييمات</h2>
            {marks.length === 0 ? (
              <p className="text-center py-4">لا توجد تقييمات بعد</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-right py-3">التاريخ</th>
                      <th className="text-right py-3">المادة</th>
                      <th className="text-right py-3">العلامة</th>
                      <th className="text-right py-3">ملاحظات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marks.map((mark) => (
                      <tr
                        key={mark.id}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <td className="py-3">
                          {mark.evaluation_date ? new Date(mark.evaluation_date).toLocaleDateString('ar-EG') : ''}
                        </td>
                        <td className="py-3">{mark.subject}</td>
                        <td className="py-3">{mark.mark}%</td>
                        <td className="py-3">{mark.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;