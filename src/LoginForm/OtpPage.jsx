import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function OtpPage() {
  const hist = useNavigate();
  let match = "8401";
  let [timer, settimer] = useState("");
  const [ShowResenotp, setShowResenotp] = useState(false);
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  let [Otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  let [ResendCounter, SetResendCounter] = useState(0);
  let [error, seterror] = useState({});
  useEffect(() => {
    let dataa = JSON.parse(localStorage.getItem("ResendCounter"));
    console.log(
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      dataa
    );
    if (dataa) {
      SetResendCounter(dataa);
    }
  }, [ResendCounter]);
  const handelresend = () => {
    console.log("clicked the resend ");
    // debugger
    let count = 10;
    const time = setInterval(function () {
   
      count--;

      console.log(count);
      settimer(count);
      if (count === 0) {
        clearInterval(time);
        settimer("time up");
           if (ResendCounter >= 3) {
          setShowResenotp(false);
        } else {
          setShowResenotp(true);
        }
      
    }
    }, 1000);
    // let co=ResendCounter+1
    SetResendCounter((ResendCounter += 1));
    localStorage.setItem("ResendCounter", JSON.stringify(ResendCounter));

    setShowResenotp(false);
  };

  
  // console.log("this is the resend counter", ResendCounter);
  const keyuppp0 = (e) => {
    console.log(e.target.value);
    
    // debugger
  
   

      if (Otp.first.length === 1) {
        ref1.current.focus();
        ref1.current.select();
       
      }
        if (e.key == "Backspace") {
          ref0.current.focus();
          ref0.current.select();
        }
        // return;
    
  };
  const keyuppp1 = (e) => {
    console.log(e.target.value);

    // debugger


      if (Otp.second.length === 1) {
        ref2.current.focus();
        ref2.current.select();

      }
        if (e.key == "Backspace") {
          ref0.current.focus();
          ref0.current.select();
        }

  };
  const keyuppp2 = (e) => {
    console.log("keyp2  key",e.key);

    debugger

    if (Otp.third.length === 1) {
      ref3.current.focus();
      ref3.current.select();
    }
      if (e.key == "Backspace") {
        // debugger
        ref1.current.focus();
        ref1.current.select();
      }
  };
  const keyuppp3 = (e) => {
    console.log(e.target.value);

    // debugger
    if (Otp.fourth.length === 1) {
      ref3.current.focus();
      // ref2.current.select();
      
    }if (e.key == "Backspace") {
      ref2.current.focus();
      ref2.current.select();
    }
  };

  useEffect(() => {
    // if (ResendCounter==2){

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
  // }
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

  const handelchange = (e, index) => {
    const regs = /^[0-9]*$/;
    const val = e.target.value;

    console.log("rrr", val);

    if (regs.test(e.target.value)) {
      let { name, value } = e.target;

      setOtp({ ...Otp, [name]: value });
    
      seterror({ onlyNUm: "" });
    } else {
      seterror({ onlyNUm: "Only number are allowed" });
    }
  };
  const handelclick = (e) => {
    e.preventDefault();
    //  console.log(e);
    //  console.log(Otp);
    let ar = match.split("");
    // console.log(ar)
    // ar.forEach((element) => {
    // console.log(element);

    if (
      ar[0] === Otp.first &&
      ar[1] === Otp.second &&
      ar[2] === Otp.third &&
      ar[3] === Otp.fourth
    ) {
      toast("Otp Varified completed");
      setTimeout(() => {
        hist("/info");
        localStorage.removeItem("ResendCounter");
        console.log(Otp)
      }, 3000);
    } else {
      toast("please cheach the otp and try again");
    }
    // });
  };
  // const handelFocus = (name) => {
  //   // if (name === "fourth") {
  //   //   setOtp({ ...Otp });
  //   // } else {
  //     setOtp({ ...Otp, [name]: '' })
  //   // }
  // }
  return (
    <div>
      <div style={{ background: "black", opacity: 80 + "%" }}>
        <h1 style={{ color: "white" }}>OTP</h1>
        <h1 style={{ color: "white" }}>
          {ResendCounter >= 3
            ? ""
            : timer === "time up"
            ? timer
            : "00 :" + timer}
        </h1>

        <form>
          <div
            style={{
              width: 300 + "px",
              height: 100 + "px",
              padding: 10 + "px",
            }}
          >
            <input
              type="text"
              name="first"
              id="first"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              // onFocus={(e) => handelFocus("first")}
              ref={ref0}
              onKeyUp={keyuppp0}
              value={Otp.first}
              onChange={handelchange}
              maxLength={1}
              onClick={() => setOtp({ first: "" })}
            />
            <input
              type="text"
              name="second"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              // onFocus={(e) => handelFocus("second")}
              onKeyUp={keyuppp1}
              ref={ref1}
              value={Otp.second}
              onChange={handelchange}
              maxLength={1}
              onClick={() => setOtp({ second: "" })}
            />
            <input
              type="text"
              name="third"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              // onFocus={(e) => handelFocus("third")}
              onKeyUp={keyuppp2}
              ref={ref2}
              value={Otp.third}
              onChange={handelchange}
              maxLength={1}
              onClick={() => setOtp({ third: "" })}
            />
            <input
              type="text"
              name="fourth"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              // onFocus={(e) => handelFocus("fourth")}
              ref={ref3}
              onKeyUp={keyuppp3}
              value={Otp.fourth}
              onChange={handelchange}
              maxLength={1}
              onClick={() => setOtp({ fourth: "" })}
            />
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
