import React from "react";
import Disclaimer from "./Disclaimer";

function Body() {

  const mystyle = {
    minWidth: "120px",
    minHeight: "50px",
  };
  let score = () => {
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let a3 = document.getElementById("a3").value;
    let a4 = document.getElementById("a4").value;
    let a5 = document.getElementById("a5").value;
    let a6 = document.getElementById("a6").value;

    let res = [];
    res[0] = a2;
    res[1] = a3;
    res[2] = a4;
    res[3] = a5;
    res[4] = a6;
    res.sort();
    let best5 = [];

    for(let k=0;k<5;k++)
      if(res[k]==="")
        res[k]=0;

    for (let i = 0; i < 4; i++) 
    best5[i] = res[i + 1];

    if(a1==="")
      a1=0;


    var sum = 0;
    for (let i = 0; i < 4; i++) 
    sum += parseFloat(best5[i]);

    sum = sum + parseFloat(a1);


    var per = (sum / 500.0) * 100;
    document.getElementById("go").textContent = per;
    document.getElementById("uplift").style.visibility = "visible";

    setTimeout(() => {
      document.getElementById("uplift").style.visibility = "hidden";
    }, 3000);
  };
  return (
    <div>
      <div className="text-center mb-3 mt-1">
        <h1>Marks Calculator</h1> 
      </div>
      <span className="mx-auto my-0"><Disclaimer/></span>
      <div className="text-center mx-2">
        <h5>Enter Your Percentage Marks</h5>
      </div>
      <div
        className="text-center mx-2 mt-1"
        id="uplift"
        style={{ visibility: "hidden" }}
      >
        <strong>Results Calculated</strong>
      </div>

      <div className="container">
        <div className="input-group my-2">
          <span className="input-group-text" id="basic-addon1 " style={mystyle}>
            English
          </span>
          <input
            type="number"
            className="form-control mx-2"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="a1"
            
          />
        </div>
        <div className="input-group my-2">
          <span className="input-group-text" id="basic-addon1" style={mystyle}>
            Hindi
          </span>
          <input
            type="number"
            className="form-control mx-2"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="a2"
          />
        </div>
        <div className="input-group my-2 ">
          <span className="input-group-text" id="basic-addon1" style={mystyle}>
            Science
          </span>
          <input
            type="number"
            className="form-control mx-2"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="a3"
          />
        </div>
        <div className="input-group my-2 ">
          <span className="input-group-text" id="basic-addon1" style={mystyle}>
            History,Civics <br /> & Geography
          </span>
          <input
            type="number"
            className="form-control mx-2"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="a4"
          />
        </div>
        <div className="input-group my-2">
          <span className="input-group-text" id="basic-addon1" style={mystyle}>
            Optional <br />
            Subject
          </span>
          <input
            type="number"
            className="form-control mx-2"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="a5"
          />
        </div>
        <div className="input-group my-2 ">
          <span className="input-group-text" id="basic-addon1" style={mystyle}>
            Mathematics
          </span>
          <input
            type="number"
            className="form-control mx-2"
            placeholder="0"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="a6"
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-success mx-auto d-block my-3"
        onClick={score}
      >
        Get your Result
      </button>

      <div
        className="card text-bg-info mb-3 d-block mx-auto my-4"
        style={{ maxWidth: "81vw" }}
      >
        <div className="card-header">Calculated Results</div>
        <div className="card-body">
          <span className="card-text">
            <h5>
              Your Calculated Percentage is : <span id="go"></span>
            </h5>
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default Body;
