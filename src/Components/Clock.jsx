import React from 'react'
import { useSelector} from "react-redux";

const Clock = () => {
  const  timeRemaining = useSelector((state) => state.typing.timeRemaining);

 return(
    <div>
      <div className='text-black'>You can do in</div>
      <div className='text-4xl'>{ timeRemaining < 0 ? 0 : timeRemaining }</div>
      <div className='text-black'>Seconds</div>
    </div>
   );
};

export default Clock;

