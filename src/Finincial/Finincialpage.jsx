import React, { useState } from "react";

export default function Finincialpage() {
  const [finincialdata, setfinincialdata] = useState({
    profilePic: "",
    adharcardNumber: "",
    adharcardpic: "",
    pandcardNumber: "",
    pandcardpic: "",
    bank: "",
    otherBankName: "",
    bankAccnumber: "",
    bankpic: "",
    ifscnumber: "",
  });
  const [Error, setError] = useState({
    profilePic: "",
    adharcardNumber: "",
    adharcardpic: "",
    pandcardNumber: "",
    pandcardpic: "",
    bank: "",
    bankAccnumber: "",
    bankpic: "",
    ifscnumber: "",
  });

  const [image, setImage] = useState("");
  ////// handelchange functions ////////////
  const handelProfilechange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.files[0]);
    // setImage(e.target.files[0].name)
    let size = e.target.files[0].size/1024;
    console.log("this is the size of file", size);
    if (size <2500){
    setfinincialdata({ ...finincialdata, [name]: e.target.files[0] });

      setError({P:''})
    }else{
      e.target.value = null;
      setError({P:'image size must be less then 5 mb or 5000kb'})
    }
  };
  const [oldValue, setOldvalue] = useState("");
  function Adharformating(newValue) {
    if (oldValue.length > newValue.length) {
      setOldvalue(newValue);
      return newValue;
    }

    var newText = newValue;
    if (newText.length == 4) {
      newText = newText + "-";
    }
    if (oldValue.length == 9) {
      newText = oldValue + "-" + newText[newText.length - 1];
    }
    // if (oldValue.length == 11) {
    //   newText = oldValue + "-" + newText[newText.length - 1];
    // }
    console.log("this ", newText);
    setOldvalue(newText);
    return newText;
  }

  const handelAdharcardChange = (e) => {
    const { name, value } = e.target;
    // debugger

    // let k=setformatforadhar(e.t)
    // console.log("dbhfbdshjfbdsdhfbshdfbssfsdfs",k)
    let reg = /^[0-9 ||-]*$/;
    if (reg.test(e.target.value)) {
      setfinincialdata({
        ...finincialdata,
        [name]: Adharformating(e.target.value).replace("--", ""),
      });
      setError({ A: "" });
    } else {
      setError({ A: "please enter only numbers" });
    }
    // if () {
    //         setfinincialdata({...finincialdata,[name]:k})

    //     setError({A:""})
    // }  else {
    //     setError({A:"please enter only numbers"})
    // }
  };
  const handelchangeadharpic = (e) => {
    const {name,value}=e.target
    console.log(e.target.files[0]);
     let size = e.target.files[0].size / 1024;
     console.log("this is the size of file", size);
     if (size < 2500) {
       setfinincialdata({ ...finincialdata, [name]: e.target.files[0] });

       setError({ A: "" });
     } else {
       e.target.value = null;
       setError({ A: "image size must be less then 5 mb or 5000kb" });
     }
  };

  const handelpancardchange = (e) => {
    const { name, value } = e.target;
    setfinincialdata({ ...finincialdata, [name]: value.toUpperCase() });
    const regpan = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
    if (regpan.test(e.target.value)) {
      let k = e.target.value.toUpperCase();
      console.log("this is uppercase", k);
      // setpancard(e.target.value)
      setfinincialdata({ ...finincialdata, [name]: value.toUpperCase() });
      setError({ pandcardNumber: "" });
    } else {
      setError({ pandcardNumber: "please enter the proper " });
      // setpancard(e.target.value)
    }
    // setfinincialdata({...finincialdata,[name]:pancard})
  };


  const handelpancardpicchange= (e)=>{
    const { name, value } = e.target;
     let size = e.target.files[0].size / 1024;
     console.log("this is the size of file", size);
     if (size < 2500) {
       setfinincialdata({ ...finincialdata, [name]: e.target.files[0] });

       setError({ pandcardNumber: "" });
     } else {
       e.target.value = null;
       setError({
         pandcardNumber: "image size must be less then 5 mb or 5000kb",
       });
     }

  }
  const handelBanckchsnge = (e) => {
    const { name, value } = e.target;
    setfinincialdata({ ...finincialdata, [name]: value });
    if (value === "Other") {
      console.log("the value is others", value);
    }
  };
  const handelOtherhange = (e) => {
   
    const { name, value } = e.target;
     const reg = /^[A-Za-z]( ?[A-Za-z] ?)*$/g;
     let vaslue = e.target.value;
     if (vaslue) {
       if (reg.test(value)) {
        setfinincialdata({...finincialdata,[name]:value})
        setError({ other: " " });
       }  else {
       setError({ other: "only char and 1 space is allowed " });
      }
      
    }else{
      setError({ other: "please enter the bank name" });

    }
  };
  const hnadelBankAccountNumberchange = (e) => {
    const { name, value } = e.target;
    let values = e.target.value;
    const reg = /^[0-9]*$/;
    if (e.target.value) {
      if (reg.test(e.target.value)) {
        setfinincialdata({ ...finincialdata, [name]: value });
        setError({ BAC: "" });
        if (values.length < 8) {
          setError({ BAC: "must be more then 8" });
        } else {
          setError({ BAC: "" });
        }
      } else {
        setError({ BAC: "only char atr allowed" });
      }
    } else {
      setfinincialdata({ ...finincialdata, [name]: value });
      
      setError({ BAC: "please enter the account number" });
    }
  };


  const handelbanckcancelcheackchangepci=(e)=>{
    const { name, value } = e.target;
    let size = e.target.files[0].size / 1024;
    console.log("this is the size of file", size);
    if (size < 2500) {
      setfinincialdata({ ...finincialdata, [name]: e.target.files[0] });

      setError({ BAC: "" });
    } else {
      e.target.value = null;
      setError({ BAC: "image size must be less then 5 mb or 5000kb" });
    }
  }
  const handelifsccodechange=(e)=>{
    const {name,value}=e.target
    const reg=/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/
    setfinincialdata({ ...finincialdata, [name]: value.toUpperCase() });
    if(reg.test(e.target.value)){

      setfinincialdata({ ...finincialdata, [name]: value.toUpperCase() });
      setError({ ifsc:"" })
    }else{
      setError({ ifsc:"please enter the valid ifsccode " })
    }
    
  }
  console.log("this is finincial data", finincialdata);
  //////////end of handel change functions//////////////////
  ////////////start onsubmit function/////////////////////////
  
    const onSubmit = () => {
      console.log("this is ProffesionalDetails details ", finincialdata);
      let cheack = [{...finincialdata}];
      for (let index = 0; index < cheack.length; index++) {
        // const element = array[index];
        if (
          cheack[index].profilePic == "" ||
          cheack[index].adharcardNumber == "" ||
          cheack[index].adharcardpic == "" ||
          cheack[index].pandcardNumber == ""||
          cheack[index].pandcardpic == "" ||
          // cheack[index].bank == "" ||
          // cheack[index].otherBankName == "" ||
          cheack[index].bankAccnumber == "" ||
          cheack[index].bankpic == "" ||
          cheack[index].ifscnumber == "" 
        ) {
          alert("please cheak there is an empty feild")

          if (cheack[index].bank == "") {
            alert("please cheak there is an empty bank");
          }else{
            if ( cheack[index].otherBankName==""){
              alert("please cheak there is an empty otherbank");
            }else{
              
            }
            
          return;
        }
      }
          
         else {
          //  if (cheack[index].bank == "") {
          //   alert("please cheak there is an empty bank");
          // }else{
          //   if ( cheack[index].otherBankName==""){
          //     alert("please cheak there is an empty otherbank");
          //   }else{
              
          //   }
          // }
          // let min=1024;
          // let max=5120;
          // console.log("the size of image in profile pic ",finincialdata.profilePic.size)
          // let finincialdataprofilePic=finincialdata.profilePic.size/1024
          // console.log("the size of image in profile pic ",finincialdata.adharcardpic.size)
          // let finincialdataadharcardpic=finincialdata.adharcardpic.size/1024
          // console.log("the size of image in profile pic ",finincialdata.pandcardpic.size)
          // let finincialdatapandcardpic=finincialdata.pandcardpic.size/1024
          // console.log("the size of image in profile pic ",finincialdata.bankpic.size)
          // let finincialdatabankpic=finincialdata.bankpic.size/1024
          // debugger
          // if (finincialdataprofilePic > 2500 ) {
          //    setError({P: "profilePic image size must be less then 5 mb or 5000kb "});
          //   }else{
          //   setError({
          //     P: "",
          //   });
          // }
          // if (finincialdataadharcardpic > 2500) {
          //   setError({A: " profilePic image size must be less then 5 mb or 5000kb",
          //   });
          // } else {
          //   setError({
          //     A: "",
          //   });
          // }
          // if (finincialdatapandcardpic > 2500) {
          //   setError({pandcardNumber:"profilePic image size must be less then 5 mb or 5000kb"});
          // } else {
          //   setError({pandcardNumber: "",
          //   });
          // }
          // if (finincialdatabankpic > 5000) {
          //   setError({BAC: "profilePic image size must be less then 5 mb or 5000kb"});
          // } else {
          //   setError({BAC: ""});
          // }
          // if (finincialdataprofilePic > 5000) {
          //   setError({
          //     A: " profilePic image size must be less then 5 mb or 5000kb' ",
          //   });
          // } else {
          //   setError({
          //     A: "",
          //   });
          // }
          

          console.log("this is cheack", cheack);
          debugger;
          if (
            cheack[index].J == "" &&
            cheack[index].S == "" &&
            cheack[index].E == "" &&
            cheack[index].O == ""
          ) {
            alert("thanks your details are added");
            // hist("/finincial");
          }

        }
      }
    };
  ////////////End  onsubmit function/////////////////////////
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div
              style={{
                background: "black",
                opacity: 80 + "%",
                width: 600 + "px",
                height: 250 + "px",
              }}
            >
              <div>
                <div style={{ color: "white" }}>
                  <label>Profile Pic </label>
                  {/* ////////for pdf///////// */}
                  {/* <input type="file" accept="application/pdf" onChange={handelProfilechange} value={finincialdata.profilePic} /> */}
                  {/* ////////for image png and jpeg///////// */}
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handelProfilechange}
                    // value={""}
                    name="profilePic"
                  />
                  <br />
                  {Error && <span style={{ color: "red" }}>{Error.P}</span>}
                </div>
                <div style={{ color: "white" }}>
                  <label>Adhar Card </label>
                  <input
                    type="text"
                    placeholder="Enter the Adharcard Number"
                    onChange={handelAdharcardChange}
                    name="adharcardNumber"
                    value={finincialdata.adharcardNumber}
                    maxLength={14}
                  />
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                  
                    name="adharcardpic"
                    onChange={handelchangeadharpic}
                  />
                  <br />
                  {Error && <span style={{ color: "red" }}>{Error.A}</span>}
                </div>
              </div>
              <div>
                <div style={{ color: "white" }}>
                  <label>Pancard </label>
                  <input
                    type="text"
                    onChange={handelpancardchange}
                    name="pandcardNumber"
                    placeholder="Enter the Pancard Number"
                    value={finincialdata.pandcardNumber}
                    maxLength={10}
                  />
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                   
                    name="pandcardpic"
                    onChange={handelpancardpicchange}
                  />
                  <br />
                  {Error && (
                    <span style={{ color: "red" }}>{Error.pandcardNumber}</span>
                  )}
                </div>
              </div>
              <div>
                <select
                  onChange={handelBanckchsnge}
                  name="bank"
                  value={finincialdata.bank}
                >
                  <option value="">Select Bank</option>
                  <option value="SBI">SBI</option>
                  <option value="ICICI">ICICI</option>
                  <option value="HDFC">HDFC</option>
                  <option value="Kotak">Kotak</option>
                  <option value="PNB">PNB</option>
                  <option value="Dena">Dena</option>
                  <option value="Axis">Axis</option>
                  <option value="IDFC">IDFC</option>
                  <option value="AU small finance">AU small finance</option>
                  <option value="Other">Other</option>
                </select>
                {finincialdata.bank == "Other" ? (
                  <div>
                    <input
                      type="text"
                      onChange={handelOtherhange}
                      name="otherBankName"
                      placeholder="Enter other Bank Name"
                      value={finincialdata.otherBankName}
                    />
                    <br />
                    {Error && (
                      <span style={{ color: "red" }}>{Error.other}</span>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div style={{ color: "white" }}>
                  <label>Bank Account number</label>
                  <input
                    type="text"
                    name="bankAccnumber"
                    placeholder="Enter  ACCount Number"
                    onChange={hnadelBankAccountNumberchange}
                    maxLength={16}
                    value={finincialdata.bankAccnumber}
                  />

                  <input
                    type="file"
                    onChange={handelbanckcancelcheackchangepci}
                    accept="image/jpeg, image/png"
                    name="bankpic"
                  />
                  <br />
                  {Error && <span style={{ color: "red" }}>{Error.BAC}</span>}
                </div>
              </div>
              <div>
                <div style={{ color: "white" }}>
                  <label>IFSC number </label>
                  <input
                    type="text"
                    placeholder="Enter the Adharcard Number"
                    value={finincialdata.ifscnumber}
                    name="ifscnumber"
                    onChange={handelifsccodechange}
                    maxLength={11}
                  />
                  {/* <input type="file" /> */}
                  <br />
                  {Error && <span style={{ color: "red" }}>{Error.ifsc}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyItems: "right",
          justifyContent: "right",
        }}
      >
        <button type="submit" onClick={onSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}
