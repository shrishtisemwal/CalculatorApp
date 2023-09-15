import { useEffect, useState } from "react";
import Button from "./components/Button";
import data from "./data/data";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  
  //Hooks
  const [text , setText]=useState("");
  
  

  return (
    <Wrapper>
      <GlobalStyle/>
    <div className="container">
      <div className="main">
        <div className="txt">{text}</div>
        <div className="grid">
          {data.map((data) => {
            return <Button key={data.keyEl} {...data} setText={setText} text={text} />;
          })}
        </div>
      </div>
    </div>
    </Wrapper>
  );
}


const Wrapper=styled.section`

// child takes x * dimension of parent element 
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

     
}

.main{
  border: 1px solid black;
  padding: 13px;
}
.txt{
  width: 100%;
    border: 1px solid black;
    margin-bottom: 23px;
    height: 91px;
    border-radius: 9px;
    padding: 5px;
    font-size: 23px;
    display: flex;
    flex-direction: row-reverse;

}

.grid{
  width: 100%;
    display: grid;
    grid-template-columns: repeat(4,131px);
    grid-gap: 17px 15px;
}
`

export default App;