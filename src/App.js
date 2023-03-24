import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { DataProvider } from "./dataContext";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import Color from "./pages/Color";
import Home from "./pages/Home";
import Material from "./pages/Material";
import Product from "./pages/Product";
import SubCategory from "./pages/SubCategory";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/color" element={<Color />} />
          <Route path="/material" element={<Material />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
