import React,{useState} from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const Button=({number,onClick})=>
{
  return (<button onClick={onClick}>Button{number}</button>);
}
const App=()=>{
  const [clickCounts ,setClickCounts]=useState(
  {btn1:0,btn2:0,btn3:0});
  const handleClick=(buttonNumber,name)=>{
    setClickCounts(prevCounts=>({...prevCounts,[buttonNumber]:prevCounts[buttonNumber]+1}));
    alert(`Button ${name}was clicked!`);
  };
return(
  <>
  <span>
    <Button number = "1" onClick={()=>handleClick('btn1',1)}/>
      <p>Button 1 has been clicked {clickCounts.btn1}times</p>
      <Button number = "2" onClick={()=>handleClick('btn2',2)}/>
      <p>Button 2 has been clicked {clickCounts.btn1}times</p>
      <Button number = "3" onClick={()=>handleClick('btn3',3)}/>
      <p>Button 3 has been clicked {clickCounts.btn1}times</p>
      </span></>
);

};


export default App;
