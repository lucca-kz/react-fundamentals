const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("evento ativado");
  };

  const renderSomethingTest = (x) => {
    if (x) {
      return <h1>Exemplo de JSX fora do return 1</h1>;
    } else {
      return <h2>Exemplo de JSX fora do return 2</h2>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}> Evento invocando função </button>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            console.log(
              "Esse é um exemplo de function inline dentro do evento.",
            );
          }}
        >
          Evento função inline
        </button>
      </div>
      <div>
        {renderSomethingTest(true)}
        <br />
        {renderSomethingTest(false)}
      </div>
    </div>
  );
};

export default Events;
