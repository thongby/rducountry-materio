import React from 'react'

// ** MUI Components
//** MUI Imports */
import Grid from '@mui/material/Grid'

//** Type Imports */

//** Components Imports */
import ChwViewLeft from './ChwViewLeft'
import ChwViewRight from './ChwViewRight'
//import ChwOverview from './ChwOverview'


type Props = {
  tab: string
}

const ChwProfileView = ({tab}: Props) => {
  return (
    <Grid container spacing={6}>
        <Grid item lg={4} md={5} xs={12}>
          <ChwViewLeft/>
        </Grid>
        <Grid item lg={8} md={7} xs={12}>
          <ChwViewRight tab={tab}/>
        </Grid>
    </Grid>
  )
}

export default ChwProfileView