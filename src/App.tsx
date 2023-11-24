import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TV from "./Pages/TV";
import Search from "./Pages/Search";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
