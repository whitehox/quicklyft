import React, { useEffect, useState } from 'react';

//Views
import SplashScreen from '../SplashScreen';
import Swipable from '../Swiper';

export default function App() {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      timePassedHandler();
    }, 3000);
  }, []);

  const timePassedHandler = () => {
    setTimePassed(true);
  };

  return !timePassed ? <SplashScreen /> : <Swipable />;
}
