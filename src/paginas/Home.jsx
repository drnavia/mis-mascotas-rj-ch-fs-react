import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import ItemListContainer from "../componentes/ItemListContainer";
import ItemDetailContainer from '../componentes/ItemDetailContainer';
import Cart from "../componentes/Cart";
import CartContextProvider from "../contextos/CartContext";

function Home() {
    return (
        <CartContextProvider value={ [ 1, 2, 3 ] }>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* Intercambiabilidad (ItemListContainer) */}
                    <Route path='/' element={ <ItemListContainer /> } />
                    <Route path='/category/:idMascota' element={ <ItemListContainer /> } />
                    <Route path='/item/:idProducto' element={ <ItemDetailContainer /> } />
                    <Route path='/cart' element={ <Cart /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;