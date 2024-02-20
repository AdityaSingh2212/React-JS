import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    //useId hook
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block"> 
                    {label}
                </label>
                <input
                    id={amountInputId} //binding of input with useId hook
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //for asking whether it is disabled or not
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //number is there because amount will be in numbers like (5rs), (1$)
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //number is not  here because currency will be in string like (usd),(inr)
                    disabled={currencyDisable} //for asking whether it is disabled or not
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}
export default InputBox;

//key should be used in loop in js
//htmlFor={amountInputId}--> for uniqueness and binding of label with useId hook