import "./resources/style.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Feaature from "./components/featured";
import Page from "./components/contents/page";
const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Feaature />
      </>

      <Page />

      <Footer />
    </div>
  );
};

export default App;
