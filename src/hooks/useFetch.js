import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { women, men } from '../redux/WatchesSlice';


const useFetch = (url1, url2) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url1, {
      method: 'GET'

    }).then(res => res.json())
      .then(data => dispatch(women(data.products)));

    fetch(url2, {
      method: 'GET'

    }).then(res => res.json())
      .then(data => { dispatch(men(data.products)) });
  }, []);

  return (
    <></>
  );
}

export default useFetch;