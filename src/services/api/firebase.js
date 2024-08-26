import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

// Firebase конфігурація
const firebaseConfig = {
  apiKey: "AIzaSyDgty4m1--Rus0HGkg-jPMVZuq94badEP4",
  authDomain: "bankdash-f1454.firebaseapp.com",
  projectId: "bankdash-f1454",
  storageBucket: "bankdash-f1454.appspot.com",
  messagingSenderId: "1059876621429",
  appId: "1:1059876621429:web:2c5b5554f5742642f03c3c"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Функція для завантаження зображення в Firebase Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, `${currentUser.uid}.png`);

  setLoading(true);

  try {
    // Завантаження файлу в Firebase Storage
    await uploadBytes(fileRef, file);

    // Отримання URL завантаженого зображення
    const photoURL = await getDownloadURL(fileRef);

    // Оновлення профілю користувача з новим URL зображення
    await updateProfile(currentUser, { photoURL });

    setLoading(false);

    // Повертаємо URL для подальшого використання
    return photoURL;
  } catch (error) {
    console.error("Помилка під час завантаження фото: ", error);
    setLoading(false);
    alert("Не вдалося завантажити фото. Спробуйте ще раз.");
    return null;
  }
}

export default app;