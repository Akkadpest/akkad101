'use client'
import { useState, Children } from 'react';


const Stepper = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = Children.toArray(children);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <>
      <div className="container stepped_carousel_container mt-5">
        <div className="row stepped_carousel_background_color">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`col-md-${12 / steps.length} step_title_container ${currentStep === index ? 'selected' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              <div className="step-title">
                <span className="stepped-carousel-desktop hide-on-mobile">{index + 1}. {step.props.title}</span>
                <span className="stepped-carousel-desktop hide-on-desktop">{index + 1}.</span>
              </div>
              {index !== steps.length - 1 && <div className={`arrow arrow_${index + 1} ${currentStep === index ? 'arrow-right' : ''}`} />}
            </div>
          ))}
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`row stepped_carousel step_container_${index}`}
            style={{ display: currentStep === index ? 'flex' : 'none' }}
          >
            {step}

            
          </div>
        ))}
      </div>
     
    </>
  );
};

const Step = ({ children }) => children;

export { Stepper, Step };
