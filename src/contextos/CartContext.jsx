import { createContext, useState } from "react";

// Creamos el contexto "CartContext"
export const CartContext = createContext();

// Personalizamos el "CartContext.Provider"
const CartContextProvider = ( { children } ) => {
    // Creamos los estado locales
    const [ cartList, setCartList ] = useState( [] );

    const addToCart = ( producto, cant ) => {
        // Verificamos si el producto existe en el carrito
        let isInCart = cartList.find( 
            item => item.itemId === producto.id 
        );
        
        if ( isInCart === undefined ) {
            setCartList( [
                ...cartList,
                {
                    itemId:     producto.id,
                    itemImagen: producto.imagenUrl,
                    itemNombre: producto.nombre,
                    itemPrecio: producto.precio,
                    itemCant:   cant
                }
            ] );
        } else {
            isInCart.itemCant += cant;

            setCartList( [
                ...cartList
            ] );
        }
    }

    const clearCart = () => {
        
        setCartList( [] );
    }

    const removeItem = ( id ) => {
        let filtro = cartList.filter( 
            item => item.itemId != id 
        );
        
        setCartList( filtro );
    }

    const calcTotalItem = ( itemId ) => {
        let idx = cartList.map(
            item => item.itemId
        ).indexOf( itemId );
        // Calculamos el total por producto
        return cartList[idx].itemPrecio * cartList[idx].itemCant;
    }

    const calcTotalCart = () => {
        let valor = 0;
        let totalItems = cartList.map(
            item => calcTotalItem( item.itemId )
        );
        // Recorremos el arreglo "totalItems" con el "for of"
        for( let item of totalItems ) valor += item;
        return valor;
    }

    const calcBadgeQty = () => {
        let valor = 0;
        let qtysItems = cartList.map(
            item => item.itemCant
        );
        // Recorremos el arreglo "qtysItems" con el "for each"
        qtysItems.forEach( (item) => { valor += item } );
        return valor;
    }

    return (
        // Agregamos los estados locales para hacerlos globales (enviar como objetos, entre "{}")
        <CartContext.Provider value={ { cartList, addToCart, clearCart, removeItem, calcTotalItem, calcTotalCart, calcBadgeQty } }>
            {/* Configuramos los hijos */}
            { children }
        </CartContext.Provider>
    );
};
// Si exportamos por default, cuando importamos no es necesario el uso de llaver "{}"
export default CartContextProvider; 