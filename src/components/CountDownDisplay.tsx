import { Typography, Box } from '@mui/material';

const CountdownDisplay = ({ value, type }: { value: number; type: string }) => {
  // Function to format single digits with a leading zero
  const formatValue = (num: number) => num.toString().padStart(2, '0');

  return (
    <Box display="flex" alignItems="baseline" gap={1}>
      <Typography variant='h2'>
        {formatValue(value)}
      </Typography>
      <Typography variant='h4'>
        {type}
      </Typography>
    </Box>
  );
};

export default CountdownDisplay;
