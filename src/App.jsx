import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime,setCurrentTIME] = useState(new Date());
  useEffect(() =>{
    const timer=setInterval(()=> {
      setCurrentTIME(new Date());
    },1000);
    return ()=>clearInterval(timer);
  },[]);
  const formatTimewithleadingzero =(num) =>{
    return num < 10 ? `0${num}`: num;
  };
  const formathour =(hour)=>{
    return hour ===0 ? 12:hour >12 ? hour -12 :hour;
  };

  const formatDate =(date) =>{
     return date.toLocalDateString();
  };
  
  return (
    <>
    <div className='digital-clock'>
      <h1>Digital clock</h1>
      <div className='time'>{formatTimewithleadingzero(formathour(currentTime.getHours()))} :
  
      {formatTimewithleadingzero(currentTime.getMinutes())} :
      {formatTimewithleadingzero(currentTime.getSeconds())}

      
      </div>
      <div className='date'>30 march 2024</div>
    </div>
    </>
  );
}

export default App
