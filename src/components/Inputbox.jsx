import React, { useId } from 'react';

const Inputbox = ({
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  convert,
  convertedAmount,
  toCurrency,
  onToCurrencyChange,
  swap
}) => {
  const amountInputId = useId();
  const toInputId = useId();

  // console.log("Options:", currencyOptions[]);
  // console.log("Selected:", selectCurrency);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#868F96] to-[#596164] text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-4xl border border-white/30 space-y-6">



        {/* From Section */}
        <div>
          <label htmlFor={amountInputId} className="block text-sm font-medium mb-2">From</label>
          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
            <input
              type="number"
              min={0}
              id={amountInputId}
              value={amount}
              onChange={(e) => onAmountChange(Number(e.target.value))}
              className="flex-1 bg-gray-700 text-white px-4 py-2 focus:outline-none"
            />
            <select
              className="bg-gray-700 text-white px-4 py-2 border-l border-gray-600 focus:outline-none"
              value={selectCurrency}
              onChange={(e) => onCurrencyChange(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option value={currency} key={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center ">
          <button className="px-4 py-2 bg-yellow-500 rounded-full border border-blue-500
           hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-yellow-400 "
            onClick={swap}>
            🔄 Swap
          </button>
        </div>

        {/* To Section */}
        <div>
          <label htmlFor={toInputId} className="block text-sm font-medium mb-2">To</label>
          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
            <input
              type="number"
              id={toInputId}
              value={convertedAmount}
              readOnly
              className="flex-1 bg-gray-700 text-white px-4 py-2 focus:outline-none"
            />
            <select
              className="bg-gray-700 text-white px-4 py-2 border-l border-gray-600 focus:outline-none"
              value={toCurrency}
              onChange={(e) => onToCurrencyChange(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option value={currency} key={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        {/* <button
          type="button"
          onClick={convert}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Convert
        </button> */}

      </div>
    </div>
  );
};

export default Inputbox;