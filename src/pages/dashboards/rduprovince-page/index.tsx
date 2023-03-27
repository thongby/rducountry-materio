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
            <CardHeader title='สถิติผลงานจังหวัด'></CardHeader>
              <CardContent>
                <Typography>
                    ผลงานจังหวัด อำเภอ ร้านชำเป้าหมาย
                </Typography>
              </CardContent>  
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='แผนที่แสดงผลงานทั้งประเทศ'></CardHeader>
              <CardContent>
                แผนที่แสดงผลงานทั้งประเทศ
              </CardContent>  
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>    
  )
}

export default RDUProvinceDashboard