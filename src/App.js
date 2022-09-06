import { useEffect, useState } from 'react';
import DataDisplayer from './components/dataDisplayer/dataDisplayer';
import Header from './components/header/header';
import MapView from './components/map/mapView';
import getData from './services/getUserData';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [enteredData, setEnteredData] = useState('')

  useEffect(() => {
    getData().then(setData)
  },[])

  function handleChange(e) {
      setEnteredData(e.target.value);
    };
  
  function handleClick(e) {
      e.preventDefault()
      setEnteredData(e.target.value)
      getData(enteredData).then(setData)
  };

  function handleSubmit(e) {
    e.preventDefault();
  } 

  return (
    <>
      <Header click={handleClick} change={handleChange} submit={handleSubmit} dataEntered={enteredData}/>
      <DataDisplayer props={data}/>
      <MapView props={data}/>
    </>
  );
}

export default App;
