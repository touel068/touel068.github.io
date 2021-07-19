import React from "react";
import Multistep from 'react-multistep';
import MultiStep from 'react-multistep'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

function Tickets() {

  const steps = [
    { name: 'StepOne', component: <StepOne /> },
    { name: 'StepTwo', component: <StepTwo /> },
    { name: 'StepThree', component: <StepThree /> },
    { name: 'StepFour', component: <StepFour /> }
  ];
  const prevStyle = { 'background': '#33c3f0', 'border-width': '2px' , 'margin': '1vh' }
  const nextStyle = { 'background': '#33c3f0', 'border-width': '2px' , 'margin': '1vh' }
  return (
    <div className="tickets">
          <div className="continentTitle"><h1>Tickets</h1></div>
      <div className='container'>
        <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        <div className='container app-footer'>
          <h6>Press 'Enter' or click on progress bar for next step.</h6>
          Code is on{' '}
        </div>
      </div>
    </div>
  );
}

export default Tickets;