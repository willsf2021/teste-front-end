import "./styles/global.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryContainer from "./components/CategoryContainer";
import Showcase from "./components/Showcase";
import PartnersContainer from "./components/PartnersContainer";
import BrandsContainer from "./components/BrandsContainer";

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
    </>
  );
};

export default App;
