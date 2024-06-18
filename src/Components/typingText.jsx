import React,{useState,useEffect}  from 'react'
 import { useSelector, useDispatch } from 'react-redux';
 import {setUserText,decrementTimeRemaining,startTimer,stopTimer, resetState ,startTyping,stopTyping} from '../redux/features/typingSlice';
 import DialogBox from './dialogBox';

 const TypingText = () => {

    const dispatch = useDispatch();
    const typingText = useSelector((state) => state.typing.typingText);
    const userText = useSelector((state) => state.typing.userText);
    const timeRemaining = useSelector((state) => state.typing.timeRemaining);
    const timerRunning = useSelector((state) => state.typing.timerRunning);
    const isTyping = useSelector((state) => state.typing.isTyping);
     
    const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if(isTyping){
     const timer = setInterval(() => {
        if(timerRunning && timeRemaining > 0){
            dispatch(decrementTimeRemaining());
        }
        if(timeRemaining === 0) {
           dispatch(stopTimer());
        }
     },1000);
     return () => clearInterval(timer);
    }
  },[dispatch, isTyping, timerRunning , timeRemaining]);


  useEffect(() => {
      if(isTyping){
          if(timeRemaining === 0) {
             dispatch(stopTimer());
             setOpenDialog(true);
          }
      }
    },[dispatch, isTyping, timeRemaining]);


const handleInputChange=(e)=>{
  if(!isTyping){
    dispatch(startTyping());
    dispatch(startTimer());
  }
  dispatch(setUserText(e.target.value));
    };

  const handleStop =() => {
    setOpenDialog(true);
  dispatch(stopTimer());
  dispatch(stopTyping());
 }

  const handleReset = () => {
        dispatch(resetState());
        };

  const handleCloseDialog = () => {
          setOpenDialog(false);
          dispatch(resetState());
       };

  return (
     <div className='container mx-auto px-4 mt-10' >
      <h1 className='text-center text-4xl font-sans font-bold'>Test Your Typing Speed Skills</h1>
        <p className='font-sans mt-10 px-4 text-2xl text-black text-justify'>{typingText}</p>
        <textarea rows="4" 
        className="w-11/12 p-2.5 ml-10 mt-5 text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        value = {userText}
        onChange = {handleInputChange}
        disabled = {!isTyping ? timerRunning : timeRemaining <= 0}
        placeholder="Start typing here..."
        />
        <div> 
        <button 
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-bold tracking-wider rounded-lg text-sm px-12 py-3.5 text-center me-2 mb-2'
          onClick={handleStop} 
          disabled ={!timeRemaining}>Stop
        </button> 
        <button 
        className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-bold tracking-wider rounded-lg text-sm px-12 py-3.5 text-center me-2 mb-2'
        onClick={handleReset}>Restart</button> 
       </div> 
       <DialogBox open={openDialog} handleCloseDialog={handleCloseDialog}/>
    </div>
  )
}

export default TypingText;

