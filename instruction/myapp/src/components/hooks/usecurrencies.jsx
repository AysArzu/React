import React, { useEffect, useState } from "react";

export const UseCurrencies = () => {
  const [currencies, setCurrencies] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch("https://www.frankfurter.app/latest?from=try");
        const data = await res.json();
        setCurrencies(data.rates);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrencies();
  }, []);

  return;
  {
    currencies, error, loading;
  }
};
