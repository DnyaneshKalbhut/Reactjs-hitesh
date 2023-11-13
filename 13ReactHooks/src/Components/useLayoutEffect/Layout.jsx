import React, { useState,  useLayoutEffect } from "react";
import styled from "styled-components";
// import { BiPlusMedical } from "react-icons/bi";
// import { FaMinus } from "react-icons/fa";

const Layout = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(()=>{
    if(num===0) setNum(num+ Math.random()*100)
},[num])
 
  return (
    <>
      <Wrapper>
      <div>
        <p>my random number is {num}</p>
        <button onClick={()=>setNum(0)}>random number</button>
      </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default Layout;