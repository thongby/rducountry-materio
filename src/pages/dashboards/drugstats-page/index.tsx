// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import AnalyticsTrophy from 'src/views/dashboards/drugstats-page/AnalyticsTrophy'
import AnalyticsTransactionsCard from 'src/views/dashboards/drugstats-page/AnalyticsTransactionsCard'
import DrugPrescripebyRegionOPD from 'src/views/dashboards/drugstats-page/DrugPrescripebyRegionOPD'
import DrugValuebyRegionOPD from 'src/views/dashboards/drugstats-page/DrugValuebyRegionOPD'
import DrugPrescripebyRegionIPD from 'src/views/dashboards/drugstats-page/DayAdmissionbyRegionIPD'
import DrugValuebyRegionIPD from 'src/views/dashboards/drugstats-page/DrugValuebyRegionIPD'
import DayAdmissionbyRegionIPD from 'src/views/dashboards/drugstats-page/DayAdmissionbyRegionIPD'
import DrugPrescripebyRegionPrimary from 'src/views/dashboards/drugstats-page/DrugPrescripebyRegionPrimary'
import DrugValuebyRegionPrimary from 'src/views/dashboards/drugstats-page/DrugValuebyRegionOPDPrimary'
import Drug1000AdmissionReport from 'src/views/dashboards/drugstats-page/Drug1000AdmissionReport'
import SeriousAEReport from 'src/views/dashboards/drugstats-page/SeriousAEReport'

const DrugStatsPage = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
          <AnalyticsTrophy/>
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsTransactionsCard/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DrugPrescripebyRegionOPD/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DrugValuebyRegionOPD/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DayAdmissionbyRegionIPD/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DrugValuebyRegionIPD/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DrugPrescripebyRegionPrimary/>
        </Grid>
        <Grid item xs={12} md={6}>
          <DrugValuebyRegionPrimary/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Drug1000AdmissionReport/>
        </Grid>
        <Grid item xs={12} md={6}>
          <SeriousAEReport/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default DrugStatsPage
