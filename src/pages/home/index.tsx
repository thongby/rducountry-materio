// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { CardStatsCharacterProps } from 'src/@core/components/card-statistics/types'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components Imports
import RDUCountryInfo from 'src/views/pages/home/Rducountryinfo'
import RDUProvinceMap from 'src/views/pages/home/Map'
import RDUProvinceList from 'src/views/apps/chwprofile/list'
import ChwProfileList from 'src/views/apps/chwdata/list'
import RDUProvincePerformance from 'src/views/pages/home/RDUProvincePerformance'
import GPPPerformance from 'src/views/pages/home/GPPPerformance'
import PrivateServicePerformance from 'src/views/pages/home/PrivateServicePerformance'
import HPVCPerformance from 'src/views/pages/home/HPVCPerformance'
import TAWAIPerformance from 'src/views/pages/home/TAWAIPerformance'
import PrivateClinicPerformance from 'src/views/pages/home/PrivateClinicPerformance'
import PrivateHospitalPerformance from 'src/views/pages/home/PrivateHospitalPerformance'

const data: CardStatsCharacterProps[] = [
  {
    stats: '25/77',
    title: 'จังหวัด RDU',
    trendNumber: '32.47%',
    chipColor: 'primary',
    chipText: 'จังหวัดใช้ยาสมเหตุผล',
    src: '/images/cards/pose_f9.png'
  },
  {
    stats: '200/878',
    //trend: 'negative',
    title: 'อำเภอ RDU',
    trendNumber: '22.78%',
    chipText: 'อำเภอใช้ยาสมเหตุผล',
    chipColor: 'secondary',
    src: '/images/cards/pose_m18.png'
  }
]

const Home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ pt: theme => `${theme.spacing(12.25)} !important` }}>
          <CardStatisticsCharacter data={data[1]} />
        </Grid>
        <Grid item xs={12} md={6}>
          <RDUProvincePerformance/>
        </Grid>
        {/* <Grid item xs={12}>
          <Card>
            <RDUProvinceMap/>
          </Card>
        </Grid> */}
        <Grid item xs={12}>
          <Card>
            <RDUProvinceList/>
          </Card>
        </Grid>
        {/* <Grid item xs={12}>
          <Card>
            <ChwProfileList/>
          </Card>
        </Grid> */}
        {/* <Grid item xs={12} md={6}>
          <GPPPerformance />
        </Grid>
        <Grid item xs={12} md={6}>
          <PrivateClinicPerformance/>
        </Grid>
        <Grid item xs={12}>
          <PrivateHospitalPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <HPVCPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TAWAIPerformance/>
        </Grid> */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title='ความหมายและแนวทางการใช้ยาสมเหตุผล'></CardHeader>
            <CardContent>
              <RDUCountryInfo/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Home
