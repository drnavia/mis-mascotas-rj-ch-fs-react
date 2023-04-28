import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";

const Footer = () => {
    return (
        <Row>
            <footer id="main-footer">
                <p className="credit">&copy; Copyright @ 2022 by <span>{<span>Katto.<span>Dev</span></span>}</span></p>
            </footer>
        </Row>
    );
}

export default Footer;
