import "./styles/global.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryContainer from "./components/CategoryContainer";
import Showcase from "./components/Showcase";
import PartnersContainer from "./components/PartnersContainer";
import BrandsContainer from "./components/BrandsContainer";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoryContainer />
      <Showcase list={true} />
      <PartnersContainer />

      <Showcase list={false} />
      <PartnersContainer />
      <BrandsContainer />
      <Showcase list={false} />
      <Form />
      <Footer />
    </>
  );
};

export default App;
