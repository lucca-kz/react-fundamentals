const Challenge = () => {
  let value1 = 32;
  let value2 = 28;

  const soma = (a, b) => {
    return a + b;
  };

  const handleClick = () => {
    const result = soma(value1, value2);
    console.log(result);
  };

  return (
    <div>
      <h1>Desafio soma</h1>
      <p>
        Numeros para somar: A: {value1} e B: {value2}
      </p>
      <button onClick={handleClick}>Clique para somar</button>
    </div>
  );
};

export default Challenge;
