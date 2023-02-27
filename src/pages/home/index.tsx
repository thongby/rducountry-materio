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
import CrmTransactions from 'src/views/dashboards/crm/CrmTransactions'

// ** Components Imports

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
          <CrmTransactions />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Kick start your project 🚀'></CardHeader>
            <CardContent>
              <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
              <Typography>
                Please make sure to read our Template Documentation to understand where to go from here and how to use
                our template.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='ACL and JWT 🔒'></CardHeader>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are
                implemented in the starter-kit as well.
              </Typography>
              <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Home
