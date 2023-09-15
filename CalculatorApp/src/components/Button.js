import React from 'react'
import styled from 'styled-components'
import * as math from 'mathjs';

const Button = ({keyElement,color, setText, text}) => {

  const append = () => {

    if (keyElement === 'AC') {
      setText('');
    } else if (keyElement === '=') {
      try {

        const result = math.evaluate(text);
        setText(result.toString());
      } catch (error) {
        setText('Error');
      }
    } else {
      setText(text + keyElement);
    }
  };

  return (
    <Wrapper color={color}>
    <div className='button' onClick={()=>{ append()}} >{keyElement}</div>
    </Wrapper> 
    
  )
}

const Wrapper=styled.section`
.button{
    width: 131px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 29px;
    background-color: ${(props)=>props.color};
}

.button: hover{
  cursor: pointer;
  background-color: 
}



`
export default Button