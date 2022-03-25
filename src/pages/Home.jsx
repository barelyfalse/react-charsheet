import React from 'react'
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{mt: '5ch'}}>
        <Typography variant="h4">
          Welcome to Character Rol Sheet
        </Typography>
        <Typography variant="h3">
          v.2
        </Typography>
      </Box>
    </Box>
  )
}

export default Home