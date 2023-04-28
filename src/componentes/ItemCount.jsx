import { useEffect, useState} from 'react';

const ItemCount = ( { stock = 0, initial = 1, onAdd } ) => {
    
    const [ count, setCount ] = useState( 0 );

    useEffect( () => {
        setCount( initial );
    }, [] );

    const aumentar = () => {
        if ( count < stock ) {
            setCount( count + 1 );
        }
    }

    const disminuir = () => {
        if ( count > initial ) {
            setCount( count - 1 );
        }
    }

    return (
        <>
            <div className="number-input">
                <button className="qty-minus" onClick={ disminuir }>-</button>
                <input className="quantity" name="quantity" type="number" 
                    value={ count } 
                    onChange={(event)=>this.inputChangedHandler(event)} />
                <button className="qty-plus" onClick={ aumentar }>+</button>
            </div>
            &nbsp; &nbsp; 
                {
                    stock && count
                    ? <button type="button" className="btn btn-info text-dark" onClick={ ()=> onAdd( count ) }>AGREGAR AL CARRITO</button>
                    : <button type="button" className="btn btn-secondary" disabled>AGREGAR AL CARRITO</button>
                }
        </>
    );
}

export default ItemCount;