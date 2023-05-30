// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { CardStatsCharacterProps } from 'src/@core/components/card-statistics/types'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

//** Custom Imports */
import RDUProvincePerformance from 'src/views/pages/home/RDUProvincePerformance'
import RDUProvinceMap from 'src/views/pages/home/Map'
//import RDUProvinceList from 'src/views/pages/home/RDUProvinceList'
import RDUAmpurList from 'src/views/apps/ampurtarget/list'
//import RDUAmpCoordinatorList from 'src/views/pages/misc/personel/RDUAmpCoordinatorList'
//import RDUChwCoordinatorList from 'src/views/pages/misc/personel/RDUChwCoordinatorList'
import RDUDoctorList from 'src/views/pages/misc/personel/RDUDoctorList'
import RDULocalgovCoordinatorList from 'src/views/pages/misc/personel/RDULocalgovCoordinatorList'
import CoordinatorList from 'src/views/pages/misc/personel/coordinator/list'
import RDUGroceryList from 'src/views/apps/grocery/list'
import RDUDrugstoreList from 'src/views/apps/drugstore/list'
import RDUChwCoordinatorList from 'src/views/apps/chwcoordinator/list'
import RDUAmpCoordinatorList from 'src/views/apps/ampurcoordinator/list'

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

const ChwCoordPage = () => {
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
        <Grid item xs={12}>
          <Card>
            <RDUProvinceMap/>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='ข้อมูลอำเภอ'></CardHeader>
            <CardContent>
              <RDUAmpurList/>
            </CardContent>  
          </Card>
        </Grid>
        <Grid item xs={12}>
          <CardHeader title='ผู้ประสานงานจังหวัด' />
          <CardContent>
            <RDUChwCoordinatorList/>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardHeader title='ผู้ประสานงานอำเภอ'></CardHeader>
          <CardContent>
            <RDUAmpCoordinatorList/>
          </CardContent>     
        </Grid>
        {/* <Grid item xs={12}>
          <CardHeader title='ข้อมูลผู้ประสานงานในองค์กรปกครองท้องถิ่น'></CardHeader>
          <CardContent>
            <CoordinatorList/>
          </CardContent>     
        </Grid> */}
        <Grid item xs={12}>
          {/* <CardHeader title='ข้อมูลร้านขายของชำ'/> */}
          <CardContent>
            <RDUGroceryList/>
          </CardContent>     
        </Grid>
        <Grid item xs={12}>
          {/* <CardHeader title='ข้อมูลร้านขายยา'/> */}
          <CardContent>
            <RDUDrugstoreList/>
          </CardContent>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default ChwCoordPage
