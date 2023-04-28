import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Row>
            <header id="main-header">
                <Link to='/'>
                    <span id="logo-header">
                        <span className="site-name">Mis Mascotas</span>
                        <span className="site-desc">Delivery online especializado en productos para perros y gatos</span>
                    </span>
                </Link>
                <nav>
                    <ul>
                        <li id="ver-carrito">
                            <Link to="/cart"><CartWidget /></Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><Link to="/category/KfPcH5jy5Av6dmxdXfGT">Perros</Link></li>
                        <li><Link to="/category/ATVYONAxa3gjlp5TYZOn">Gatos</Link></li>
                        <li><Link to="/category/g5mw3cP9t8IVCUaBlgJK">Conejos</Link></li>
                    </ul>
                </nav>
            </header>
        </Row>
    );
}

export default NavBar;
