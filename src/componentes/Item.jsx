import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ( { id, nombre, marca, imagenUrl, idMascota, mascota:{ mascotaNombre }, peso, precio, stock } ) => {
    
    return (
        <div className="box">
            <div id="producto-tienda">
                <div className="head">
                    <img src={ imagenUrl } alt={ nombre } className="imagen-producto center" />
                    <h5 className="nombre">{ nombre }</h5>
                    <p><span className="badge bg-dark">{ marca }</span></p>
                </div>
                <div className="info">
                    <p>
                        $ <span className="precio">{ precio }</span>
                    </p>
                    <p>
                        Stock: <span className="stock">{ stock }</span> u.
                    </p>
                    <Link to={`/item/${id}`}>
                        <button type="button" className="btn btn-info text-dark">DETALLE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;