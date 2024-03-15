import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from "./Inicio/Index"

function App() {
  return (
    <div className="App">

      <Inicio src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105064.48114864466!2d-58.56577012217135!3d-34.62274207894573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc966bf151d67%3A0x255fef772508e89c!2sUTN.BA!5e0!3m2!1ses!2sar!4v1706024483563!5m2!1ses!2sar' width={400} height={100} />


    </div>
  );
}

export default App;
