import { useState, useEffect } from 'react';

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const serverURL = 'http://localhost:8000/';

  useEffect(() => {
    const abortCont = new AbortController();
    const fullURL = serverURL + url;
    fetch(fullURL, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      }
    });

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;