// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ChwProfiles from 'src/views/dashboards/chwdata-page/ChwProfiles'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import ChwAnalyticsCard from 'src/views/dashboards/chwdata-page/ChwAnalyticsCard'
import ChwDataMap from 'src/views/dashboards/chwdata-page/ChwDataMap'

const ChwDataPage = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='สถิติผลงานของจังหวัด'></CardHeader>
              <CardContent>
                <ChwAnalyticsCard/>
              </CardContent>  
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='แผนที่ 77 จังหวัด'></CardHeader>
              <CardContent>
                <ChwDataMap/>
              </CardContent>  
          </Card>
        </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ข้อมูลรายจังหวัด'></CardHeader>
          <CardContent>
            <ChwProfiles/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </ApexChartWrapper>
    
  )
}

export default ChwDataPage
