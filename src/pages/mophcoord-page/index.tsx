// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const MophCoordPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ผู้ประสานงานกระทรวง'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>ผู้ประสานงานกระทรวง</Typography>
            <br />
            <Typography>
              สถิติจังหวัด
            </Typography>
            <Typography>
              ข้อมูลรายจังหวัด
            </Typography>
            <br />
            <Button variant="contained">ผู้ประสานงานกระทรวง</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MophCoordPage
