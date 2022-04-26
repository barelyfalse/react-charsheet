import React from 'react'
import { Box, 
  Paper, 
  Typography,
  Chip,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material'
import { rolCharStats } from '../data/Data.js';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import BackpackRoundedIcon from '@mui/icons-material/BackpackRounded';
import { motion } from "framer-motion";

function EquimentSlot({item, onUnequip}) {

  const handleItemUnequip = () => {
    onUnequip(item.id);
  }

  const variant = {
    initial: {
      opacity: 0,
      filter: 'blur(5px)',
      transform: 'scaleX(1.3) scaleY(1.1)',
    },
    animate: { 
      opacity: 1, 
      height: '7ch',
      marginTop: '1ch',
      filter: 'blur(0px)',
      transform: 'scaleX(1) scaleY(1)',
      transition: { ease: "circInOut", duration: .4}
    },
    exit: {
      opacity: 0,
      transform: 'scaleX(0.9) scaleY(0.8)',
      height: 0, 
      marginTop: 0 ,
      filter: 'blur(5px)',
      transition: { ease: "easeInOut", duration: .4}
    },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variant}>
      <Paper
        elevation={4}
        sx={{
        py: '1ch',
        px: '1.5ch',
        width: '1'
      }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{width: '1'}}
        >
          <Box>
            <Typography>
              {item.name}
            </Typography>
            <Stack 
              direction="row"
              spacing={1}
            >
              {
                Object.getOwnPropertyNames(item.mods).map((mod, index) => {
                  return <Chip 
                    key={index} 
                    label={mod.toUpperCase() + ' ' + (item.mods[mod] > 0 ? '+':'') +item.mods[mod]}
                    color={item.mods[mod] > 0 ? 'success' : 'error'}
                    variant={rolCharStats.map((skill) => { return skill.short }).includes(mod.toUpperCase()) ? "outlined" : ""}
                    size="small"
                  />
                })
              }
            </Stack>
          </Box>
          <Box>
            <Tooltip title="Información" arrow>
              <IconButton color="primary" aria-label="Informacón">
                <InfoRoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Desequipar" arrow>
              <IconButton color="primary" aria-label="Desequipar" onClick={handleItemUnequip}>
                <BackpackRoundedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      </Paper>
    </motion.div>
  )
}

export default EquimentSlot