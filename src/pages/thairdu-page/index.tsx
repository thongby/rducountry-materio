// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const ThaiRDUPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ThaiRDU Program'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>โปรแกรมสำหรับวิเคราะห์ข้อมูลการใช้ยาสมเหตุผลในโรงพยาบาล</Typography>
            <br />
            <Typography>
              เป็นโปรแกรมที่เหมาะสำหรับเภสัชกรที่ไม่มีความรู้ด้านไอทีมากนัก แต่ต้องการวิเคราะห์ข้อมูลการใช้ยาอย่างสมเหตุผลในโรงพยาบาล ผู้ใช้งานสามารถดาวน์โหลดโปรแกรมไปใช้งานโดยไม่มีค่าใช้จ่ายใดๆ
            </Typography>
            <br />
            <Button variant="contained">ดาวน์โหลด</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ThaiRDUPage
