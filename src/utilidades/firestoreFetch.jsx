import { query, where, orderBy, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from '../utilidades/firebaseConfig';

const productosRef = collection( db, "productos" );

export const firestoreFetchAll = async ( idMascota ) => {
    let qry;
    if ( idMascota ) {
        qry = query(
            productosRef, where( 'idMascota', '==', idMascota ) 
        );
    } else {
        qry = query(
            productosRef, orderBy( 'top' )
        );
    }

    const querySnapshot = await getDocs( qry );
    const dataFromFirebase = querySnapshot.docs.map( item => ( {
        id: item.id,
        ...item.data()
    } ) );
    return dataFromFirebase;
}

export const firestoreFetchOne = async ( idProducto ) => {
    const documentRef = doc( db, "productos", idProducto );
    const documentSnap = await getDoc( documentRef );
    
    if ( documentSnap.exists() ) {
      return {
          id: idProducto,
          ...documentSnap.data()
      }
    } else {
      console.log("Documento no encontrado!");
    }
}

export const createOrderInFirestore = async ( order ) => {
    // Add a new document with a generated id
    const newOrderRef = doc(collection(db, "orders"));
    // later...
    await setDoc(newOrderRef, order);
    return newOrderRef;
}