import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./app.scss";

const Layout =() =>{

  return (
    <div className="app">
    <Navbar />
    <Outlet/>
    <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>,
  },
  {
    path: "/products/:id",
    element: <Products/>,
  },
  {
    path: "/product/:id",
    element: <Product/>,
  },
],
},
]);

function App() {
  return (
    <div className="App">

<RouterProvider router={router} />
      <p></p>
    </div>
  );
};

export default App;
