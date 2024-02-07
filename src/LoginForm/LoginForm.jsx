import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
    const hist =useNavigate()
    let match=8401292124;
    let [Number,setNumber]=useState('')
    let [error,seterror]=useState({})
    const handelchange=(e)=>{
        const regs = /^[0-9]*$/;
        if (regs.test(e.target.value)){
              seterror({ onlyNUm: "" });

            setNumber(e.target.value)
        }else {
            seterror({onlyNUm:"Only numbers are are allowed"})
        }
    }
    const handelclick=(e)=>{
        e.preventDefault()
        console.log(Number);
        if (Number==match){
            toast("you are regestered")
            setTimeout(() => {
                
                hist('/otp')
            }, 3000);
        }else{
            toast('you have to regestier first')
        }
    }

  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: 80 + "%",
        alignContent: "center",
      }}
    >
    <h2 style={{color:'white'}} >Login </h2>
    &nbsp;
      <form>
        <div style={{ width: 300 + "px", height: 40 + "px" }}>
          <label style={{ color: "white" }}>Number : </label>
          <input type="text" value={Number} onChange={handelchange} maxLength={10} />
        </div>
        {error && <span style={{ color: "red" }}>{error.onlyNUm}</span>}
        &nbsp;
        <div style={{ alignContent: "center" }}>
          <button onClick={handelclick}>Login</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}
