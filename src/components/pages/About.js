import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About Us</h1>
        <p className="lead">
        This is an application to manage COVID-19 patients in a hospital. The hospital administrator have to add, remove, update  and list the patients in the hospital.
        </p>

        <p className="lead">
        If the patient’s status to covid is negative than status to be updated. If a patient is discharged the patient need to be deleted.
        </p>
        <p className="lead">If the administrator wants to see the status of patients s/he should be able to see the same.</p>
      </div>
    </div>
  );
};

export default About;
