import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor variavel: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar valor variavel</button>
      </div>
      <div>
        <p>Valor State: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar valor state</button>
      </div>
    </div>
  );
};

export default ManageData;
