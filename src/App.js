import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import LayoutAdmin from './Layouts/LayoutAdmin';
import Product from './pages/Product/Product';
import ProductDetail from './components/Product/ProductDetail';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/"
                    element={<LayoutAdmin>{/* <Home></Home> */}</LayoutAdmin>}
                >
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
