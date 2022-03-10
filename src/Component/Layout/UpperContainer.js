import { useState } from "react";
import Classes from "./UpperContainer.module.css";
function UpperContainer(props) {
  const [sliderValue, setsliderValue] = useState(10000);
  const sliderValueHandler = (event) => {
    setsliderValue(event.target.value);
    {
      props.amount(event.target.value);
    }
  };
  return (
    <div className={Classes.upperbox}>
      <p className={Classes.para}>Amount You Need:</p>
      <div className={Classes.symbolAlign}>
      <p className={Classes.symbolText}>₹</p>
        <input
          className={Classes.amountInput}
          value={sliderValue}
          onChange={sliderValueHandler}
          min="10000"
          max="1500000"
        ></input>
      </div>
      <input
        className={Classes.slider}
        value={sliderValue}
        onChange={sliderValueHandler}
        type="range"
        min="10000"
        max="1500000"
      ></input>
      <p className={Classes.amountText}>₹10,000</p>
      <p className={Classes.space}></p>
      <p className={Classes.amountText}>₹15 Lakhs</p>
    </div>
  );
}
export default UpperContainer;
