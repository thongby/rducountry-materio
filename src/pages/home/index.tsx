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
import RDUBMAPerformance from 'src/views/pages/home/RDUBMAPerformance'
import GPPOverview from 'src/views/pages/home/GPPOverview'
import PrivateClinicOverview from 'src/views/pages/home/PrivateClinicOverview'
import PrivateHospitalOverview from 'src/views/pages/home/PrivateHospitalOverview'
import RDUHospitalOverview from 'src/views/pages/home/RDUHospitalOverview'
import RDUHospitalPerformance from 'src/views/pages/home/RDUHospitalPerformance'
import RDUPCUPerformance from 'src/views/pages/home/RDUPCUPerformance'
import RDUPCUOverview from 'src/views/pages/home/RDUPCUOverview'
import RDUPCUPMAPerformance from 'src/views/pages/home/RDUPCUPMAPerformance'
import RDUPCUPMAOverview from 'src/views/pages/home/RDUPCUPMAOverview'
import RDUGroceryPerformance from 'src/views/pages/home/RDUGroceryPerformance'
import RDUGroceryOverview from 'src/views/pages/home/RDUGroceryOverview'

const data: CardStatsCharacterProps[] = [
  {
    stats: '64/76',
    title: 'จังหวัด RDU',
    trendNumber: '84.21%',
    chipColor: 'primary',
    chipText: 'จังหวัดใช้ยาสมเหตุผล',
    src: '/images/cards/pose_f9.png'
  },
  {
    stats: '477/877',
    //trend: 'negative',
    title: 'อำเภอ RDU',
    trendNumber: '64.00%',
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
        <Grid xs={12} md={6}>
          <RDUBMAPerformance/>
        </Grid>
        <Grid item xs={12}>
          <RDUProvincePerformance/>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <RDUHospitalOverview/>
        </Grid>
        <Grid item xs={12} md={6}>
          <RDUHospitalPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <RDUPCUPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <RDUPCUOverview/>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <RDUPCUPMAPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <RDUPCUPMAOverview/>
        </Grid>
        <Grid item xs={12} md={12}>
          <RDUGroceryPerformance/>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <RDUGroceryOverview/>
        </Grid> */}
        <Grid item xs={12}>
          <Card>
            <RDUProvinceMap/>
          </Card>
        </Grid>
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
        <Grid item xs={12}>
          <GPPPerformance />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <GPPOverview/>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <PrivateClinicOverview/>
        </Grid>
        <Grid item xs={12} md={6}>
          <PrivateClinicPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <PrivateHospitalPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <PrivateHospitalOverview/>
        </Grid>
        <Grid item xs={12} md={6}>
          <HPVCPerformance/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TAWAIPerformance/>
        </Grid>
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
