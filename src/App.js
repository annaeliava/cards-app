import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card/Card";
import { fetchData } from "./features/cardSlice";

function App() {
  const dispatch = useDispatch();

  const {cartoons } = useSelector((state) => state.cartoon);

  useEffect(()=> {
    dispatch(fetchData());
  }, []);
  
  return (
    <>
      {cartoons.map((cartoon) => <Card key={cartoon.id} {...cartoon} />)}
    </>
  );
}

export default App;
