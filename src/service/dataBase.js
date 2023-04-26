import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, writeBatch, query, orderBy, where, addDoc } from "firebase/firestore";
import baseDatos from "../baseDatos/baseDatos";




const firebaseConfig = {
  apiKey: "AIzaSyDgoR6-IQWM-rA1TQVzhQlaOBpGuPx_3D4",
  authDomain: "shootemotion-react.firebaseapp.com",
  projectId: "shootemotion-react",
  storageBucket: "shootemotion-react.appspot.com",
  messagingSenderId: "700040751407",
  appId: "1:700040751407:web:0c45a4630552c8684359da"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts_(){
    // Traer los productos de mi coleccion
    // 1. Creo la referencia a la coleccion creada en FireBase
const productsRef = collection(db, "baseDatos")
const q = query(productsRef, orderBy("index"))

// 2. Pido los documentos que estan en esa coleccion
const productsSnap = await getDocs(q)
const documents = productsSnap.docs
// 3. extraer los datos de los documentos.
const docsData = documents.map((doc) =>{
    return {id: doc.id, ...doc.data()}
})
return docsData
}


export async function getProducts_Category(CategoryId){
const productsRef = collection(db, "baseDatos")
const q = query(productsRef, where("category","==",CategoryId))
const productsSnap = await getDocs(q)
const documents = productsSnap.docs
const docsData = documents.map((doc) =>{
  return {id: doc.id, ...doc.data()}
})
return docsData
}



export async function createOrder(order) {
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id; 
}

export async function createUser(user) {
  try {
    const usersRef = collection(db, "users");
    const newUser = await addDoc(usersRef, user);
    console.log("Nuevo usuario agregado con ID: ", newUser.id);
  } catch (error) {
    console.error("Error al agregar usuario: ", error);
  }
}


// Busco el producto con el IdURL- ese es defindo por el UseParam en el comp ItemDetailContainer
export async function getSingleProduct(idURL){
const docRef = doc(db, "baseDatos",idURL)
const docSnap = await getDoc(docRef)
return {id: docSnap.id, ...docSnap.data()}
}




export async function exportDataWithBatch() {
  const collectionRef = collection(db, "baseDatos");
  const batch = writeBatch(db);

  for (let item of baseDatos) {
    item.index = item.id;
    delete item.id;

    // Buscar documentos por el campo "index"
    const querySnapshot = await getDocs(query(
      collectionRef,
      where("index", "==", item.index)
    ))

    // Si no hay documentos con ese valor, insertar uno nuevo
    if (querySnapshot.empty) {
      const newDoc = doc(collectionRef);
      batch.set(newDoc, item);
    }
  }

  await batch.commit();
}