import "./Finance_BaseCurrency.scss";

const BaseCurrency = ({ baseCurrency, setBaseCurrency }) => {
  const handleChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <section id="BaseCurrency">
      <label>Base Currency</label>
      <select id="base-currency" value={baseCurrency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </section>
  );
};

export default BaseCurrency;
