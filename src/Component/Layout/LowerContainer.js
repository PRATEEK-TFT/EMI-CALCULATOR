import { useState } from "react";
import Classes from "./LowerContainer.module.css";
const buttonData = [
  { id: 1, value: 3, name: "3 Months" },
  { id: 2, value: 6, name: "6 Months" },
  { id: 3, value: 12, name: "12 Months" },
  { id: 4, value: 18, name: "18 Months" },
  { id: 5, value: 24, name: "24 Months" },
  { id: 6, value: 30, name: "30 Months" },
  { id: 7, value: 36, name: "36 Months" },
  { id: 8, value: 42, name: "42 Months" },
  { id: 9, value: 48, name: "48 Months" },
];
const LowerContainer = (props) => {
  const [selectedTenure, setSelectedTenure] = useState(null);
  const buttonClickHandler = (event) => {
    setSelectedTenure(event);
    {
      props.tenure(event);
    }
  };
  return (
    <div className={Classes.lowerbox}>
      <p className={Classes.para}>Tenure:</p>
      {buttonData.map((data) => (
        <button
          key={data.id}
          className={
            selectedTenure === data.value
              ? Classes.activebutton
              : Classes.inactivebutton
          }
          onClick={() => buttonClickHandler(data.value)}
        >
          {data.name}
        </button>
      ))}
    </div>
  );
};
export default LowerContainer;
