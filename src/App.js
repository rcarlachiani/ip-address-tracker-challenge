import './App.css';
import DataDisplayer from './components/dataDisplayer/dataDisplayer';
import Header from './components/header/header';
import MapView from './components/map/mapView';

function App() {
  return (
    <>
      <Header/>
      <DataDisplayer/>
      <MapView />
    </>
  );
}

export default App;
