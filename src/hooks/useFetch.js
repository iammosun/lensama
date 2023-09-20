import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { db } from '../firebase_setup/firebase';
// import { collection, getDocs } from 'firebase/firestore';
import { women, men } from '../redux/WatchesSlice';


const useFetch = () => {
  const dispatch = useDispatch();

  // const [womenWatches, setWomenWatches] = useState([]);
  // const [mensWatches, setMensWatches] = useState([]);

  useEffect(() => {

    fetch('https://dummyjson.com/products/category/mens-watches',
      {
        method: 'GET'
      }
    ).then(res => res.json())
      .then(watches => {
        dispatch(women(watches.products))


      }).catch(error => {
        console.log(error);
      });

    fetch('https://dummyjson.com/products/category/mens-watches',
      {
        method: 'GET'
      }
    ).then(res => res.json())
      .then(watches => {
        dispatch(men(watches.products))


      }).catch(error => {
        console.log(error);
      });



    //   const mensWatchesCollectionRef = collection(db, 'menswatches');
    //   const womenWatchesCollectionRef = collection(db, 'womenwatches');

    //   const myData = async () => {
    //     const womenCollection = await getDocs(womenWatchesCollectionRef);
    //     const menCollection = await getDocs(mensWatchesCollectionRef);

    //     setWomenWatches(womenCollection.docs.map((doc) => ({ ...doc.data() })));
    //     setMensWatches(menCollection.docs.map((doc) => ({ ...doc.data() })));
    //   };
    //   myData();

    //   dispatch(women(womenWatches))
    //   dispatch(men(mensWatches));
  }, []);


  return (
    <></>
  );
}

export default useFetch;