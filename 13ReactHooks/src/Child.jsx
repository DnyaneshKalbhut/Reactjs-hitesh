import React, { useContext } from "react";
// import { useGlobalContext } from "./components/usecontext/userContext";
import { AppContext } from "./Components/useContext/UseContext";

const Child = () => {
  // const { name, age } = user;
  const userData = useContext(AppContext);

  console.log("🚀 ~ file: Child.jsx ~ line 8 ~ Child ~ userData", userData);

  return (
    <div>
      Child = My name  is {userData.name} And age is {userData.age}.{" "}
    </div>
  );
};

export default Child;