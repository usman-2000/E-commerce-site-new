import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Imagecomponent from './components/Imagecomponent';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import OwnCreation from './components/OwnCreation';
import PopularProducts from './components/PopularProducts';
// import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';

import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Category />
      <PopularProducts />
      {/* <SliderLine /> */}
      {/* <ProductSlider /> */}
      {/* <Imagecomponent />
      <Scrollablelist /> */}
      <OwnCreation />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
