import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const hist = useNavigate();
  let match = 8401292124;
  let [Number, setNumber] = useState("");
  let [error, seterror] = useState({});
  const handelchange = (e) => {
    const regs = /^[0-9]*$/;
    if (e.target.value) {
      if (regs.test(e.target.value)) {
        setNumber(e.target.value);

        seterror({ onlyNUm: "" });
      } else {
        if (e.target.value==''){

          seterror({ onlyNUm: "" });
        }else{
          const regss = /^[a-zA-Z]*$/;
          if (regss.test(e.target.value)) {
            debugger
            seterror({ onlyNUm: "Please enter the Phone Number" });

          }else{

            seterror({ onlyNUm: "Only numbers are are allowed" });
          }
        }
      }
    } else {
      // const regss=/^[a-zA-Z]*$/;
      // if (regss.test(e.target.value)) {
      //   debugger
      //   seterror({ onlyNUm: "Please enter the Phone Number" });

      // }
      setNumber(e.target.value);
      seterror({ onlyNUm: "Please enter the Phone Number" });
    }
    const num = Number.split("");
    // if (num.length ==0 ) {
    //   debugger
    //   seterror({ onlyNUm: "please enter the number" });
    //   console.log(Number.length);
    // }
    console.log(num.length);

    // for (let i = 0 ; i < Number.length; i++) {
    //  // const element = array[index];
    //  console.log(i)
    // }
  };
  const handelclick = (e) => {
    e.preventDefault();
    console.log(Number);

    // const cheack = Number.split("");
    // const all = (arr) => cheack.every((val) => val === cheack[0]);
    // const result = all();
    // if (result == !true)
    //   console.log("this is all result for numbers", result);
    let k = new Set(Number);
    if (Number.length < 10) {
      //  if (result == true)
      seterror({ onlyNUm: "10 number are must " });
    } else if (Number == match) {
      toast("you are regestered");
      setTimeout(() => {
        hist("/otp");
      }, 3000);
    } else if (Number && k.size === 1) {
      seterror({
        onlyNUm: "all Number are same please cheack the phone number",
      });
    } else {
      toast("you have to regestier first");

      seterror({ onlyNUm: "" });

      // console.log("the numbers are same");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: 80 + "%",
        alignContent: "center",
      }}
    >
      <h2 style={{ color: "white" }}>Login </h2>
      &nbsp;
      <form>
        <div style={{ width: 300 + "px", height: 40 + "px" }}>
          <label style={{ color: "white" }}>Number : </label>
          <input
            type="text"
            placeholder="Enter Number"
            value={Number}
            onChange={handelchange}
            maxLength={10}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error.onlyNUm}</span>}
        &nbsp;
        <div style={{ alignContent: "center" }}>
          <button onClick={handelclick}>Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
