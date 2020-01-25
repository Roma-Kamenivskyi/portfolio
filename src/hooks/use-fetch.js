import { useState, useEffect } from 'react';
import { fetchData } from '../utills/fetchData';

export default url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    fetchData(url)
      .then(({ data }) => {
        if (isCurrent) {
          setResponse(data);
          setLoading(false);
        }
      })
      .catch(handleError);

    return () => {
      isCurrent = false;
    };
  }, [url]);

  const handleError = error => {
    setError(true);
    setLoading(false);
    console.warn(error);
  };

  return { response, loading, error };
};
