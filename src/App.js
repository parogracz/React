import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function BR(){
return(
  <div className="Clear"> </div>
);
}

function App() {
  const [i,setI] = useState("");
  function Button_Num(value){
  return (
    <div className="Button_1" 
      onClick={() => {setI(i+value)}}
    >
      <button className="Button Button_Num">
        {value}
      </button>
    </div>
    );
  }
  function Screen(num) {
  return(
    <div>
      {num}
    </div>
    );
  }

  return (
    <div className="Container">
      <div className="App">
        <div className="Screen">
          {i}
        </div>
        <div className="Numbers">
          <div className="row">
            {Button_Num('1')}
            {Button_Num('2')}
            {Button_Num('3')}
          </div>
          {BR()}
          <div className="row">
            {Button_Num('4')}
            {Button_Num('5')}
            {Button_Num('6')}
          </div>
          {BR()}
          <div className="row">
            {Button_Num('7')}
            {Button_Num('8')}
            {Button_Num('9')}
          </div>
          {BR()}
          <div className="row">
            {Button_Num('C')}
            {Button_Num('0')}
            {Button_Num('<-')}
          </div>
        </div>
        <div className="Function">

        </div>
      </div>
    </div>
    
  );
}

export default App;
