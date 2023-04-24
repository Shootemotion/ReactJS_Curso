import React from 'react';
import './MyButton.css';



const MyButton = (props) => {

  function handleClick(evt){
console.log(evt)

  }
  return (
    <button className="my-button" onClick={handleClick}>
      {props.label}
    </button>
  );
}

export default MyButton;
