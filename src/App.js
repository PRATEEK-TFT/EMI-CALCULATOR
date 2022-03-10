import Classes from "./App.module.css";
import UpperContainer from "./Component/Layout/UpperContainer";
import LowerContainer from "./Component/Layout/LowerContainer";
import { useEffect, useState } from "react";
function App() {
  const [Emi, setEmi] = useState(null);
  const [interest, setinterest] = useState(0);
  const [amount, setAmount] = useState(10000);
  const [tenure, setTenure] = useState();
  const amountHandler = (receivedAmount) => {
    setAmount(receivedAmount);
  };
  const tenureHandler = (receivedTenure) => {
    setTenure(receivedTenure);
  };
  const interestHandler = (event) => {
    setinterest(event.target.value);
  };
  const calculate = () => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(tenure);
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      setEmi(monthlyPaymentCalculated);
      console.log(monthlyPaymentCalculated);
    }
    return;
  };
  useEffect(() => {
    calculate();
  });
  return (
    <div className={Classes.div}>
      <h1 className={Classes.heading}>EMI calculater</h1>
      <UpperContainer amount={amountHandler} />
      <LowerContainer tenure={tenureHandler} />
      <div className={Classes.interestTextDiv}>
        Interest:
        <p className={Classes.interestText}> </p>
          <div className={Classes.symbolAligndiv}>
            <p className={Classes.symbolText}>%</p>
          <input
            type="text"
            className={Classes.interestInput}
            value={interest}
            onChange={interestHandler}
          ></input>
          </div>
       
      </div>
      <hr className={Classes.Line}></hr>
      <h1 className={Classes.emiText}>EMI:₹{Emi}</h1>
    </div>
  );
}
export default App;
