// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

interface DataType {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

const salesData: DataType[] = [
  {
    stats: '500/800',
    title: 'โรงพยาบาล',
    color: 'primary',
    icon: 'mdi:trending-up'
  },
  {
    stats: '600/2000',
    color: 'success',
    title: 'ปฐมภูมิ',
    icon: 'mdi:account-outline'
  },
  {
    stats: '3000',
    color: 'warning',
    title: 'ร้านขายของชำ',
    icon: 'mdi:cellphone-link'
  }
]

const renderStats = () => {
  return salesData.map((item: DataType, index: number) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar variant='rounded' color={item.color} sx={{ mr: 3, boxShadow: 3, width: 44, height: 44 }}>
          <Icon icon={item.icon} fontSize='1.75rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const RDUProvincePerformance = () => {
  return (
    <Card>
      <CardHeader
        title='ผลงานเขต 1-12'
        /* action={
          <OptionsMenu
            options={['Refresh', 'Share', 'Update']}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }}
          />
        } */
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              ผลงานตามตัวชี้วัด
            </Box>{' '}
            😎 ล่าสุด
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.25,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(0.75)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RDUProvincePerformance
