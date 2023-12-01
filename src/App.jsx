import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Cabecera";
import Inicio from "./components/home/Inicio";
import Footer from "./components/footer/Footer";
import { Products } from "./components/Products/Products";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";
import { addProduct } from "./redux/slices/productsSlice";
import { useDispatch } from "react-redux";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { Cart } from "./components/Cart/Cart";

function App() {
  const productosRef = collection(db, "carteras");
  const dispatch = useDispatch();

  
  const addProdRedux = () => {
    getDocs(productosRef).then((res) => {
      res.docs.forEach((doc) => {
        const data = {
          data: doc.data(),
          id: doc.id,
        };
        dispatch(addProduct(data));   
      });
    });
  };
  addProdRedux();
  useEffect(() => {
  }, []);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:id" element={<ProductInfo />}/>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1 style={{ paddingTop: 150, paddingBottom: 40 }}>
              Page not found
            </h1>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
