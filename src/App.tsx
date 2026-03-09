import './App.css'
import { Typography } from '@mui/material'
import useCountdown from './hooks/useCountDown'
import CountdownDisplay from './components/CountDownDisplay'

function App() {

  const targetDate = new Date('March 27 2026 19:00:00');
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  // Specify a reference date (e.g., new Date()) to handle cases where 
  // the input doesn't provide enough information (like time)

  if (isExpired) {
    return <Typography variant='h2'>The CHURRAS! has started!</Typography>;
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
      <div >
        <Typography variant='h2' marginTop={10}>
          When?
        </Typography>
        <Typography variant='h4'>
          27/03/2026 - 19h
        </Typography>
      </div>
    </div>
  );
}

export default App;