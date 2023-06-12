import React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

type Props = {}

const RDUProvinceDashboard = (props: Props) => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='ผลงานพื้นที่กรุงเทพมหานคร'></CardHeader>
              <CardContent>
                <Typography>
                    ผลงานหน่วยบริการในกรุงเทพมหานคร
                </Typography>
              </CardContent>  
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='แผนที่แสดงผลงาน'></CardHeader>
              <CardContent>
                แผนที่แสดงผลงานในกรุงเทพมหานคร
              </CardContent>  
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>    
  )
}

export default RDUProvinceDashboard