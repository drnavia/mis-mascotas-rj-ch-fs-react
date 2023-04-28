import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contextos/CartContext";

const CartWidget = () => {

    const contextoCarrito = useContext( CartContext );

    return (
        <>
            <FontAwesomeIcon icon={ faShoppingCart } size='2x' />
            { 
                contextoCarrito.calcBadgeQty() > 0
                && <span className="badge rounded-pill bg-dark badge-carrito">
                    <span className="cantCarrito">{ contextoCarrito.calcBadgeQty() }</span>
                </span>
            }
            
        </>
    );
}

export default CartWidget;