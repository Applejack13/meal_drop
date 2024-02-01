import React, { useState, useEffect } from "react";

import { ErrorBoundary } from "../../allPages";

import "./exchangeRates.css";

export function ExchangeRates() {
  const [exchangeRateEUR, setExchangeRate] = useState(null);
  const [exchangeRateUSD, setExchangeRateUSD] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        );
        const data = await response.json();

        if (data.length > 0) {
          // Получаем курс евро (гривна за 1 евро) из первого элемента массива
          const eurRate = data.find((item) => item.cc === "EUR").rate;
          setExchangeRate(eurRate);
          const usdRate = data.find((item) => item.cc === "USD").rate;
          setExchangeRateUSD(usdRate);
        } else {
          console.error("Не удалось получить данные о курсе валюты");
        }
      } catch (error) {
        console.error("Произошла ошибка при запросе к API НБУ:", error);
      }
    };

    fetchExchangeRate();
  }, []); // Пустой массив зависимостей означает, что эффект будет выполняться только при монтировании компонента

  return (
    <div className="exchangeRatesWrapper">
      <div className="euroRate">
        <h2>
          Euro's exchange rate:{" "}
          {exchangeRateEUR ? (
            exchangeRateEUR.toFixed(2) + " UAH"
          ) : (
            <ErrorBoundary />
          )}
        </h2>
      </div>
      <div className="usdRate">
        <h2>
          USD exchange rate:{" "}
          {exchangeRateUSD ? (
            exchangeRateUSD.toFixed(2) + " UAH"
          ) : (
            <ErrorBoundary />
          )}
        </h2>
      </div>
    </div>
  );
}
