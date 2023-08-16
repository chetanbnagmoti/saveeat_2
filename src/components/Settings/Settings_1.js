import React from 'react'
import BasicDetails from './Settings_1/Module/BasicDetails'
import { Box } from '@mui/material'
import BusinessDetails from './Settings_1/Module/BusinessDetails'
import BusinessOwnerDetails from './Settings_1/Module/BusinessOwnerDetails'
import OutletDetails from './Settings_1/Module/OutletDetails'

function Settings_1() {
  return (
    <>
    <Box>
      <BasicDetails />
    </Box>
    <Box>
     <BusinessDetails />
    </Box>
    <Box>
        <BusinessOwnerDetails />
    </Box>
    <Box>
        <OutletDetails />
    </Box>
    
    
    
    
    </>
  )
}

export default Settings_1