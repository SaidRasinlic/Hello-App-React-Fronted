import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings_reducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings, loading, error } = useSelector((state) => state.greets);
  const [displayMessage, setDisplayMessage] = useState(true);
  const handleClick = () => {
    dispatch(getGreetings());
    setDisplayMessage(false);
  };

  return (
    <div>
      {displayMessage && <h2>Please click the button to fetch the Greeting message :)</h2>}
      <h1>{greetings.message}</h1>
      {error && <p>{error}</p>}
      <button type="button" onClick={handleClick}>{loading ? 'Loading...' : 'Fetch Greeting'}</button>
    </div>
  );
};

export default Greeting;
