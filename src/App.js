import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function BR(){
  return(
    <div className="Clear"> </div>
  );
}
function Button_Num(value){
  return (
    <div className="Button_1" >
      <button className="Button Button_Num">
        {value}
      </button>
    </div>
  );
}
function App() {
  return (
    <div className="Container">
      <div className="App">
        <div className="Screen">
          
        </div>
        <div className="Numbers">
          <div className="row">
            {Button_Num(1)}
            {Button_Num(2)}
            {Button_Num(3)}
          </div>
          {BR()}
          <div className="row">
            {Button_Num(4)}
            {Button_Num(5)}
            {Button_Num(6)}
          </div>
          {BR()}
          <div className="row">
            {Button_Num(7)}
            {Button_Num(8)}
            {Button_Num(9)}
          </div>
          {BR()}
        </div>
        <div className="Function">

        </div>
      </div>
      
    </div>
    
  );
}

export default App;
