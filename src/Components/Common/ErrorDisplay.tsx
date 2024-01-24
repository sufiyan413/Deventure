import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      width: '150px',
      height: '150px',
    }}
  >
    <ErrorOutlineIcon style={{ fontSize: 60, color: 'red' }} />
    <Typography variant="caption" component="div" color="text.secondary" sx={{ marginTop: 2 ,fontSize:'18px',fontWeight:'200'}}>
      {message}
    </Typography>
  </Box>
);

export default ErrorDisplay;
