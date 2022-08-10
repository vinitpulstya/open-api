import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Categories from "./pages/Categories/Categories";
import { URL_ALL, URL_CATEGORIES, URL_RANDOM } from "./static/config/urls";
import All from "./pages/All/All";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={URL_ALL} element={<All />} />
        <Route exact path={URL_CATEGORIES} element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
