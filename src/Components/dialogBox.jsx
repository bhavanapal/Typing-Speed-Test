import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import  DialogActions  from '@mui/material/DialogActions';
import  DialogContent  from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';


const DialogBox = ({open,handleCloseDialog}) => {
    const words = useSelector((state)=>state.typing.wpm);
    const chars = useSelector((state) => state.typing.cpm);
    const accuracy = useSelector((state) => state.typing.accuracy);
    const timeRemaining = useSelector((state) => state.typing.timeRemaining);
    const isTyping = useSelector((state) => state.typing.isTyping);


    const speedCategory = () => {
      if(isTyping < 30){
        return 'slow! You can imporve typing speed!';
      }else if(isTyping >= 30 && isTyping < 60){
        return 'Average! Good typing speed!';
      }else{
        return 'Fast! Excellent typing Speed!';
      }
    };

    return(
      <div className='bg-red-500'>
        <Dialog open ={open} onClose={handleCloseDialog}>
        <DialogTitle>
          <div>
          <Typography variant='h4'>Result</Typography>
          </div>
        </DialogTitle>
        <DialogContent>
        <Typography variant="h6">
           <p>Times's Up!</p>
           <p>{speedCategory()}</p>
        </Typography>
        <Typography variant="h6">
           {!timeRemaining && <p>your typing speed is: WPM:{words}  CPM:{chars}  Accuracy %:{accuracy} </p>}
           </Typography>
        </DialogContent>
        <DialogActions>
        <Button  variant='contained' onClick={handleCloseDialog}>X</Button>
         </DialogActions>
      </Dialog>
      </div>
    );
};

export default DialogBox;