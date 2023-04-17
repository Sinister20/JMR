import React from "react";
import logo from "../assests/logo.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <img src={logo} alt="" />
        <h1> Partner with JMR – India’s biggest interstate food delivery app</h1>
        
        <h2 style={{ color: "orange", margin: 0 }}>
          {" "}
          Register at 0% commission{" "}
        </h2>
        <h2 style={{ margin: 0 }}> for the first 30 days</h2>
        <div className="flex">
          <h4>+ benefits worth ₹20,000</h4>
          <p> *T&C apply </p>
        </div>
      </div>
      <div className="intro-right">

        <div className="form">
        <h1 style={{textAlign:"center"}}>Register</h1>
          <div className="form-body">
           
            <div className="bname">
             
              <input
                type="text"
                id="bname"
                className="form__input"
                placeholder="Brand Name"
              />
          
             
        
            </div>
            <div className="fssai">
             
             <input
               type="number"
               id="fssai"
               className="form__input"
               placeholder="Fssai Number"
             />
         
            
            
           </div>
           <div className="address">
              
              <input
                className="form__input"
                type="text"
                id="address"
                placeholder="Address"
              />
          
             
              </div>

              <div className="email">
             
             <input
               type="email"
               id="email"
               className="form__input"
               placeholder="Email"
             />
         
            
             <input
               className="form__input"
               type="text"
               id="Contact"
               placeholder="Contact  "
             />
           </div>
           <h3 style={{color:"black"}}>Contact Person </h3>
           <div className="name">
             
              <input
                type="text"
                id="name"
                className="form__input"
                placeholder=" Name"
              />
          
             
        
            </div>
           <div className="email">
              
              <input
                className="form__input"
                type="email"
                id="email"
                placeholder="Email"
              />
          
             
              <input
                className="form__input"
                type="text"
                id="mobile"
                placeholder="Mobile Number"
              />
            </div>
           
            
            
           
            
          </div>
          <div class="footer">
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
