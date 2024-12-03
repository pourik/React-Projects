import { useState } from "react";

import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newInput) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newInput,
      };
    });
  }

  const isInputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      {!isInputValid ? (
        <p className="center">Please Enter Valid Input.</p>
      ) : (
        <Results userInput={userInput} />
      )}
    </>
  );
}

export default App;
