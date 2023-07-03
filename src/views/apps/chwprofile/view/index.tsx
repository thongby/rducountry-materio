import React from 'react'

// ** MUI Components
import Grid from '@mui/material/Grid'

import ChwOverview from './ChwOverview'


type Props = {}

const RDUProvinceView = (props: Props) => {
  return (
    <Grid container spacing={6}>
        <Grid item xl={4} md={5} xs={12}>
            <ChwOverview/>
        </Grid>
        <Grid item xl={8} md={7} xs={12}>

        </Grid>
    </Grid>
  )
}

export default RDUProvinceView