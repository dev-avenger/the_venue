import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant={props.variant}
      size={props.size}
      style ={props.styles}
    >
     <img src={props.ticketIcon} 
     className="iconImage"
     alt="icon_button"/>
     {props.text} 
    </Button>
  )
}

export default MyButton;