import React, { useEffect, useState } from 'react';
import ErrorIndicator from '../../error-indicator';
import Spinner from '../../layout/spinner';
import { fetchData } from '../../../utills/fetchData';

const withData = (ViewComponent, dataUrl, insertBefore) => {
  return props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      getData(dataUrl);
      // eslint-disable-next-line
    }, []);

    const handleError = error => {
      setError(true);
      setLoading(false);
    };

    const getData = url => {
      setLoading(true);
      fetchData(url)
        .then(({ data }) => {
          setData(data);
          setLoading(false);
        })
        .catch(handleError);
    };

    const hasData = !(error || loading);

    return (
      <>
        {insertBefore}
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {hasData && <ViewComponent {...props} data={data} />}
      </>
    );
  };
};

export default withData;
