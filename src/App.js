import React from 'react';
import './App.css';
import DemoStateless from './Components/DemoStateless';
import DemoStatefull from './Components/DemoStatefull';
import BaiTapLayout1 from './Components/BaiTapLayoutComponent/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandlEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless />
      <DemoStatefull /> */}
      {/* <BaiTapLayout1/> */}
      {/* <Databinding/> */}
      <HandleEvent/>
    </div>
  );
}

export default App;
