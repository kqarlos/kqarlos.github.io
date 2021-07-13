import './App.css';
import { StoreProvider } from './utils/GlobalState';
import Homepage from './pages/Homepage';


function App() {


  return (
    <StoreProvider>

      <Homepage />

    </StoreProvider>
  );
}

export default App;
