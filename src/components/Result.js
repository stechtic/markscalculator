import React from 'react'

function Result(props) {
  return (
    <div>
      <div className="card  d-block mx-auto" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Your Score = {props.result}</h5>
    <p class="card-text"></p>
  </div>
</div>
    </div>
  )
}

export default Result
