import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
