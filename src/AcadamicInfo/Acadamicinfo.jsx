import React, { useState } from "react";
import Acadamic from "./Acadamic";

const Acadamicinfo = () => {
  const [degree, setdegree] = useState("");
  const [Institute, setInstitute] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [Year, setYear] = useState("");
  ///// for rendering the divs again///////
  const [NoOfRecored, setNoOfRecored] = useState([]);
  ///////////////end of rendering
  ////// just object for values state //////////
  const [AcadamicDetails, setAcadamicDetails] = useState([
    {
      degree: "",
      Institute: "",
      Percentage: "",
      Year: "",
    },
  ]);
  console.log("this is acadamic details", AcadamicDetails);
  ///////////end of objects  for value state

  const [Error, setError] = useState({
    degree: "",
    Institute: "",
    Percentage: "",
    Year: "",
  });
  console.log("this is errors ", Error);
  /////////handel change functions for every thing
  const handelchangeDegree = (e, i) => {
    // const validation ={}
    let data = [...AcadamicDetails];
    const { name, value } = e.target;
    if (e.target.value) {
      const lsit = [...AcadamicDetails];
      lsit[i]["degree"] = value;
      setAcadamicDetails(lsit);
      // setdegree(e.taget.value)
      // setdegree(e.target.value);
      // setError({ ...Error,["degree"]: "" });
      data[i].d = "";
    }
    setAcadamicDetails(data);
  };
  const handelInstitute = (e, i) => {
    let value = e.target.value;
    let data = [...AcadamicDetails];
    if (value) {
      // const validation={}
      const reg = /^[a-zA-Z\s]*$/;
      if (reg.test(e.target.value)) {
        const { name, value } = e.target;
        const lsit = [...AcadamicDetails];
        lsit[i]["Institute"] = value;
        setAcadamicDetails(lsit);
        // setInstitute(e.target.value);
        // setError({...Error, ["Institute"]: "" });
        data[i].I = "";
      } else {
        // setError({ ...Error,["Institute"]: "Only Charactor are allowed" });
        data[i].I = "Only Charactor are allowed";
      }
      // setError(validation)
    } else {
      const lsit = [...AcadamicDetails];
      lsit[i]["Institute"] = value;
      setAcadamicDetails(lsit);
      //  setInstitute(e.target.value);
      //  setError({ ...Error, ["Institute"]: "Please enter the Institute name" });
      data[i].d = "Please enter the Institute name";
    }
    setAcadamicDetails(data);
  };

  const HandelPercentage = (e, i) => {
    let data = [...AcadamicDetails];
    //  const validations = {};
    const regs = /^[0-9]$|^[1-9][0-9]$|^(99)*$/;
    if (e.target.value) {
      if (regs.test(e.target.value)) {
        const { name, value } = e.target;

        // setResult(e.target.value);
        // setError({ ...Error,["Percentage"]: "" });
        data[i].P = "";
        const lsit = [...AcadamicDetails];

        lsit[i]["Percentage"] = value;
        setAcadamicDetails(lsit);
        // setPercentage(e.target.value);
      } else {
        // setError({ ...Error, ["Percentage"]: "only numbers are allowed" });
        data[i].P = "only numbers are allowed";
      }
    } else {
      const { name, value } = e.target;
      const lsit = [...AcadamicDetails];
      lsit[i]["Percentage"] = value;
      setAcadamicDetails(lsit);
      // setPercentage(e.target.value);
      // setError({ ...Error, ["Percentage"]: "please enter the Percentage" });
      data[i].P = "please enter the Percentage";
    }
    // setError(validations);
    setAcadamicDetails(data);
  };
  const Handelyear = (e, i) => {
    let data = [...AcadamicDetails];
    let y = e.target.value;
    console.log(Year.length, y);
    const reg = /^[0-9]*$/;
    if (reg.test(e.target.value)) {
      const { name, value } = e.target;
      const lsit = [...AcadamicDetails];
      lsit[i]["Year"] = value;
      setAcadamicDetails(lsit);
      // setYear(e.target.value);
      if (y.length < 4) {
        // setError({Year:''})
        // setError({ ...Error,["Year"]: 'please enetr valid year Format "yyyy"' });
        data[i].Y = 'please enetr valid year Format "yyyy"';
      } else {
        let curyear = new Date().getFullYear();
        console.log("this is curret year", curyear);
        // debugger
        if (y >= curyear) {
          // setError({ ...Error, ["Year"]: " greater then current year" });
          data[i].Y = "greater then current year";
        } else if (y < 1950) {
          // setError({ ...Error, ["Year"]: " the year is less then 1950" });
          data[i].Y = " the year is less then 1950";
        } else {
          data[i].Y = " ";
          // setError({ ...Error, ["Year"]: "" });
        }
      }
    } else {
      data[i].Y = "please enter the valid year ";
      // setError({ ...Error, ["Year"]: "please enter the valid year" });
    }
    setAcadamicDetails(data);
  };
  ///////////end of handel change functions
  /////// handel submit for submiting ////////////////
  const handelsubmit = (e) => {
    e.preventDefault();
    const validations = {};
    if (degree.length <= 0) {
      validations.degree = "please select the degree ";
    } else {
      validations.degree = "";
    }
    if (Institute.length <= 0) {
      validations.Institute = "please Enter the Institue ";
    } else {
      validations.Institute = "";
    }
    if (Percentage.length <= 0) {
      validations.Percentage = "please Enter percentage ";
    } else {
      validations.Percentage = "";
    }
    if (Year.length <= 0) {
      validations.Year = "please Enter Year ";
    } else {
      validations.Year = "";
    }

    // console.log(degree);
    console.log(Year, Percentage, Institute, degree);
    setError(validations);
    // debugger
    if (Year && Institute && degree && Percentage) {
      if (
        Error.Institute == "" &&
        Error.Year == "" &&
        Error.Percentage == "" &&
        Error.degree == ""
      ) {
        setAcadamicDetails({
          Year: Year,
          degree: degree,
          Percentage: Percentage,
          Institute: Institute,
        });
        alert("form submited");
      }
    }
  };
  /////////end of submit function ////////////////

  //////////////////////form valll//////////////////////
  const formValidation = (AcadamicDetails) => {
    const data = [...AcadamicDetails];
    var re = /\S+@\S+\.\S+/;
    let valid = true;
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if (data[index].degree == "") {
        data[index].d = "degree  required";
        valid = false;
      } else {
        data[index].d = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
      if (data[index].Institute == "") {
        data[index].I = "Institute is required required";
        valid = false;
      } else {
        data[index].I = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
      if (data[index].Percentage == "") {
        data[index].P = "Percentage is  required";
        valid = false;
      } else {
        data[index].P = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
      if (data[index].Year == "") {
        data[index].Y = "Year required";
        valid = false;
      } else {
        data[index].Y = "";
        // data[index].nameLengthCheck = "";
        valid = true;
      }
    }
    setAcadamicDetails(data);
    return valid;
  };
  //////////////////end form val//////////////////
  
  //////handel add or remove button for div ///////////
  const handeladd = (val, i) => {
    const errorRes = formValidation(AcadamicDetails);
    console.log("errorRes", errorRes);
    
    debugger;
    if (errorRes) {
      // api call
      // setFormVal([...formVal, { name: "", email: "" }]);
      setAcadamicDetails([
        ...AcadamicDetails,
        { degree: "", Institute: "", Percentage: "", Year: "" },
      ]);
    } else {
      // error msg
    }

    console.log("this is NO of record", AcadamicDetails);
  };
  const handelRemove = (i) => {
    console.log("this is the handel remove function id", i);
    const list = [...AcadamicDetails];
    list.splice(i, 1);
    // console.log("this is the index od iiii",i)
    setAcadamicDetails(list);
  };
  ///////////////end of handel  add or remove button//////////////
/////////////////handel Submit button ///////////////////////////
const onSubmit=()=>{
  console.log("this is acadamic details ",AcadamicDetails)
  let cheack=[...AcadamicDetails]
  for (let index = 0; index < cheack.length; index++) {
    // const element = array[index];
    if (cheack[index].Institute==''||cheack[index].degree==''||cheack[index].Year==''||cheack[index].Percentage=='')
  {
    alert ("please cheak there is an empty feild")
  }    else{
    alert("thanks your details are added")
  }
  }
}
////////////////end of handel submit button/////////////////////

  return (
    <div>
      {AcadamicDetails.map((val, i) => (
        <div key={i} className="container">
          {/* {console.log("thsi is in the starting of div",i)} */}
          <div className="row">
            <div className="col-sm-6">
              <form>
                <div
                  style={{
                    background: "black",
                    opacity: 80 + "%",
                    width: 600 + "px",
                    height: 200 + "px",
                  }}
                >
                  <div>
                    <h1 style={{ color: "white" }}>this is acadamic Page</h1>
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
                      <label style={{ color: "white" }}>Qualification</label>
                      <br />
                      <select
                        onChange={(e) => handelchangeDegree(e, i)}
                        value={val.degree}
                      >
                        <option value="">select Degree</option>
                        {Acadamic &&
                          Acadamic.map((item, i) => (
                            <>
                              <option key={i} value={item}>
                                {item}
                              </option>
                            </>
                          ))}
                      </select>
                      <br />
                      <div style={{ color: "red" }}>{val.d}</div>
                      {/* {Error && (
                        <span style={{ color: "red" }}>{Error.degree}</span>
                      )} */}
                    </div>
                    <div>
                      <label style={{ color: "white" }}>Institute Name</label>
                      <br />
                      <input
                        type="text"
                        onChange={(e) => handelInstitute(e, i)}
                        value={val.Institute}
                        placeholder="Enter Institue Name"
                      />
                      <br />
                      {val.I && <span style={{ color: "red" }}>{val.I}</span>}
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div style={{ color: "white" }}>
                      <div>
                        <label>Percentage </label>
                        <br />
                        <input
                          type="text"
                          onChange={(e) => HandelPercentage(e, i)}
                          placeholder="Enter Percentage"
                          maxLength={3}
                          value={val.Percentage}
                        />
                      </div>
                      <br />
                      {val.P && <span style={{ color: "red" }}>{val.P}</span>}
                    </div>
                    <div style={{ color: "white" }}>
                      <div>
                        <label>Year </label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter Year"
                          onChange={(e) => Handelyear(e, i)}
                          value={val.Year}
                          maxLength={4}
                        />
                      </div>
                      <br />
                      {/* {Error && (
                        <span style={{ color: "red" }}>{Error.Year}</span>
                      )} */}
                      <div style={{ color: "red" }}>{val.Y}</div>
                    </div>
                  </div>
                </div>
                <div></div>
              </form>
            </div>
            <button onClick={() => handeladd(val, i)}>Add</button>
            {i > 0 ? (
              <button onClick={() => handelRemove(i)}>remove</button>
            ) : (
              ""
            )}
            {/* <button onClick={(e) => handelRemove(i)}>remove</button> */}
            {/* <RenderingAcadamic data={Acadamicinfo} /> */}
          </div>
        </div>
      ))}
      <div style={{ color: "white", display:'flex', justifyItems:'center', justifyContent:'center' }}>
        <button type="submit" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Acadamicinfo;
