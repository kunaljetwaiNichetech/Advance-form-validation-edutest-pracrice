import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
// import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";

export default function ProffesionalPage() {
  const hist=useNavigate()
  const [ProffesionalDetails, setProffesionalDetails] = useState([
    {
      jobtitle: "",
      organisationName: "",
      startdate: "",
      enddate: "",
      responsibilities: "",
      button: false,
    },
  ]);
  const handeljobchange = (e, i) => {
     let list = [...ProffesionalDetails];
     let data = [...ProffesionalDetails];
     const reg = /^[A-Za-z]( ?[A-Za-z] ?)*$/g;
     let vaslue = e.target.value;
     const { name, value } = e.target;
     if (vaslue) {
       if (reg.test(value)) {
         list[i]["jobtitle"] = value;
         data[i].J = "";
         setProffesionalDetails(list);
       } else {
         data[i].J = "only char and one space is allowed";
         setProffesionalDetails(list);
       }
     } else {
       list[i]["jobtitle"] = value;
       setProffesionalDetails(list);
       data[i].J = "please enter the name";
     }
     // setProffesionalDetails(list);
     setProffesionalDetails(data);
  };
  const handelorganisationchange=(e,i)=>{
    
    let list = [...ProffesionalDetails];
    let data = [...ProffesionalDetails];
    const reg = /^[A-Za-z]( ?[A-Za-z] ?)*$/g;
    let vaslue=e.target.value
    const { name, value } = e.target;
    if (vaslue){
        if (reg.test(value)) {
        list[i]["organisationName"] = value;
        data[i].O = "";
        setProffesionalDetails(list);
    } else {
        data[i].O = "only char and one space is allowed";
        setProffesionalDetails(list);
    }
}else{
    list[i]["organisationName"] = value;
    setProffesionalDetails(list);
    data[i].O = "please enter the name";


    }
    // setProffesionalDetails(list);
    setProffesionalDetails(data)
}
let [startd,setstartd]=useState()
let [endd,setendd]=useState()
  const handelstartdaechange=(e,i)=>{
    let data=[...ProffesionalDetails]

      
    let list = [...ProffesionalDetails];
    // const { name, value } = e.target;
    debugger
    if (e >endd  ){
        data[i].S="the date is greater then end date"
    }else {
        
      data[i].S=""
      list[i]["startdate"] = e;
      list[i]["startdateformated"] = moment(e).format("DD/MM/YYYY");
    }
    let dddd=format(e,"dd/MM/yyyy")
    setstartd(e)
    setProffesionalDetails(list);
    setProffesionalDetails(data)
    
  }
  
  const handelenddaechange = (e, i) => {
    let data =[...ProffesionalDetails]
    // console.log("dfskjhjshfsadh sahdsjhfsdajfhsajdh askhdfsahfjhsajgsaghg hg",data)
    console.log("this start date steate",startd)
    let dddd=format(e,"dd/MM/yyyy")
    setendd(e)
    let list = [...ProffesionalDetails];
    // const { name, value } = e.target;
    // debugger
    if (e < startd){
      console.log("the enddate is lesser then start date ")
      data[i].E = "the enddate is lesser then start date";
    }else {
      console.log("fine it is")
      data[i].E = "";
      
      list[i]["enddate"] = e;
      list[i]["enddateformated"] = moment(e).format("DD/MM/YYYY");
    }
    setProffesionalDetails(list);
    setProffesionalDetails(data)
  };
  const handelresponcibilitychange = (e, i) => {
   let list = [...ProffesionalDetails];
   let data = [...ProffesionalDetails];
   const reg = /^[A-Za-z]( ?[A-Za-z] ?)*$/g;
   let vaslue = e.target.value;
   const { name, value } = e.target;
   if (vaslue) {
     if (reg.test(value)) {
       list[i]["responsibilities"] = value;
       data[i].J = "";
       setProffesionalDetails(list);
     } else {
       data[i].J = "only char and one space is allowed";
       setProffesionalDetails(list);
     }
   } else {
     list[i]["responsibilities"] = value;
     setProffesionalDetails(list);
     data[i].R = "please enter the name";
   }
   // setProffesionalDetails(list);
   setProffesionalDetails(data);
  };
  
  //////////////////////form valll//////////////////////
  const formValidation = (AcadamicDetails) => {
    const data = [...AcadamicDetails];
    var re = /\S+@\S+\.\S+/;
    let valid = true;
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if (data[index].jobtitle == "") {
        data[index].J = "Job Title  required";
        valid = false;
      } else {
        data[index].J = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
      if (data[index].organisationName == "") {
        data[index].O = "Organisation is required required";
        valid = false;
      } else {
        data[index].O = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
      if (data[index].startdate == "") {
        data[index].S = "startdate is required is  required";
        valid = false;
      } else {
        data[index].S = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
      if (data[index].enddate == "") {
        data[index].E = "end Date is required required";
        valid = false;
      } else {
        data[index].E = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
    //   if (data[index].responsibilities == "") {
    //     data[index].R = " required";
    //     valid = false;
    //     } else {
    //     data[index].R = "";
    //           // data[index].nameLengthCheck = "";
    //     valid = true;
    //     }
    }
    setProffesionalDetails(data);
    return valid;
  };
  //////////////////end form val//////////////////
  const handeladd = (val, i) => {
    const errorRes = formValidation(ProffesionalDetails);
    console.log("iiiii", i);

    debugger;
    if (errorRes) {
      // api call
      // setFormVal([...formVal, { name: "", email: "" }]);

      const lsit = [...ProffesionalDetails];
      console.log("iiiii", i);
      lsit[i]["button"] = true;

      setProffesionalDetails([
        ...ProffesionalDetails,
        {
          jobtitle: "",
          startdate: "",
          enddate: "",
          responsibilities: "",
          button: false,
        },
      ]);
      //   setshoeAddbuton(true);
      //   setshoeRemovebuton(false);
      // } else {
      // error msg
    }

    console.log("this is NO of record", ProffesionalDetails);
  };
  const handelRemove = (i) => {
    console.log("this is the handel remove function id", i);
    const list = [...ProffesionalDetails];
    list.splice(i, 1);
    // console.log("this is the index od iiii",i)
    setProffesionalDetails(list);
    // setshoeRemovebuton(false);
  };
  ///////////////end of handel  add or remove button//////////////
  /////////////////handel Submit button ///////////////////////////
  const onSubmit = () => {
    console.log("this is ProffesionalDetails details ", ProffesionalDetails);
    let cheack = [...ProffesionalDetails];
    for (let index = 0; index < cheack.length; index++) {
      // const element = array[index];
      if (
        cheack[index].jobtitle == "" ||
        cheack[index].organisationName == "" ||
        cheack[index].startdate == "" ||
        cheack[index].enddate == ""
      ) {
        alert("please cheak there is an empty feild");
        return
      } else {
        console.log("this is cheack", cheack);
        debugger;
        if (
          cheack[index].J == "" &&
          cheack[index].S == "" &&
          cheack[index].E == "" &&
          cheack[index].O == ""
        ) {
          alert("thanks your details are added");
          hist("/finincial");
        }
      }
    }
  };
  ////////////////end of handel submit button/////////////////////
  return (
    <div>
      {ProffesionalDetails.map((val, i) => (
        <div
          style={{
            background: "black",
            opacity: 80 + "%",
            width: 600 + "px",
            height: 250 + "px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1 style={{ color: "white" }}>Proffeional Page</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: 10,
                    padding: 10,
                  }}
                >
                  <div style={{ color: "white" }}>
                    <label>Job Title</label>
                    <br />
                    <input
                      type="text"
                      onChange={(e) => handeljobchange(e, i)}
                      value={val.jobtitle}
                      placeholder="Enter Job Title"
                    />
                    <br />
                    {val.J && <span style={{ color: "red" }}>{val.J}</span>}
                  </div>
                  <div style={{ color: "white" }}>
                    <label>Organization Name</label>
                    <br />
                    <input
                      type="text"
                      onChange={(e) => handelorganisationchange(e, i)}
                      value={val.organisationName}
                      placeholder="Please enter the Organisation name"
                    />
                    <br />
                    {val.O && <span style={{ color: "red" }}>{val.O}</span>}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: 10,
                    padding: 10,
                  }}
                >
                  <div style={{ color: "white" }}>
                    <label>Start date</label>
                    <br />
                    {/* <input
                      type="text"
                      value={val.startdate}
                      onChange={(e) => handelstartdaechange(e, i)}
                      placeholder="dd/mm/yyyy"
                    /> */}
                    <DatePicker
                      selected={val.startdate}
                      placeholderText="dd/mm/yyyy"
                      maxDate={new Date()}
                      onChange={(e) => handelstartdaechange(e, i)}
                    />
                    <br />
                    {val.S && <span style={{ color: "red" }}>{val.S}</span>}
                  </div>
                  <div style={{ color: "white" }}>
                    <label>End date</label>
                    <br />
                    {/* <input
                      type="text"
                      onChange={(e) => {
                        handelenddaechange(e, i);
                      }}
                      value={val.enddate}
                      placeholder="dd/mm/yyyy"
                    /> */}
                    <DatePicker
                      selected={val.enddate}
                      //   onSelect={val.enddate}
                      onChange={(e) => handelenddaechange(e, i)}
                      placeholderText="dd/mm/yyyy"
                      maxDate={new Date()}
                      scrollableYearDropdown
                    />
                    <br />
                    {val.E && <span style={{ color: "red" }}>{val.E}</span>}
                  </div>
                </div>
                <div style={{ color: "white" }}>
                  <label>Responsibilities</label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => handelresponcibilitychange(e, i)}
                    value={val.responsibilities}
                    placeholder="enter Responcibility"
                  />
                  <br />
                  {val.R && <span style={{ color: "red" }}>{val.R}</span>}
                </div>
              </div>
              {val.button == false &&
                (i <= 0 ? (
                  <button onClick={() => handeladd(val, i)}>Add</button>
                ) : (
                  <>
                    <button onClick={() => handelRemove(i)}>remove</button>
                    <button onClick={() => handeladd(val, i)}>Add</button>
                  </>
                ))}

              {val.button == true && (
                <button onClick={() => handelRemove(i)}>remove</button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          color: "white",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
