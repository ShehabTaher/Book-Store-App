import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily: "fantasy"}} variant='h2'>
          This is A CRUD Application
        </Typography>
        <Typography sx={{fontFamily: "fantasy"}} variant='h3'>By Shehab Taher</Typography>
      </Box>
    </div>
  )
}

export default About