import React from "react";

const Home = () => {

  const emailMe = () => {
    window.open('mailto: fractalscape13@gmail.com', '_blank').focus();  
  }

  return (
      <div className="bodyContainer" >
        <h1 className="bigText">Hi, I'm Joseph,</h1>
        <h4 className="smallText"> a software developer.</h4>
        <h4 className="linkText" title="fractalscape13@gmail.com" onClick={emailMe}> Hire me!</h4>
      </div>
  )
};

export default Home;