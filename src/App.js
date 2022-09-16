import DataDisplayer from './components/dataDisplayer/dataDisplayer';
import Header from './components/header/header';
import MapView from './components/map/mapView';
import './App.css';
import ContextProvider from './context/context';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <DataDisplayer/>
      <MapView/>
    </ContextProvider>
  );
}

export default App;
