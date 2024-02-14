// import logo from './logo.svg';
import './App.css';
import { RenderImg } from './components/RenderImg';
import { RenderText } from './components/RenderText';
import { Buttons } from './components/Buttons';
import { useState } from 'react';
import { Message } from './components/Message';
import bomb from './assets/bomb.gif'

function App() {

  const [cnt_no, setCnt_no] = useState(0);
  const [yes, setYes] = useState(false);

  let center = "justify-start"
  if(yes) 
    center = "justify-center"


  return (
    <div className="App w-[100%] h-[100vh] bg overflow-hidden flex flex-col items-center ">
      {
        cnt_no < 3 &&
        <div className={`w-full h-full overflow-hidden flex flex-col items-center ${center} `}>
          {/* image or GIF  */}
          <RenderImg 
          cnt_no= {cnt_no}
          yes={yes}
          />

          {/* text based on mood */}
          <RenderText 
          cnt_no={cnt_no}
          />

          {/* Yes / No button  */}
          <Buttons 
          setCnt_no = {setCnt_no} 
          cnt_no = {cnt_no}
          yes = {yes}
          setYes = {setYes}
          />

          {/* Yes message box  */}
          <Message yes = {yes} className=''/>
        </div>
      }
       
      {
        cnt_no === 3 &&
        <img src={bomb} alt='' className=' w-[70%]'/>
      }
      

    </div>
  );
}

export default App;
