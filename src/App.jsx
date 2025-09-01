import { useEffect, useState } from 'react';
import './App.css';
import Inputbox from './components/Inputbox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  // const convert = () => {
  //   const result = (amount * currencyInfo[to]).toFixed(4);
  //   setConvertedAmount(result);
  // }

  const convert = useEffect(() => {
    if (!currencyInfo || !currencyInfo[to] || !amount) return;
    const result = (amount * currencyInfo[to]).toFixed(4);
    setConvertedAmount(result);
  }, [amount, currencyInfo, to]);

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }
  console.log(currencyInfo[to]);
  console.log(currencyInfo[from]);

  // console.log(convertedAmount);

  return (
    <Inputbox
      amount={amount}
      onAmountChange={setAmount}
      selectCurrency={from}
      // onCurrencyChange={(currency) => {
      //   console.log('Selected currency:', currency);
      //   setFrom(currency);
      // }}
      onCurrencyChange={setFrom}
      currencyOptions={options}
      toCurrency={to}
      convert={convert}
      convertedAmount={convertedAmount}
      onToCurrencyChange={setTo}
      swap={swap}
    />
  );
}

export default App;