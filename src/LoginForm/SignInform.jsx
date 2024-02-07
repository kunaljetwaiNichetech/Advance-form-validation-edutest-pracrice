import { React, useState } from "react";
import data from "./Data";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import format from "date-fns/format";

import DatePicker from "react-datepicker";
export default function SignInform() {
  const [Formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    alternativePhone: "",
    dateofbirth:'',
    currentaddress: "",
    state: [],
    city: "",
    pincode: "",
  });
  const [Error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    alternativePhone: "",
    dateofbirth:new Date().getDate(),
    currentaddress: "",
    state: [],
    city: "",
    pincode: "",
  });
  ///////handelchange///////////////////
  const handelchangeform = (e) => {
    let Error = "";
    // console.log(e.target.value)
    const { name, value } = e.target;
    // const validations = {};
    // const values = e.target.value;

    // let data = /^[a-zA-Z]*$/.replace(values);
    // if (name == "firstname") {
    //   const reg = /^[a-zA-Z]*$/;
    //   if (reg.test(values)) {
    //       if (Formdata.firstname.length <= 2) {
    //           if (Formdata.firstname.length >=15){
    //               validations.firstname="maximum 15 char are allowed"
    //             }
    //             validations.firstname = "the length must be minimum 2 char"
                
    //         }
    //         setFormdata({ ...Formdata, [name]: value });
    //         validations.firstname = "";
    //   } else {
    //     validations.firstname = "only char are allowed";
    //   }
    // }
    //     if (reg.test(e.target.value)){
    //          setFormdata({ ...Formdata, [name]: value });
    //     }
    //     else{
    //         Error = "only char are allowed";
    //     }
    //      if (Formdata.firstname.length<=2){
    //       Error = "the length must be minimum 2 char";
    //     }else {
    //       Error = "";
    //     }
    //     if (Formdata.firstname.length>=15){
    //       Error = "maximum 15 char are allowed";
    //   }else{
    //       Error = "";
    //   }
    // }
    // setError({
    //   ...Error,
    //   [name]: Error,
    // });
    // if (name == "lastname") {
    //   const reg = /^[a-zA-Z]*$/;
    //   if (reg.test(e.target.value)) {
    //     setFormdata({ ...Formdata, [name]: value });
    //     setError("");
    //   } else {
    //     setError({ lastname: "only char are allowed" });
    //   }
    //   if (Formdata.lastname.length <= 2) {
    //     setError({ lastname: "the length must be minimum 2 char" });
    //   } else {
    //     setError("");
    //   }
    // }
    // if (name == "email") {
    //     let vaalues=e.target.value
    //     setFormdata({...Formdata,[name]:value})
    //    const r = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
    //   // const r = /^[a-zA-Z]*$/;
    //   if (!vaalues.match(r)) {
    //     console.log("hiii this is");
    //     setError({ email: "email.is not valid" });
    //   } else {
    //     setFormdata({ ...Formdata, [name]: value });
    //     setError("");
    //   }
    // }
    // if (name=='alternativePhone') {
    //     const reg=/^[0-9]*$/
    //     if (reg.test(e.target.value)){
    //           setFormdata({ ...Formdata, [name]: value });
    //           setError("");

    //     }else{
    //         setError({ alternativePhone :'only numbers are allowed'});
    //     }

    // }
  };
  const handelchangeFirstname=(e)=>{
    const {name,value}=e.target
      const validations = {};
      const reg = /^[a-zA-Z]*$/;
      if (reg.test(e.target.value)) {
          setFormdata({ ...Formdata, [name]: value });

          if (Formdata.firstname.length <= 2) {
                validations.firstname = "the length must be minimum 2 char" 
            }
          } else {
            validations.firstname = "only char are allowed";
          }
          setError(validations)
        }
        console.log(Formdata)
    const handelchangesecond = (e) => {
      const { name, value } = e.target;
      const validations = {};
      const reg = /^[a-zA-Z]*$/;
      if (reg.test(e.target.value)) {
        setFormdata({ ...Formdata, [name]: value });

        if (Formdata.lastname.length <= 2) {
          validations.lastname = "the length must be minimum 2 char";
        }
      } else {
        validations.lastname = "only char are allowed";
      }
      setError(validations);
    };
     const handelchangeemail = (e) => {
       const { name, value } = e.target;
       const validations = {};
       let vaalues=e.target.value
        setFormdata({...Formdata,[name]:value})
       const r = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
      // const r = /^[a-zA-Z]*$/;
      if (!e.target.value.match(r)) {
        // console.log("hiii this is");
        setError({ email: "email.is not valid" });
      } else {
        setFormdata({ ...Formdata, [name]: value });
        setError("");
      }
    }
    const handelchangealternativePhone=(e)=>{
      const { name, value } = e.target;
      const reg = /^[0-9]*$/;
          if (reg.test(e.target.value)){
                setFormdata({ ...Formdata, [name]: value });
                setError("");

          }else{
              setError({ alternativePhone :'only numbers are allowed'});
          }
      
    }
    const handleChangeDate=(e)=>{
    //  console.log(format(e,'dd/MM/yyyy'))
     console.log(format(e,'dd/MM/yyy'))
     
     setFormdata({dateofbirth:e})
     let date = moment(e).format("DD/MM/YYYY");
     console.log("date", date);
     setFormdata({ ...Formdata, ["dateofbirth"]: date });


     
    }

    const handelchangeformcurrentaddress = (e) => {
      const {name,value}=e.target
  
      setFormdata({...Formdata,[name]:value})
    };
    const handelchangeformpincode=(e)=>{
       const { name, value } = e.target;
       const validations={}
       const values=e.target.value
       const reg = /^[0-9]*$/;
      if (reg.test(e.target.value)) {
          setFormdata({ ...Formdata, [name]: value });

          if (Formdata.pincode.length <= 6) {
                validations.pincode = "the length must be minimum 6 char" 
            }else{
              validations.pincode=''
            }
          } else {
            validations.pincode = "only number are allowed";
          }
          setError(validations)
        }

    

  ////////////////////end handelchange///////////////
  const handelsubmit = (e) => {
    e.preventDefault();
    const validations = {};
    console.log("this is submit eeeeeee", Formdata);
    if (Formdata.firstname.length <= 0) {
      validations.firstname = "FirstName is required";
    }
    if (Formdata.email.length <= 0) {
      validations.email = "email is required";
    }
    if (Formdata.dateofbirth.length <= 0) {
      validations.dateofbirth = "dateofbirth is required";
    }
    if (Formdata.currentaddress.length <= 0) {
      validations.currentaddress = "currentaddress is required";
    }
    if (Formdata.pincode.length <= 0) {
      validations.pincode = "pincode is required";
    }
    if (Formdata.firstname.length <= 0) {
      validations.firstname = "FirstName is required";
    }
    if (Formdata.firstname.length <= 0) {
      validations.firstname = "FirstName is required";
    }
    if (Formdata.firstname.length <= 0) {
      validations.firstname = "FirstName is required";
    }
    setError(validations);
  };
  
  const handelchangecity = (e) => {
    // let d = setCity(data.find((ctr) => ctr.citsies === e.target.value).citsies);
    //   let d = e.target.value;
    const { name, value } = e.target;
    setFormdata({ [name]: value });

    console.log("this si sselected city", Formdata.state, Formdata.city);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h1 style={{ color: "white" }}>the info Page</h1>
          <form onSubmit={handelsubmit}>
            <div
              style={{
                background: "black",
                opacity: 80 + "%",
                width: 800 + "px",
                height: 400 + "px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: 10 + "px",
                  margin: 10 + "px",
                }}
              >
                <div>
                  <label style={{ color: "white" }}>First Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    onChange={handelchangeFirstname}
                    value={Formdata.firstname}
                  />
                  <br />
                  {Error && (
                    <span style={{ color: "red" }}>{Error.firstname}</span>
                  )}
                </div>
                <div>
                  <label style={{ color: "white" }}>End Name</label>
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    onChange={handelchangesecond}
                    value={Formdata.lastname}
                  />
                  <br />
                  {Error && (
                    <span style={{ color: "red" }}>{Error.lastname}</span>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: 10 + "px",
                  margin: 10 + "px",
                }}
              >
                <div>
                  <label style={{ color: "white" }}>Email</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    onChange={handelchangeemail}
                    value={Formdata.email}
                  />
                  <br />
                  {Error && <span style={{ color: "red" }}>{Error.email}</span>}
                </div>
                <div>
                  <label style={{ color: "white" }}>Alternative</label>
                  {/* <p>select date above 18 years </p> */}
                  <br />
                  <input
                    type="text"
                    name="alternativePhone"
                    onChange={handelchangealternativePhone}
                    value={Formdata.alternativePhone}
                    maxLength={10}
                  />
                  <br />
                  {Error && (
                    <span style={{ color: "red" }}>
                      {Error.alternativePhone}
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: 10 + "px",
                  margin: 10 + "px",
                }}
              >
                <div>
                  <label style={{ color: "white" }}>Date Of Birth </label>
                  <br />
                  {/* <input
                    type="date"
                    name="dateofbirth"
                    onChange={handelchangeform}
                    value={Formdata.dateofbirth}
                  /> */}
                  <h5 style={{ color: "red" }}>
                    18 years above are allowed <br />
                    so current year -18 years<br/>
                    select according
                  </h5>
                  <DatePicker
                    showYearDropdown
                    yearDropdownItemNumber={150}
                    minDate={moment().subtract(150, "years")._d}
                    maxDate={moment().subtract(18, "years")._d}
                    scrollableYearDropdown
                    onChange={handleChangeDate}
                    selected={Formdata.dateofbirth}
                  />
                  {Error && (
                    <span style={{ color: "red" }}>{Error.dateofbirth}</span>
                  )}
                </div>
                <div>
                  <label style={{ color: "white" }}>Current Address </label>
                  <br />
                  <input
                    type="text"
                    name="currentaddress"
                    onChange={handelchangeformcurrentaddress}
                    value={Formdata.currentaddress}
                  />
                  {Error && (
                    <span style={{ color: "red" }}>{Error.currentaddress}</span>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: 10 + "px",
                  margin: 10 + "px",
                }}
              >
                <div>
                  <label style={{ color: "white" }}>State</label>
                  <br />
                  {/* <select onChange={handelchangeform} value={Formdata.state}>
                  <option value="">select state</option>
                  {data &&
                    data.map((item, i) => (
                      <>
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      </>
                    ))}
                </select>
                <br />
                <select onChange={handelchangecity} value={Formdata.city}>
                  <option value="">select city</option>
                  {Formdata.state &&
                    Formdata.state.map((item, i) => (
                      <>
                        <option id={i} key={item} value={item}>
                          {item}
                        </option>
                      </>
                    ))}
                </select> */}
                </div>
              </div>
              <div style={{ padding: 10 + "px", margin: 10 + "px" }}>
                <label style={{ color: "white" }}>Pin Code</label>
                <br />
                <input
                  type="text"
                  name="pincode"
                  onChange={handelchangeformpincode}
                  value={Formdata.pincode}
                  maxLength={6}
                />
                {Error && <span style={{ color: "red" }}>{Error.pincode}</span>}
              </div>
              <div style={{ color: "white" }}>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
