import logo from './logo.svg';
import './App.css';
import { PostInput } from './components/postInput';
import { useEffect, useState } from 'react';
function App() {

  const [count,setCounter]=useState(0);


  // useEffect(()=>{
  //   console.log("triggered")
  //   setInterval(()=>{
      
  //     setCounter((prev)=>prev+1)
  //   },1000)
  // },[])
 

  return (
    <div className="App">
      <div>Count :{count}</div>
      <PostInput/>
    </div>
  );
}

export default App;
