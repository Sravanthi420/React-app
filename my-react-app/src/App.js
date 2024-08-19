import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { MyProvider } from './components/Context';

function App() {
  return (
    <>
    <MyProvider>
    <Home/>
    </MyProvider>
    </>
  );
}

export default App;
