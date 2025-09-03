// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuração Firebase usando variáveis de ambiente
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Verificar se Firebase está configurado
const isFirebaseConfigured = () => {
  return !!(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID !== 'your-project-id'
  );
};

console.log('🔥 Firebase configurado:', isFirebaseConfigured() ? '✅ SIM' : '❌ NÃO - usando dados mock');

// Tipos
export interface Employee {
  id?: string;
  nome: string;
  email: string;
  departamento: string;
  ativo: boolean;
  createdAt?: Date;
}

// Função para salvar colaborador
export const saveEmployee = async (employeeData: Omit<Employee, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, "colaboradores"), {
      ...employeeData,
      createdAt: new Date()
    });
    console.log("Colaborador salvo com ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao salvar colaborador: ", error);
    throw error;
  }
};

// Função para carregar colaboradores
export const loadEmployees = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "colaboradores"));
    const employees: Employee[] = [];
    querySnapshot.forEach((doc) => {
      employees.push({
        id: doc.id,
        ...doc.data()
      } as Employee);
    });
    return employees;
  } catch (error) {
    console.error("Erro ao carregar colaboradores: ", error);
    throw error;
  }
};
