import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OtpPage2() {
  const hist = useNavigate();
  let match = "8401";
  let [timer, settimer] = useState("");
  const [ShowResenotp, setShowResenotp] = useState(false);
 

  let otp = ["", "", "", ""];
  let [inputs, setinputs] = useState(otp);
 
  let [error, seterror] = useState({});
  const handelresend = () => {
    console.log("clicked the resend ");
    let count = 10;
    const time = setInterval(function () {
      count--;

      console.log(count);
      settimer(count);
      if (count === 0) {
        clearInterval(time);
        settimer("time up");
        setShowResenotp(true);
      }
    }, 1000);
    setShowResenotp(false);
  };
 
  useEffect(() => {
    let count = 10;
    const time = setInterval(function () {
      count--;

      console.log(count);
      settimer(count);
      if (count === 0) {
        clearInterval(time);
        settimer("time up");
        setShowResenotp(true);
      }
    }, 1000);
  }, []);

  // useEffect(() => {
  //   match.forEach((element) => {
  //     console.log(element);
  //     if (
  //       element[0] == Otp.first &&
  //       element[1] == Otp.second &&
  //       element[3] == Otp.third &&
  //       element[4] == Otp.fourth
  //     ) {
  //       toast("Otp Varified");
  //     } else {
  //       toast("please cheach the otp and try again");
  //     }
  //   });
  // }, []);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const handelchange = (e, index) => {
    const regs = /^[0-9]*$/;
    const val = e.target.value;
    console.log(val, index);
    console.log("rrr", val);
     if (index < inputs.length - 1) {
       // 1
       refs[index + 1].current.focus();
     }
     const copyInputs = [...inputs];
     copyInputs[index] = val;
     setinputs(copyInputs);
  };
  const handelclick = (e) => {
    e.preventDefault();
    //  console.log(e);
    //  console.log(Otp);
    // let ar = match.split("");
    // console.log(ar)
    // ar.forEach((element) => {
      // console.log(element);

    //   if (
    //     ar[0] == Otp.first &&
    //     ar[1] == Otp.second &&
    //     ar[2] == Otp.third &&
    //     ar[3] == Otp.fourth
    //   ) {
    //     toast("Otp Varified");
    //     hist("/info");
    //   } else {
    //     toast("please cheach the otp and try again");
    //   }
    // });
     const missed = inputs
       .map((item, i) => {
         if (item === "") return i;
       })
       .filter((item) => item || item === 0);
     console.log("missed ", missed);
   
     if (missed.length) {
       return;
     }

     const userInput = inputs.join("");
    //  const isMatch = userInput === CODE;
    //  const msg = isMatch ? "Code is Valid" : "Code is not Valid";
    //  alert(msg);
  };
  // console.log('inputs',inputs)

  const handelkeydown = (e, index) => {
    console.log(e.target.value, index);
    if (e.target.value)
    {

      if (e.keyCode === 8) {
        const copyInputs = [...inputs];
        copyInputs[index] = "";
        setinputs(copyInputs);
  
        if (index > 0) {
          refs[index - 1].current.focus();
        }
      }
    }else
    {
      console.log("this si selse one")
    }
  };
  return (
    <div>
      <div style={{ background: "black", opacity: 80 + "%" }}>
        <h1 style={{ color: "white" }}>OTP</h1>

        <h1 style={{ color: "white" }}>
          {timer === "time up" ? timer : "00 :" + timer}
        </h1>

        <form>
          <div
            style={{
              width: 300 + "px",
              height: 100 + "px",
              padding: 10 + "px",
            }}
          >
            {otp.map((e, i) => {
              return (
                <input
                  value={inputs[i]}
                  type="text"
                  maxLength={1}
                  key={i}
                  ref={refs[i]}
                  onChange={(e) => handelchange(e, i)}
                  onKeyDown={(e) => handelkeydown(e, i)}
                />
              );
            })}
           
          </div>
          {error && <span style={{ color: "red" }}>{error.onlyNUm}</span>}
          &nbsp;
          <div style={{ alignContent: "center" }}>
            <button onClick={handelclick}>Submit</button>
          </div>
        </form>
        {ShowResenotp ? (
          <button
            style={{
              background: "red",
              color: "white",
              width: 30 + "%",
              height: 30 + "px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
            onClick={handelresend}
          >
            Resend Otp{" "}
          </button>
        ) : (
          ""
        )}
        <ToastContainer />
      </div>
    </div>
  );
}
