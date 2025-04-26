import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from './features/crypto/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <CryptoTable />
    </div>
  );
}

export default App;
