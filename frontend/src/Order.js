import React from 'react'
import { useParams } from 'react-router-dom'

function Order() {
    const params=useParams()
    console.log(params.food);
    
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#ee">Food App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#dd">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#dd">Log In</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#tfsfs">Sign In</a>

              </li>

            </ul>

          </div>
        </div>
      </nav>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'3rem'}}>

            <h2>{params.food}</h2>
            <h3>{params.quantity}</h3>
            <div style={{display:'flex',gap:'3rem'}}><button>Cancel</button><button>confirm</button></div>
        </div>
    </div>
  )
}

export default Order