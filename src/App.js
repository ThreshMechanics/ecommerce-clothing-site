import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Footer from './components/Footer'
import Trending from './components/Trending'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Newsletter />
      <Trending />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
