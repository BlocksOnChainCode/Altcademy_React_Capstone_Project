import { motion } from "framer-motion";

const BaseCurrency = (props) => {
  const { state, setState } = props;

  const handleChange = (e) => {
    setState({
      ...state,
      baseCurrency: e.target.value,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      id="BaseCurrency"
    >
      <select
        id="base-currency"
        value={state.baseCurrency}
        onChange={handleChange}
      >
        <option value="AUD">AUD - Australian Dollar</option>
        <option value="BGN">BGN - Bulgarian Lev</option>
        <option value="BRL">BRL - Brazilian Real</option>
        <option value="CAD">CAD - Canadian Dollar</option>
        <option value="CHF">CHF - Swiss Franc</option>
        <option value="CNY">CNY - Chinese Yuan</option>
        <option value="CZK">CZK - Czech Koruna</option>
        <option value="DKK">DKK - Danish Krone</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - British Pound</option>
        <option value="HKD">HKD - Hong Kong Dollar</option>
        <option value="HUF">HUF - Hungarian Forint</option>
        <option value="IDR">IDR - Indonesian Rupiah</option>
        <option value="ILS">ILS - Israeli New Shekel</option>
        <option value="INR">INR - Indian Rupee</option>
        <option value="ISK">ISK - Icelandic Krona</option>
        <option value="JPY">JPY - Japanese Yen</option>
        <option value="KRW">KRW - South Korean Won</option>
        <option value="MXN">MXN - Mexican Peso</option>
        <option value="MYR">MYR - Malaysian Ringgit</option>
        <option value="NOK">NOK - Norwegian Krone</option>
        <option value="NZD">NZD - New Zealand Dollar</option>
        <option value="PHP">PHP - Philippine Peso</option>
        <option value="PLN">PLN - Polish Zloty</option>
        <option value="RON">RON - Romanian Leu</option>
        <option value="SEK">SEK - Swedish Krona</option>
        <option value="SGD">SGD - Singapore Dollar</option>
        <option value="THB">THB - Thai Baht</option>
        <option value="TRY">TRY - Turkish Lira</option>
        <option value="USD">USD - United States Dollar</option>
        <option value="ZAR">ZAR - South African Rand</option>
      </select>
    </motion.section>
  );
};

export default BaseCurrency;

// todo : refactor SCSS ID's and classes to be more specific. Change filename to Forex_Pairs_BaseCurrency.jsx
