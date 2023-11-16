import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";


const Home = ({history}) => {

    const handleLoginClick = () => {
        window.location.href = '/Select'; 
      };
    



  return (
    
    <section className="body">
    <div className="container">
      <div className="login-box" style={{ 
        }}>

        <div className="row">
          <div className="col-sm-6">
            <div className="logo">
              <img  style={{width: "75%"}}/>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <br />
            <h1 className="header-titles">WELCOME</h1>
            <h3 className="header-title">LOGIN</h3>
              <div className="form-group">
              <input name="email" className="form-control col-xs-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div className="form-group">
              <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
              <button className="" onClick={handleLoginClick}>LOGIN</button>
              </div>
              <div className="form-group">
                
              </div>
              <div className="form-group">
                <div className="text-center">
                  New Member? <a href="/signup">Sign up Now</a>
                </div>

              </div>
          </div>
          <div className="col-sm-6 hide-on-mobile">
            <div id="demo" className="carousel slide" data-ride="carousel">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

   
  );

};



export default withRouter(Home);
