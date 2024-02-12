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
  const ref0 = useRef();
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  let otp = ["", "", "", ""];
  let [inputs, setinputs] = useState(otp);
  let [Otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
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
  const keyuppp = (e) => {
    console.log(e.key);

    if (Otp.first.length === 1) {
      ref.current.focus();

      if (e.key == "Backspace") {
        ref0.current.focus();
      }
    }
    if (Otp.second.length === 1) {
      ref1.current.focus();
      if (e.key == "Backspace") {
        ref.current.focus();
      }
    }
    if (Otp.third.length === 1) {
      ref2.current.focus();
      if (e.key == "Backspace") {
        ref1.current.focus();
      }
    }
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

    console.log("rrr", val);
    if (regs.test(e.target.value)) {
      let { name, value } = e.target;

      setOtp({ ...Otp, [name]: value });
      debugger;
      seterror({ onlyNUm: "" });
    } else {
      seterror({ onlyNUm: "Only number are allowed" });
    }
    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }
    const copyinputs = [...inputs];
    copyinputs[index] = val;
    setinputs(copyinputs);
  };
  const handelclick = (e) => {
    e.preventDefault();
    //  console.log(e);
    //  console.log(Otp);
    let ar = match.split("");
    // console.log(ar)
    ar.forEach((element) => {
      // console.log(element);

      if (
        ar[0] == Otp.first &&
        ar[1] == Otp.second &&
        ar[2] == Otp.third &&
        ar[3] == Otp.fourth
      ) {
        toast("Otp Varified");
        hist("/info");
      } else {
        toast("please cheach the otp and try again");
      }
    });
  };
  // console.log('inputs',inputs)

  const handelkeydown = (e, index) => {
    console.log(e.target.value, index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setinputs(copyInputs);
      console.log(index);
      if (index > 0) {
        console.log(index);
        refs[index - 1].current.focus();
      }
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
                  ref={refs[i]}
                  onChange={(e) => handelchange(e, i)}
                  onKeyDown={(e) => handelkeydown(e, i)}
                />
              );
            })}
            {/* <input
              type="text"
              name="first"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              ref={ref0}
              onKeyUp={keyuppp}
              value={Otp.first}
              onChange={handelchange}
              maxLength={1}
            />
            <input
              type="text"
              name="second"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              onKeyUp={keyuppp}
              ref={ref}
              value={Otp.second}
              onChange={handelchange}
              maxLength={1}
            />
            <input
              type="text"
              name="third"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              onKeyUp={keyuppp}
              ref={ref1}
              value={Otp.third}
              onChange={handelchange}
              maxLength={1}
            />
            <input
              type="text"
              name="fourth"
              style={{
                width: 45 + "px",
                borderRadius: 5 + "px",
                height: 35 + "px",
              }}
              ref={ref2}
              onKeyUp={keyuppp}
              value={Otp.fourth}
              onChange={handelchange}
              maxLength={1}
            /> */}
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
