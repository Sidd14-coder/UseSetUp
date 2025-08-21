import React, { useState } from 'react';

function Car() {
    const [name1, setName1] = useState("TOYOTA");
    const [speed, setSpeed] = useState(120);
    const [color, setColor] = useState("BLACK");

    const changeNameFunc = () => {
        setName1("BMW")
    }
    
    const changeSpeedFunc = () => {
        setSpeed("190")
    }

    const changeColorFunc = () => {
        setColor("ROYAL BLUE")
    }

  return (
    <div>
      <h1>Name is {name1}</h1>
      <h1>Speed is {speed}</h1>
      <h1>Color is {color}</h1>
      <button style={{marginRight: "10px"}} onClick={changeNameFunc}>changeName</button>
      <button style={{marginRight: "10px"}} onClick={changeSpeedFunc}>changeSpeed</button>
      <button style={{marginRight: "10px"}} onClick={changeColorFunc}>changeColor</button>
    </div>
  )
}

export default Car
