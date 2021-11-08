import React from 'react'; //optional
import { useState } from "react";

function AngryButton(props){
  const [anger, setAnger] = useState(0);
  const hangleClick = () => {
    if (anger < 1) {
      setAnger(anger + 0.1);
    } else {
      setAnger(0)
    }
  }

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={hangleClick} className="AngryButton">
    {anger < 1 && <span>Don't click me too much! </span>}
    {anger > 1 && <span>Rawr!</span>}
    </button>

  );
}

export default AngryButton;