import React, { useId } from 'react';

const Inputbox = ({
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency ,
  convert,
  convertedAmount,
  toCurrency,
  onToCurrencyChange
}) => {
  const amountInputId = useId();
  const toInputId = useId();

  // console.log("Options:", currencyOptions[]);
// console.log("Selected:", selectCurrency);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">

        {/* From Section */}
        <div>
          <label htmlFor={amountInputId} className="block text-sm font-medium mb-2">From</label>
          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
            <input
              type="number"
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
        <button
          type="button"
          onClick={convert}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Convert
        </button>

      </div>
    </div>
  );
};

export default Inputbox;