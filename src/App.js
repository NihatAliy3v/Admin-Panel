import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sub-category" element={<SubCategory />} />
        </Routes>
    </div>
  );
}

export default App;
