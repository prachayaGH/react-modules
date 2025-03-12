import "./App.css";


import Header from "./components/header";
import MainContent from "./components/MainContent";
import ProductSection from "./components/ProductSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
