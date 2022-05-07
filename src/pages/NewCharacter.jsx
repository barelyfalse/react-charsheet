import React from 'react'
import { Box, Typography } from '@mui/material';

function NewCharacter() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{mt: '5ch'}}>
        <Typography variant="h4">
          New
        </Typography>
      </Box>
    </Box>
  )
}

export default NewCharacter