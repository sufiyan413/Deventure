import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CircularLoader: React.FC = () => (
  <Box
    sx={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
     
    }}
  >
    <CircularProgress size={70} /> 
    <Typography variant="caption" component="div" color="text.secondary" sx={{ marginTop: 2,fontSize:'18px',fontWeight:'200' }}>
      Loading.....
    </Typography>
  </Box>
);

export default CircularLoader;
