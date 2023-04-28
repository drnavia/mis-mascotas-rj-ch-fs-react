import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Row } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utilidades/firestoreFetch";

const ItemDetailContainer = () => {
    const [ dato, setDato ] = useState( {} );
    const { idProducto } = useParams();

    useEffect( () => {
        firestoreFetchOne( idProducto )
            .then( result => setDato( result ) )
            .catch( err => console.log( err ) )
    }, [] );
    
    return (
        <Row>
            <div id="main-content">
                <ItemDetail producto={ dato } />
            </div>
        </Row>
    );
}

export default ItemDetailContainer;