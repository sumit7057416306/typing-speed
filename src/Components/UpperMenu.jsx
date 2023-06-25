import React from 'react'
import { useTestMode } from '../Context/TestModeContext';

function UpperMenu({ countDown }) {
  const { settestTime } = useTestMode();
  const updateTime = (e) => {
    settestTime(Number(e.target.id))
  }

  return (
    <div style={{    display: "grid",
      marginLeft: "auto",
      marginRight: "auto",
      width: "1000px",
  }}>
    <div className='select-time' style={{display:"flex",justifyContent:'flex-end'}}>Select Timer</div>
    <div className='upper-menu'>
    
      <div className="counter">
        {countDown}s
      </div>
      
      <div className="modes">
        <div className="time-mode" id='15' onClick={updateTime}>15s</div>
        <div className="time-mode" id='30' onClick={updateTime}>30s</div>
        <div className="time-mode" id='60' onClick={updateTime}>60s</div>
        <div className="time-mode" id='75' onClick={updateTime}>75s</div>
      </div>
    </div>
    </div>
  )
}

export default UpperMenu