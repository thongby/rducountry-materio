//** React Imports */
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

interface ColorsType {
  [key: string]: ThemeColor
}

type Props = {}

const ChwViewLeft = (props: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h6'>ข้อมูลผลงาน</Typography>
            <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
            <Box sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ปีงบประมาณเป้หมายผ่านเกณฑ์:</Typography>
                <Typography variant='body2'>ใส่ปีงบประมาณ</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>อำเภอทั้งหมด(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวนอำเภอ</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>อำเภอผ่านเกณฑ์(แห่ง):</Typography>
                <Typography variant='body2'>ใส่จำนวนอำเภอผ่านเกณฑ์</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>อำเภอผ่านเกณฑ์(ร้อยละ):</Typography>
                <Typography variant='body2'>ใส่ร้อยละ</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ผลงาน:</Typography>
                <Typography variant='body2'>ผ่านหรือไม่ผ่าน</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงพยาบาลผ่านเกณฑ์ :</Typography>
                <Typography variant='body2'>ใส่จำนวนแห่ง/ทั้งหมด</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ปฐมภูมิ:</Typography>
                <Typography variant='body2'>ใส่จำนวนแห่ง/ทั้งหมด</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ปฐมภูมิ:</Typography>
                <Typography variant='body2'>ใส่จำนวนแห่ง/ทั้งหมด</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>ร้านขายยาผ่านเกณฑ์:</Typography>
                <Typography variant='body2'>ใส่จำนวนแห่ง/ทั้งหมด</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>โรงพยายาลเอกชน:</Typography>
                <Typography variant='body2'>ใส่จำนวนแห่ง/ทั้งหมด</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>คลินิกเอกชน:</Typography>
                <Typography variant='body2'>ใส่จำนวนแห่ง/ทั้งหมด</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>Part 2</CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChwViewLeft
