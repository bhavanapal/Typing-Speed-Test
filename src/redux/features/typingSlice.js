import { createSlice } from "@reduxjs/toolkit";
import { calculateWPM, calculateCPM, calculateAccuracy } from '../Utils/typingUtils';


const initialState = {
    typingText:'Every morning, the park brimmed with life as joggers trailed along its winding paths,children,laughter echoed from the playground, and early birds chirped melodiously.The sun dipped below the horizon,casting a golden gow across the sky.Emily sat on the porch,sipping her tea and contemplating the beauty of nature.',
    userText: '',
    timeRemaining: 60,
    timerRunning:false, 
    wpm:0,
    cpm:0,
    accuracy:100,
    isTyping : false,
    restartKey:0,//Update this key to restart the timer
}

const typingSlice = createSlice({
    name:"typing",
    initialState,
    reducers:{
        setTypingText: (state, action) => {
            state.typingText = action.payload;
        },
        setUserText:(state,action) => {
            state.userText = action.payload;
        },
        decrementTimeRemaining: (state) => {
            state.timeRemaining -= 1;
          },
        startTimer: (state) => {
             state.timerRunning = true;
             state.timeRemaining = 60;
             state.restartKey += 1;
            },
        stopTimer: (state) => {
            state.timeRemaining = 0;
            state.wpm = calculateWPM(state.userText, state.timeRemaining);
            state.cpm = calculateCPM(state.userText, state.timeRemaining);
            state.accuracy = calculateAccuracy(state.typingText, state.userText);
        },
        startTyping: (state) =>{
              state.isTyping = true;
              state.timerRunning = false;
              state.timeRemaining -= 1;
            },
        stopTyping: (state) => {
                state.isTyping = false;
            },
        resetState:(state) => {
              return initialState;
            },
            restartTimer:(state) => {
             state.restartKey += 1;
            },
            
    },
});

export const { setTypingText, setUserText,decrementTimeRemaining,startTimer,stopTimer, resetState,startTyping, stopTyping,  restartTimer} = typingSlice.actions;
export default typingSlice.reducer;