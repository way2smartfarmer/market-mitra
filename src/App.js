import "./App.css";
import Header from "./components/Layout/HEADER/Header";
import Footer from "./components/Layout/FOOTER/Footer";
import { Fragment } from "react";
import Home from "./components/HOME/Home";
import CropList from "./components/CROPS/cropList";
import { Routes, Route } from "react-router-dom";
import CropDetails from "./components/CROPS/cropDetails";
import CropComparision from "./components/COMPARISION/cropComparision";
import CropInsights from "./components/INSIGHTS/cropInsights";
import CropTrends from "./components/TRENDS/cropTrends";

import Navbar from "./test";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/test" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/crops" element={<CropList />} />
        <Route path="/comparision" element={<CropComparision />} />
        <Route path="/crop" element={<CropDetails />}>
          <Route path="comparision" element={<CropComparision />} />
          <Route path="insights" element={<CropInsights />} />
          <Route path="trends" element={<CropTrends />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
