// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const TawaiPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='TaWai for Health'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>ตาไวรู้ทันภัยสุขภาพ</Typography>
            <br />
            <Typography>
            เป็นเครือข่ายการทำงานเพื่อผู้บริโภคด้านผลิตภัณฑ์สุขภาพที่ดำเนินงานมาตั้งแต่ปี 2559 โดยได้รับการสนับสนุนจากหน่วยงานต่างๆ 
            เช่น ศูนย์วิชาการเฝ้าระวังและพัฒนาระบบยา (กพย.) ศูนย์เฝ้าระวังความปลอดภัยด้านผลิตภัณฑ์สุขภาพ (Health Product Vigilance Center Thailand) เขตบริการสุขภาพที่ 10 และเขตบริการสุขภาพที่ 12 เป็นต้น
            </Typography>
            <br />
            <Button variant="contained" href="https://tawaiforhealth.org/">
              TaWai for Health
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TawaiPage
