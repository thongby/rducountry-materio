// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const AmpCoordPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ผู้ประสานงานอำเภอ'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>ผู้ประสานงานอำเภอ</Typography>
            <br />
            <Typography>
              สถิติของอำเภอ
            </Typography>
            <Typography>
              ข้อมูลร้านชำของอำเภอ
            </Typography>
            <Typography>
              รายชื่อผู้ประสานงานอำเภอ
            </Typography>
            <br />
            <Button variant="contained">ผู้ประสานงานอำเภอ</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AmpCoordPage
