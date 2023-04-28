import { useContext } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { CartContext } from "../contextos/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrderInFirestore } from "../utilidades/firestoreFetch";
import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../utilidades/firebaseConfig";


export default function Cart() {
    // Usamos el contexto
    const carrito = useContext( CartContext );

    const createOrder = () => {
        let order = {
            buyer: {
                name: 'Diego de la Vega',
                phone: '+54 91130001000',
                email: 'diegodelavega@elzorro.com'
            },
            items: carrito.cartList.map( item => ( {
                id: item.itemId,
                price: item.itemPrecio,
                title: item.itemNombre,
                qty: item.itemCant
            } ) ),
            total: carrito.calcTotalCart(),
            date: serverTimestamp()
        }

        createOrderInFirestore( order )
            .then( result => alert( 'Tu orden ha sido creada con éxito!!! \n\nOrden ID: ' + result.id + '\n' ) )
            .catch( error => console.log( error ) );

        carrito.cartList.forEach( async ( item ) => {
            const itemRef = doc( db, "productos", item.itemId );

            await updateDoc( itemRef, {
                stock: increment( -item.itemCant )
            } );
        } )

        carrito.clearCart();
    }

    return (
        <Row>
            <div id="main-content">
                <div className="div-content">
                    <h5>MI CARRITO</h5>
                </div>
                <div className="div-carrito">
                    <div className="d-flex row align-items-center">
                                        
                        <div className="d-flex justify-content-left col-6">
                            {
                                carrito.cartList.length > 0
                                ? <Link to='/'><button type="button" className="btn btn-info text-dark">CONTINUAR COMPRANDO</button></Link>
                                : <Link to='/'><button type="button" className="btn btn-info text-dark">VOLVER AL CATALOGO</button></Link>
                            }
                        </div>
                        <div className="d-flex justify-content-end col-6">
                            {
                                carrito.cartList.length > 0
                                && <button type="button" className="btn btn-danger" onClick={ carrito.clearCart }>ELIMINAR PRODUCTOS</button>
                            }
                        </div>
                    </div>
                    <div className="d-flex row align-items-center">
                                        
                        <div className="d-flex justify-content-center col-12">
                            {
                                carrito.cartList.length <= 0
                                && <p><span className="carrito-vacio-texto">¡ T U &nbsp; C A R R I T O &nbsp; E  S T Á &nbsp; V A C I O !</span><br />Descubrí las categorías y elegí tus productos.</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="div-content">
                    <div id="contenedor-carrito">
                        {
                            carrito.cartList.length > 0 
                            && carrito.cartList.map( item => 
                                <div className="d-flex row align-items-center carrito-item rounded" key={ item.itemId }>
                                    
                                    <div className="d-flex justify-content-center col-2">
                                        <img src={ item.itemImagen } alt="" className="imagen-carrito" width="50" />
                                    </div>
                                    <div className="d-flex justify-content-center col-5">
                                        <h5>{ item.itemNombre }</h5>
                                    </div>
                                    <div className="d-flex justify-content-center col-2">
                                        <p>
                                            <span className="cantidad-producto">{ item.itemCant }</span> uds<br /> $ <span className="cantidad-producto">{ item.itemPrecio }</span> c/u
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end col-2">
                                        <p></p>
                                        <p>$ <span className="precio-carrito">{ carrito.calcTotalItem( item.itemId ) }</span></p>
                                    </div>
                                    <div className="d-flex justify-content-start col-1">
                                    <button type="button" className="btn btn-danger borrar-producto" onClick={ () => carrito.removeItem( item.itemId ) }>X</button>
                                    </div>
                                </div> 
                            )
                        }
                        {
                            carrito.cartList.length > 0 
                            && <div className="d-flex row align-items-center carrito-total rounded">
                                    <div className="d-flex justify-content-center col-2"></div>
                                    <div className="d-flex justify-content-center col-5"></div>
                                    <div className="d-flex justify-content-center col-2">
                                        <p><span className="precio-carrito">TOTAL</span></p>
                                    </div>
                                    <div className="d-flex justify-content-end col-2">
                                    <p>$ <span className="precio-carrito">{ carrito.calcTotalCart() }</span></p>
                                    </div>
                                    <div className="d-flex justify-content-start col-1"></div>
                                </div>
                        }
                    </div>
                    <div id="comprar-boton-carrito">
                        <div className="d-flex row align-items-center">
                            <div className="d-flex justify-content-left col-3"></div>
                            <div className="d-flex justify-content-center col-6">
                                {
                                    carrito.cartList.length > 0
                                    && <button type="button" className="btn btn-success" onClick={ createOrder }>REALIZAR COMPRA</button>
                                }
                            </div>
                            <div className="d-flex justify-content-end col-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    );
}