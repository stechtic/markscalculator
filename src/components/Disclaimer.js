import React from "react";

function Disclaimer() {
  return (
    <div>
      <button
        className="btn btn-warning mx-auto d-block my-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        How to Use ?
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            How to Use :
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            <li>Enter your percentage marks that has been given in your marksheet.</li>
            <li>It automatically selects the marks in best five subjects from the entered five subjects.</li>
            <li>The provided results may contain many values after decimal point which has been added intentionally.</li>
            <li>Remember:Wrong values ,Wrong Results.</li>
          </p>
        </div>


        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Disclaimer :
          </h5>
        </div>
        <div className="offcanvas-body">
          <p>
            <li>The values are not rounded off to provide more accurate result.</li>
            <li>Consider Reloading if you encounter any type of error.</li>
            <li>We assure that your results, in any form will not be stored in our database.</li>
            <li>The software has been developed and maintained by Team Stechtic and <strong>You know who I am :)</strong> </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
