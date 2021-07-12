import './App.css';
import About from './components/About'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import TopButton from './components/TopButton';
import Project from './components/Project';
import { StoreProvider } from './utils/GlobalState';


function App() {
  return (
    <StoreProvider>

      <TopButton />
      <About />
      <NavBar />
      <Portfolio />
      <Project />
      <Footer />

    </StoreProvider>
  );
}

export default App;
