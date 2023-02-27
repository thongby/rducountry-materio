// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const HPVCPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ศูนย์เฝ้าระวังความปลอดภัยด้านผลิตภัณฑ์สุขภาพ'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Health Product Vigilance Center (HPVC)</Typography>
            <br />
            <Typography>
            การเฝ้าระวังความปลอดภัยด้านผลิตภัณฑ์สุขภาพ เป็นหนึ่งในภารกิจที่สำคัญของสำนักงานคณะกรรมการอาหารและยาในการกำกับดูแลผลิตภัณฑ์สุขภาพ โดยเฉพาะภายหลังผลิตภัณฑ์ออกสู่ตลาด การดำเนินงานดังกล่าวอยู่ภายใต้ความรับผิดชอบของศูนย์เฝ้าระวังความปลอดภัยด้านผลิตภัณฑ์สุขภาพ (Health Product Vigilance Center: HPVC)
            </Typography>
            <br />
            <Button variant="contained">HPVC</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HPVCPage
