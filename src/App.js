import "./resources/style.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Feaature from "./components/featured";
const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Feaature />
      </>

      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "black", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
