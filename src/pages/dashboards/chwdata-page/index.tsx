// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const ChwDataPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ข้อมูลพื้นฐานจังหวัด'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Changwat Data</Typography>
            <br />
            <Typography>
              สถิติด้านยา
            </Typography>
            <br />
            <Button variant="contained">Changwat Data</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChwDataPage
