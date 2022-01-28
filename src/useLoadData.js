import { useState, useEffect } from 'react';
import StaticData from './data/db.json';

//
// Hook to load date from a remote end point
//
const useLoadDataRemote = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const serverURL = '/';

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

  return { data, isPending, error};
};

//
// Load data from a static file
//
const useLoadDataLocal = (url, initialData) => {

  const [data, setData] = useState(initialData);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const parts = url.split('/');

    // First part is the type
    let results = StaticData[parts[0]];
    if (results) {
      // Seconds part if the object id
      if (parts[1]) {
        const matches = results.filter(entity => entity.id == parts[1]);
        if (matches.length == 1) {
          results = matches[0];
        }
        else {
          setError(matches.length + " matches for " + url);
          results = null;
        }
      }
    }
    else {
      // No entties of that type
      setError("No entities for " + url);
      results = null;
    }
    
    setIsPending(false);

    // Update is something foubnd
    if (results) {
      setData(results);
      setError(null);
    }

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error};
}

//
// Configured to use the remote dating fetching
//
const useLoadData = (url, initialData) => {
    // Change this to useLoadDatRemote for remote server
    const {data, isPending, error} = useLoadDataRemote(url, initialData);

    return {data, isPending, error};
}

export default useLoadData;