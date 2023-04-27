import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card/Card";
import { fetchData } from "./features/cardSlice";
import './assets/styles/App.scss';

function App() {
  const dispatch = useDispatch();

  const {cartoons}  = useSelector(state => state.cartoons);
  console.log(cartoons);

  useEffect(()=> {
    dispatch(fetchData());
    console.log('works')
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="title">Cartoons</div>
        <div className="mapContainer">
          {
            cartoons.map(cartoon => <Card key={cartoon.id} data={cartoon} />)
          } 
        </div>
      </div>
    </>
  );
}

export default App;
