const TemplateExpressions = () => {
  const name = "Lucca";
  const data = {
    age: 31,
    job: "developer",
  };
  return (
    <div>
      <h3>Olá {name}, tudo bem?</h3>
      <p>
        Você trabalha como <b>{data.job}</b>
      </p>
    </div>
  );
};

export default TemplateExpressions;
