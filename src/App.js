import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Sidebar from './Layouts/DefaultLayout/Sidebar/Sidebar';
import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout';
import { loginRoutes } from './routes/loginRoutes';
import Home from './components/Home/Home';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import Product from './pages/Product/Product';
import ProductDetail from './components/Admin/Product/ProductDetail';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/"
                    element={<LayoutAdmin>{/* <Home></Home> */}</LayoutAdmin>}
                >
                    <Route path="product" element={<Product />}>
                        <Route path=":id" element={<ProductDetail />}></Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
