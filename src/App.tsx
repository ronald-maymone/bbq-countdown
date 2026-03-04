import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography } from '@mui/material'
import { parse, format, isValid } from 'date-fns';
import useCountdown from './hooks/useCountDown'
import CountdownDisplay from './components/CountDownDisplay'

function App() {
  const [clock, setClock] = useState(0)

  const inputString = '27-03-2026-12-15-00';
  const formatString = 'dd-MM-yyyy-HH-mm-ss';
  let formattedOutput = '';
  const targetDate = new Date('March 27 2026 12:15:00');
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  // Specify a reference date (e.g., new Date()) to handle cases where 
  // the input doesn't provide enough information (like time)
  const parsedDate = parse(inputString, formatString, new Date());

  if (isValid(parsedDate)) {
    // Format the parsed date for display
    formattedOutput = format(parsedDate, 'dd-MM-yyy % HH:mm:ss');
    //console.log(formattedOutput);
  }

  if (isExpired) {
    return <Typography variant='h2'>The event has started!</Typography>;
  }


  return (
    <div className="App">
      <h1>Countdown to CHURRAS!</h1>
      {/* We apply flexbox here to line up the individual display blocks */}
      <div
        className="countdown-wrapper"
        style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'baseline' }}
      >
        <CountdownDisplay value={days} type="Days" />
        <Typography variant="h2">:</Typography>
        <CountdownDisplay value={hours} type="Hours" />
        <Typography variant="h2">:</Typography>
        <CountdownDisplay value={minutes} type="Mins" />
        <Typography variant="h2">:</Typography>
        <CountdownDisplay value={seconds} type="Secs" />
      </div>
    </div>
  );


  // return (
  //   <>

  //     <Typography variant='h4'>
  //       For the Churras
  //     </Typography>
  //   </>
  // );
}

export default App;