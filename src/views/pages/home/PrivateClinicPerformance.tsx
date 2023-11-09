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

const PrivateClinicPerformance = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.2,
        opacityFrom: 1,
        shadeIntensity: 0,
        type: 'horizontal',
        stops: [0, 100, 100]
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round'
    },
    legend: { show: false },
    colors: [theme.palette.success.main],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -10
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13'],
      labels: {
        style: {
          fontSize: '0.875rem',
          colors: theme.palette.text.disabled
        }
      }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader
        title='คลินิกเอกชนผ่านเกณฑ์ RDU ระดับ 2 รายเขต (เฉพาะที่รายงาน)'
        subheader='962/998'
        subheaderTypographyProps={{
          sx: { mt: 1, fontWeight: 500, lineHeight: '2rem', color: 'text.primary', fontSize: '1.25rem !important' }
        }}
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
        <ReactApexcharts
          type='bar'
          height={206}
          options={options}
          series={[{ name: 'Total Sales', data: [103, 105, 58, 70, 83, 110, 66, 81, 18, 33, 86, 111, 38] }]}
        />
      </CardContent>
    </Card>
  )
}

export default PrivateClinicPerformance
