import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Jonas" });
  // console.log(isOpen);
  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
      setStep((currentStep) => currentStep + 1);
    }

    // Bad Practice
    // test.name = "Fred"

    // setTest({ name: "Fred" });
  }

  function handleClose() {
    setIsOpen((c) => !isOpen);
    console.log(isOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
            />
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
