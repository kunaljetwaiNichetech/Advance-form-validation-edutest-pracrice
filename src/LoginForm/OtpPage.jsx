import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OtpPage() {
  const hist = useNavigate();
  let match = "8401";
  let [Otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [ShowResenotp, setShowResenotp] = useState(false);
  let [error, seterror] = useState({});
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
  const handelchange = (e) => {
    const regs = /^[0-9]*$/;
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

  return (
    <div style={{ background: "black", opacity: 80 + "%" }}>
      <h1 style={{ color: "white" }}>OTP</h1>
      <form>
        <div
          style={{ width: 300 + "px", height: 100 + "px", padding: 10 + "px" }}
        >
          <input
            type="text"
            name="first"
            style={{
              width: 45 + "px",
              borderRadius: 5 + "px",
              height: 35 + "px",
            }}
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
            value={Otp.fourth}
            onChange={handelchange}
            maxLength={1}
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
        >
          Resend Otp{" "}
        </button>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
}
