import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';
import Reveiw from './component/Reveiw';
import Loading from './component/Loading';

function App() {

const [loading, setLoading] = useState(true)



setTimeout(()=>{
setLoading (false)
},3000)
if(loading){
  return (
    <div className="App-header ">
      <Loading />
    </div>
  )
}

  return (
  
    <div className="App-header ">
          <h2>Our reveiws</h2>
         <Reveiw/>
        
    </div>

  );
}

export default App;
