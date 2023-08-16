import React from 'react'
import BrandPanelLayout from '../../components/Layouts/BrandPanelLayout'


import { Box } from '@mui/material'
import TopSection from '../../components/Settings/Settings_2/TopSection'
import Settings_2 from '../../components/Settings/Settings_2'


const SettingPage = () => {
  return (
        <>
             <>
            <BrandPanelLayout>
              <Box>
                <TopSection />
              </Box>
              <Box>
                <Settings_2 />
              </Box>
            </BrandPanelLayout>
        </> 
        </> 
  )
}

export default SettingPage