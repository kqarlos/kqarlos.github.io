import './App.css';
import About from './components/About'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import TopButton from './components/TopButton';

function App() {
  return (
    <div>
      
      <TopButton />
      <About />
      <NavBar />
      <Portfolio />
      <Footer />

    </div>
  );
}

export default App;
