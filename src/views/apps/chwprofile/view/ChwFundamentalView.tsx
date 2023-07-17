/** React Imports */
import React, { useState } from 'react'

//** MUI Imports */
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

//** Custom Component Imports */

//** Type Imports */
import { ThemeColor } from 'src/@core/layouts/types'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

type Props = {}

interface ColorsType {
  [key: string]: ThemeColor
}

const ChwFundamentalView = (props: Props) => {
  // ** States
  const [openEdit, setOpenEdit] = useState<boolean>(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  // ** data from store
  // if (data){
  //   insert code below here
  // }
  // else
  // {
  //   return null
  // }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h6'>ข้อมูลพื้นฐาน</Typography>
            <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
            <Box sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>จำนวนอำเภอ(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>จำนวนตำบล(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>หมู่บ้านทั้งหมด(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>
                  โรงพยาบาลสังกัดสป.สธ.(แห่ง):
                </Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>
                  โรงพยาบาลนอกสังกัดสป.สธ.(แห่ง):
                </Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงพยาบาลมหาวิทยาลัย(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงพยาบาล ก.มหาดไทย(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงพยาบาล ก.กลาโหม(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงพยาบาลสังกัดอื่น(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>สถานบริการปฐมภูมิ (แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้านขายยา ขย.1(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้านขายยา ขย.2(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้านขายย ขย.3(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้านขายยา ขย.4(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้าน 7-11(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้านขายของชำ(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงงาน(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงเรียนรัฐบาล(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงเรียนเอกชน(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงเรียนสังกัดอปท.(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงเรียนสังกัดอื่น(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>อื่นๆ(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวน</Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
                แก้ไขข้อมูล
            </Button>
          </CardActions>

          <Dialog
              open={openEdit}
              onClose={handleEditClose}
              aria-labelledby='user-view-edit'
              sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650, p: [2, 10] } }}
              aria-describedby='chw-view-edit-fundamental'
            >
              <DialogTitle id='chw-fundamental-edit' sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>
                แก้ไขข้อมูลพื้นฐาน
              </DialogTitle>
              <DialogContent>
                <DialogContentText variant='body2' id='chw-view-edit-fundamental' sx={{ textAlign: 'center', mb: 7 }}>
                  แก้ไขรายละเอียดข้อมูลพื้นฐาน
                </DialogContentText>
                <form>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='จำนวนอำเภอ(แห่ง)' 
                       defaultValue="XXX" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='จำนวนตำบล'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='จำนวนหมู่บ้าน(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='โรงพยาบาลสังกัดสป.สธ.(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='โรงพยาบาลนอกสังกัดสป.สธ.(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='โรงพยาบาลสังกัดมหาวิทยาลัย(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='โรงพยาบาลนอกสังกัด ก.มหาดไทย(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='โรงพยาบาลสังกัด ก.กลาโหม(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='โรงพยาบาลนอกสังกัดอื่น(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='สถานบริการปฐมภูมิ(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='ร้านขายยาขย.1(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='ร้านขายยาขย.2(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='ร้านขายยาขย.3(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='ร้านขายยาขย.4(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='ร้าน 7-11(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='ร้านขายของชำ(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='โรงงาน(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='โรงเรียนรัฐบาล(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='โรงเรียนเอกชน(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='โรงเรียนสังกัดอปท.(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       fullWidth 
                       label='โรงเรียนสังกัดอื่น(แห่ง)' 
                       defaultValue="XXX" 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label='อื่นๆ(แห่ง)'
                        defaultValue="XXX"
                      />
                    </Grid>
                  </Grid>
                </form>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 1 }} onClick={handleEditClose}>
                  บันทึก
                </Button>
                <Button variant='outlined' color='secondary' onClick={handleEditClose}>
                  ยกเลิก
                </Button>
              </DialogActions>
            </Dialog>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChwFundamentalView
