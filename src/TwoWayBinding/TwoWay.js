import { useState } from "react";

const TwoWay = () => {
  const [input, setInput] = useState("");

  function handleText(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input type="text" text="text" onChange={handleText} />

      <h4>{input}</h4>
    </div>
  );
};

export default TwoWay;
