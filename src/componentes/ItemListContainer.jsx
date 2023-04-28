import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Row } from "react-bootstrap";
import ItemList from "./ItemList";
import { firestoreFetchAll } from "../utilidades/firestoreFetch";

export default function ItemListContainer() {

    const [ datos, setDatos ] = useState( [] );
    const { idMascota } = useParams();

    useEffect( () => {
        // Obtenemos la información de Firestore
        firestoreFetchAll( idMascota )
            .then( result => setDatos( result ) )
            .catch( error => console.log( error ) );

    // Fix: hacemos que el render dependa del "idMascota" en vez de "datos"
    }, [ idMascota ] ); // componentDidUpdate
    
    return (
        <Row>
            <div id="main-content">
                <ItemList productos={ datos } />
            </div>
        </Row>
    );
}