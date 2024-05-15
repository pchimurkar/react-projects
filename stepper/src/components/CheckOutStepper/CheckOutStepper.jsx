import { useState } from "react";

/* eslint-disable react/prop-types */
const CheckOutStepper = ({ stepConfig = [] }) => {
    const [currentStep,setCurrentStep] =useState(1)
    const [isComplete,setIsComplete] =useState(false)
  if (!stepConfig.length) {
    return <></>;
  }
  return (
    <>
    <div className="stepper">
      {stepConfig.map((step, index) => {
        return (
          <div key={step.name} className="step">
            <div className="step-number">{index + 1}</div>
            <div className="step-name">{step.name}</div>
          </div>
        );
      })}
    </div>

    <button>Next</button>
    </>
  );
};
export default CheckOutStepper;
