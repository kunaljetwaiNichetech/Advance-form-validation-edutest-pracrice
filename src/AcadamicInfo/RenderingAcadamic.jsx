// import { useState,useEffect } from "react";
// import React from "react";
// import Acadamicinfo from "./Acadamicinfo";

// export default function RenderingAcadamic() {
//  let []=useState([])
// //  let [Name,SetName]=useState()
//  let [NumbrOFRender, SetNumbrOFRender] = useState([{ser:''}]);
//  console.log("NumbrOFRender",NumbrOFRender);
//  let [Error,SetError]=useState({})
 
// console.log("thi si variable",NumbrOFRender)
// const handleclick=()=>{
//   let data =[...NumbrOFRender]
//   for (let index = 0; index < data.length; index++) {
//     debugger
//     // const element = array[index];
//     if (data[index].ser==''){
//       data[index].error = "please enter enter enter enter enter"
      

      
//     }else if (data[index].ser.length <10){
//       data[index].error = " minimum 10 char are required ";
//       // SetNumbrOFRender([...NumbrOFRender, { ser: "" }]);
//     }
//     else{

//       data[index].error=""
//     }
//   SetNumbrOFRender([...NumbrOFRender, { ser: "" }]);
    
//   }

   

// }

// useEffect(() => {
//   debugger
//   console.log("error", NumbrOFRender[0].error);
// }, [NumbrOFRender]);



//  const handelchange=(e,i)=>{
//   // SetName(e.target.value)
//   // debugger
//   const {name,value}=e.target
//   const list=[...NumbrOFRender]
//   list[i]["ser"]=value
//   SetNumbrOFRender(list)


//  }
//  const handelremove = (i) => {
//   let List =[...NumbrOFRender]
//   List.splice(i,1)
//   SetNumbrOFRender(List)
//  };

//   return (
//     <div>
//       <h1 style={{ color: "white" }}>
//         {NumbrOFRender.ser ? NumbrOFRender.ser : ""}
//       </h1>

//       {/* <div style={{ background: "black", height: 70 + "px" }}>
//         <button onClick={handleclick}>Add </button>
//         <form>
//           <label style={{ color: "white" }}>Name</label>
//           <input type="text" onChange={(e) => handelchange(e)} />
//         </form>
//       </div> */}
//       {NumbrOFRender.map((val, i) => (
//         <div key={i} style={{ background: "black", height: 70 + "px" }}>
//         <h1 style={{ color: "white" }}>
//             {val.error}
//           </h1>
//           <h1 style={{ color: "white" }}>
//             {NumbrOFRender.ser ? NumbrOFRender.ser : ""}
//           </h1>
//           <button onClick={handleclick}>Add </button>
//           <form>
//             <label style={{ color: "white" }}>Name</label>
//             <input
//               type="text"
//               onChange={(e) => handelchange(e, i)}
//               value={val.ser}
//             />
//           </form>
//           <div style={{ color: "red" }}>{val.error}</div>
//           {/* {Error&&<span style={{color:'red'}} >{Error.N}</span>} */}
//           <div>
//             <button onClick={(e) => handelremove(i)}>Remove</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";


function RenderingAcadamic() {
  const [formVal, setFormVal] = useState([{ name: "", email: "" }]);
  const addRow = () => {
    const errorRes = formValidation(formVal);
    console.log("errorRes", errorRes);
    if (errorRes) {
      if (errorRes) {
        // api call
        setFormVal([...formVal, { name: "", email: "" }]);
      } else {
        // error msg
      }
    } else {
    }
    
  };
  const onRemove = (i) => {
    const newForm = [...formVal];
    newForm.splice(i, 1);
    setFormVal(newForm);
  };
  const onHandle = (e, i) => {
    let newForm = [...formVal];
    newForm[i][e.target.name] = e.target.value;
    setFormVal(newForm);
  };
  const formValidation = (formVal) => {
    const data = [...formVal];
    var re = /\S+@\S+\.\S+/;
    let valid = true;
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if (data[index].name == "") {
        data[index].nameCheck = "name required";
        data[index].nameLengthCheck = "";
        valid = false;
      } else if (data[index].name.length < 10) {
        data[index].nameLengthCheck = "name should be greater than 10";
        data[index].nameCheck = "";
        valid = false;
      } else {
        data[index].nameCheck = "";
        data[index].nameLengthCheck = "";
        valid = true;
      }

      if (data[index].email == "") {
        data[index].emailCheck = "email required";
        data[index].emailFormat = "";
        valid = false;
      } else if (!re.test(data[index].email)) {
        data[index].emailFormat = "Invalid Email";
        data[index].emailCheck = "";
        valid = false;
      } else {
        data[index].emailCheck = "";
        data[index].emailFormat = "";
        valid = true;
      }
    }
    setFormVal(data);
    return valid;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitData", formVal);
    const errorRes = formValidation(formVal);
    console.log("errorRes", errorRes);
    if (errorRes) {
      // api call
    } else {
      // error msg
    }
  };
  return (
    <div className="App">
      <div style={{ width: "60%", margin: "20px auto" }}>
        <form onSubmit={onSubmit}>
          {formVal.map((item, i) => (
            <div>
              <div
                style={{
                  color:'white',
                  padding: "10px",
                  margin: "10px",
                  diplay: "flex",
                  flexDirection: "row",
                }}
              >
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={item.name || ""}
                  onChange={(e) => onHandle(e, i)}
                />
                <div style={{ color: "red" }}>
                  {item.nameCheck}
                  <br />
                  {item.nameLengthCheck}
                </div>
                <label style={{ marginTop: "50px" }}>Email</label>
                <input
                  type="text"
                  name="email"
                  value={item.email || ""}
                  onChange={(e) => onHandle(e, i)}
                />
                <div style={{ color: "red" }}>
                  {item.emailCheck}
                  <br />
                  {item.emailFormat}
                </div>
                {i == 0 ? (
                  ""
                ) : (
                  <button onClick={() => onRemove(i)}>Remove</button>
                )}
              </div>
            </div>
          ))}
          <div style={{ marginTop: "20px" }}>
            <button onClick={addRow}>Add Row</button>
            <button type="submit" style={{ marginLeft: "20px" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RenderingAcadamic;