import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Categories from "./pages/Categories/Categories";
import { URL_ENTRIES, URL_CATEGORIES, URL_RANDOM } from "./static/config/urls";
import Entries from "./pages/Entries/Entries";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={URL_ENTRIES} element={<Entries />} />
        <Route exact path={URL_CATEGORIES} element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
