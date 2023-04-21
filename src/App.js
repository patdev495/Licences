import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Sidebar from './Layouts/DefaultLayout/Sidebar/Sidebar';
import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout';
import { loginRoutes } from './routes/loginRoutes';
import Home from './components/Home/Home';
import LayoutAdmin from './components/Admin/LayoutAdmin';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/"
                    element={<LayoutAdmin>{/* <Home></Home> */}</LayoutAdmin>}
                >
                    {/* <Route path="product" element={<Product />} /> */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
