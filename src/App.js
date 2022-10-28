
import React, { useState } from 'react';
import './index.css';
function App(){
   let[time,settime]=useState();
   let ntime=new Date().toLocaleTimeString();
   function timeinterval(){
      ntime=new Date().toLocaleTimeString();
      settime(ntime);
   }
   setInterval(timeinterval,1000)
  

   return(<><div id="main">
            <h1>{time}</h1>
     
   </div>
       
   </>
      
   )
}
export default App;