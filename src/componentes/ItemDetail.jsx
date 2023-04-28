import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../contextos/CartContext';

const ItemDetail = ( { producto } ) => {

    const [ itemCount, setItemCount ] = useState( 0 );
    const carrito = useContext(CartContext);

    const onAdd = ( cant ) => {
        alert( "Has seleccionado " + cant + " unid. para agregar al carrito!" );
        setItemCount( cant );
        carrito.addToCart( producto, cant );
    }

    if ( producto.nombre ) {
        return (
            <>
                <div className="div-content">
                    <h5>DETALLE DEL PRODUCTO</h5>
                </div>
                <div className="cards">
                    <div className="box-det">
                        <div className="flex-row">
                            
                            <div className="card-content">
                                <div className="flex-col">
                                    <div className="card-titulo">
                                        <h4 className="nombre">{ producto.nombre }</h4>
                                    </div>
                                    <div className="card-badge">
                                        <p>
                                            <span className="badge bg-dark">{ producto.marca }</span>&nbsp; 
                                            { 
                                                producto.idMascota === 'KfPcH5jy5Av6dmxdXfGT'
                                                ? <span className="badge bg-primary">Perro</span>
                                                : ( producto.idMascota === 'ATVYONAxa3gjlp5TYZOn' 
                                                    ? <span className="badge bg-success">Gato</span>
                                                    : ( producto.idMascota === 'g5mw3cP9t8IVCUaBlgJK'
                                                        ? <span className="badge bg-danger">Conejo</span>
                                                        : <span className="badge bg-secondary">********</span> ) )
                                            }
                                            &nbsp; 
                                            <span className="badge bg-info text-dark">{ producto.peso }</span>&nbsp; 
                                            <span className="badge bg-warning text-dark">{ producto.tipo }</span>
                                        </p>
                                    </div>
                                    <div className="card-descrip">
                                        <p>{ producto.descripcion }</p>
                                    </div>
                                    <div className="card-eventos">
                                        <p>
                                            Stock: <span className="stock">{ producto.stock }</span> u.
                                        </p>
                                        <div>
                                            {
                                                // Intercambiabilidad (itemCount)
                                                itemCount === 0
                                                    ? <ItemCount stock={ producto.stock } 
                                                                 initial={ itemCount } 
                                                                 onAdd={ onAdd } />
                                                    : <Link to='/cart'>
                                                          <button type="button" className="btn btn-info text-dark">VERIFICAR CARRITO</button>
                                                      </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-imagen">
                                <img src={ producto.imagenUrl } alt={ producto.nombre } className="imagen-producto-detalle center" />
                                <p>
                                    $ <span className="precio">{ producto.precio }</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="div-content">
                    <h5>DETALLE DEL PRODUCTO</h5>
                </div>
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        );
    };
}

export default ItemDetail;