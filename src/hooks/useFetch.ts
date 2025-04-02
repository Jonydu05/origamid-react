import React from 'react';

function useFetch<T>() {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<unknown | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const request = async (url: string, opt?: RequestInit) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(url, opt);
      const json = await res.json();
      setData(json);
    } catch (erro) {
      setError(erro);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
}

export default useFetch;
