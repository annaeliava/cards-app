import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card/Card";
import { fetchData } from "./features/cardSlice";
import './assets/styles/App.scss';
import Filter from "./components/filter/Filter";

function App() {
  const dispatch = useDispatch();

  const {cartoons}  = useSelector(state => state.cartoons);

  const [filter, setFilter] = useState(false);
  
  const handleFilter = () => {
    setFilter(!filter);
  };

  

  useEffect(()=> {
    dispatch(fetchData());
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="title">Cartoons</div>
        <Filter filter={filter} handleFilter={handleFilter} />
        <div className="mapContainer">
          { filter 
          ?
            cartoons
              .filter(cartoon => cartoon.liked)
              .map(cartoon => <Card key={cartoon.id} {...cartoon} />)
          :
            cartoons.map(cartoon => <Card key={cartoon.id} {...cartoon} />)
          } 
        </div>
      </div>
    </>
  );
}

export default App;
