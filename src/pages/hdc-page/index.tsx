// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const HDCPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ระบบคลังข้อมูลด้านการแพทย์'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Health Data Center (HDC)</Typography>
            <br />
            <Typography>
              ระบบคลังข้อมูลสุขภาพ Health Data Center (HDC)ระดับจังหวัด, ระดับเขต และระดับกระทรวง เป็นระบบฐานข้อมูลกลางด้านสุขภาพ ซึ่งรวบรวมข้อมูลสาธารณสุขของสถานบริการภายใต้สำนักงานสาธารณสุขจังหวัดทุกแห่ง 
              เป็นระบบฐานข้อมูลเพื่อสนับสนุนการบริหารจัดการและการตัดสินใจของผู้บริหารระดับต่างๆ ในกระทรวงสาธารณสุข โดยใช้ข้อมูลตามโครงสร้างมาตรฐาน 43 แฟ้ม ที่ประกาศโดยสำนักนโยบายและยุทธศาสตร์ส่งจากหน่วยบริการสาธารณสุขมายังฐานข้อมูลกลางระดับจังหวัด (HDC ระดับจังหวัด) 
              เพื่อตรวจสอบและประมวลผลตามขั้นตอนการประมวลผลที่สร้างจากส่วนกลาง และข้อมูลที่ถูกประมวลผล และส่งมายังฐานข้อมูลกลางระดับกระทรวงแบบอัตโนมัติ
            </Typography>
            <br />
            <Button variant="contained">HDC (RDU)</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HDCPage
