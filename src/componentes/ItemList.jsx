import { useEffect } from "react";
import Item from "./Item";

const ItemList = ( { productos } ) => {

    // Intercambiabilidad (productos)
    if ( productos.length > 0 ) {
        return (
            <>
                <div className="div-content">
                    <h5>CATÁLOGO DE PRODUCTOS</h5>
                </div>
                <div className="div-catalogo cards">
                    { productos.map( 
                        producto => <Item key={ producto.id } 
                                          id={ producto.id } 
                                          nombre={ producto.nombre } 
                                          marca={ producto.marca } 
                                          imagenUrl={ producto.imagenUrl } 
                                          idMascota={ producto.idMascota } 
                                          mascota={ producto.mascota } 
                                          tipo={ producto.tipo } 
                                          peso={ producto.peso } 
                                          precio={ producto.precio } 
                                          stock={ producto.stock } />
                    ) }
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="div-content">
                        <h5>CATÁLOGO DE PRODUCTOS</h5>
                    </div>
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        );
    };

}

export default ItemList;