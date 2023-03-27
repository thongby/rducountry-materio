// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const series = [
  {
    name: 'โรงพยาบาลเอกชน',
    data: [95, 177, 284, 256, 105, 63, 168, 218, 72, 75, 80, 60, 85]
  },
  {
    name: 'คลินิกเอกชน',
    data: [-145, -80, -60, -180, -100, -60, -85, -75, -100, -86, -98, -75, -90]
  }
]

const PrivateServicePerformance = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      yaxis: {
        lines: { show: false }
      },
      padding: {
        left: 0,
        right: 0
      }
    },
    legend: {
      offsetY: 8,
      markers: { radius: 15 },
      labels: { colors: theme.palette.text.secondary }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.success.main, theme.palette.secondary.main],
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '50%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13'],
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader
        title='โรงพยาบาล/คลินิกเอกชนผ่านเกณฑ์ RDU รายเขต'
        /* action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        } */
        titleTypographyProps={{
          sx: {
            fontSize: '1rem !important',
            fontWeight: '600 !important',
            lineHeight: '1.5rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent>
        <ReactApexcharts type='bar' height={240} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default PrivateServicePerformance
