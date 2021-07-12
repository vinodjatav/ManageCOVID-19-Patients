import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact us, if you get COVID-19 symptoms</h1>  <br></br>
        <h5>Most common symptoms:</h5> 
        <p align="center">Fever, dry cough and tiredness</p>
        <h5>Less common symptoms:</h5>
            <p align="center">Aches and pains, sore throat, diarrhoea, conjunctivitis, headache, loss of taste or smell, a rash on skin or discolouration of fingers or toes.</p>
        <h5>Serious symptoms:</h5>
            <p align="center">Difficulty breathing, shortness of breath, chest pain or pressure or loss of speech or movement.</p>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
