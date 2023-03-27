// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const ChwCoordPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ผู้ประสานงานจังหวัด'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>ผู้ประสานงานจังหวัด</Typography>
            <br />
            <Typography>
              ข้อมูลของจังหวัด
            </Typography>
            <Typography>
              ข้อมูลแผนพัฒนา อำเภอเป้าหมาย ร้านชำเป้าหมาย
            </Typography>
            <Typography>
              รายชื่อผู้ประสานงานของจังหวัด
            </Typography>
            <Typography>
              รายชื่อผู้ประสานงานของอำเภอ
            </Typography>
            <Typography>
              รายชื่ออำเภอพร้อมทั้งอำเภอเป้าหมาย
            </Typography>
            <Typography>
              รายชื่อร้านขายของชำพร้อมทั้งร้านเป้าหมาย
            </Typography>
            <br />
            <Button variant="contained">ผู้ประสานงานจังหวัด</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChwCoordPage
