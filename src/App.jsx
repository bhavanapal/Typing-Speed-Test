import React from 'react';
import './App.css';
import Clock from "./Components/Clock";
import TypingText from './Components/typingText';
import {useSelector, useDispatch } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {restartTimer} from './redux/features/typingSlice';

function App() {
const dispatch = useDispatch();
const timerRunning = useSelector((state) => state.typing.timerRunning);
const timeRemaining = useSelector((state) => state.typing.timeRemaining); 
const  restartKey = useSelector((state) => state.typing.restartKey);

 return (

    <div className='container  max-width-640px /*border-2*/ mx-auto mt-20 pt-4  /*border-2 rounded border-sky-950*/'>
      <h1 className='text-center text-2xl font-mono font-semibold'>Typing speed test</h1>
      <div className='flex items-center'> 
      <div>
      <CountdownCircleTimer
        key = {restartKey} // this key will trigger re-render and restart the timer
        isPlaying={timerRunning && timeRemaining > 0}
        duration={60}
        colors="#004777"
        strokeWidth={8}
        onComplete={() => {
        dispatch(restartTimer());
        console.log("times's up!");
        }} >
           {Clock}
        </CountdownCircleTimer>
      </div> 
      <div>
        <TypingText/>
      </div>
      </div> 
    </div>
  );
}

export default App;
