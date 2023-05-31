// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface SidebarAddDrugstoreType {
  open: boolean
  toggle: () => void
}

interface DrugstoreData {
  chwseq: string
  examdate: string
  licenseno: string
  dstorename: string
  passgpp: string
  seg1percent: number
  seg2percent: number
  seg3percent: number
  seg4percent: number
  seg5percent: number
  seg5_1: string
  seg5_2: string
  seg5_3: string
  seg5_4: string
  seg5_5: string
  seg5_6: string
  seg5_7: string
  seg5_8: string
  seg5_9: string
  seg5_10: string
  seg5_11: string
  seg5_12: string
}

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  chwseq: yup.string(),
  examdate: yup.string().required(),
  licenseno: yup.string().required(),
  dstorename: yup.string().required(),
  passgpp: yup.string().required(),
  seg1percent: yup.number().required(),
  seg2percent: yup.number().required(),
  seg3percent: yup.number().required(),
  seg4percent: yup.number().required(),
  seg5percent: yup.number().required(),
  seg5_1: yup.string(),
  seg5_2: yup.string(),
  seg5_3: yup.string(),
  seg5_4: yup.string(),
  seg5_5: yup.string(),
  seg5_6: yup.string(),
  seg5_7: yup.string(),
  seg5_8: yup.string(),
  seg5_9: yup.string(),
  seg5_10: yup.string(),
  seg5_11: yup.string(),
  seg5_12: yup.string(),
})

const defaultValues = {
  chwseq: '',
  examdate: '',
  licenseno: '',
  dstorename: '',
  passgpp: '',
  seg1percent: 0,
  seg2percent: 0,
  seg3percent: 0,
  seg4percent: 0,
  seg5percent: 0,
  seg5_1: '',
  seg5_2: '',
  seg5_3: '',
  seg5_4: '',
  seg5_5: '',
  seg5_6: '',
  seg5_7: '',
  seg5_8: '',
  seg5_9: '',
  seg5_10: '',
  seg5_11: '',
  seg5_12: ''
}

const SidebarAddDrugstoreDrawer = (props: SidebarAddDrugstoreType) => {
  // ** Props
  const { open, toggle } = props

  //** State */
  const [changwat, setChangwat] = useState<string>('')
  const [ampur, setAmpur] = useState<string>('')
  const [tambon, setTambon] = useState<string>('')

  // ** Hooks
  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    setChangwat('')
    setAmpur('')
    setTambon('')
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>เพิ่มข้อมูลร้านขายยา</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form>
        <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='chwseq'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุลำดับของร้านในจังหวัด'
                  label='ลำดับของร้านในจังหวัด'
                  error={Boolean(errors.chwseq)}
                />
              )}
            />
            {errors.chwseq && <FormHelperText sx={{ color: 'error.main'}}>{errors.chwseq.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='examdate'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุวันที่ทำการตรวจ'
                  label='วันที่ทำการตรวจ'
                  error={Boolean(errors.examdate)}
                />
              )}
            />
            {errors.examdate && <FormHelperText sx={{ color: 'error.main'}}>{errors.examdate.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='licenseno'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุเลขที่ใบอนุญาต'
                  label='เลขที่ใบอนุญาต'
                  error={Boolean(errors.licenseno)}
                />
              )}
            />
            {errors.licenseno && <FormHelperText sx={{ color: 'error.main'}}>{errors.licenseno.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='dstorename'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุชื่อร้านขายยา'
                  label='ชื่อร้านขายยา'
                  error={Boolean(errors.dstorename)}
                />
              )}
            />
            {errors.dstorename && <FormHelperText sx={{ color: 'error.main'}}>{errors.dstorename.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='passgpp'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุผลการประเมิน'
                  label='ผลการประเมิน'
                  error={Boolean(errors.passgpp)}
                />
              )}
            />
            {errors.passgpp && <FormHelperText sx={{ color: 'error.main'}}>{errors.passgpp.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg1percent'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนหมวดที่ 1'
                  label='คะแนนหมวดที่ 1'
                  error={Boolean(errors.seg1percent)}
                />
              )}
            />
            {errors.seg1percent && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg1percent.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg2percent'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนหมวดที่ 2'
                  label='คะแนนหมวดที่ 2'
                  error={Boolean(errors.seg2percent)}
                />
              )}
            />
            {errors.seg2percent && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg2percent.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg3percent'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนหมวดที่ 3'
                  label='คะแนนหมวดที่ 3'
                  error={Boolean(errors.seg3percent)}
                />
              )}
            />
            {errors.seg3percent && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg3percent.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg4percent'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนหมวดที่ 4'
                  label='คะแนนหมวดที่ 4'
                  error={Boolean(errors.seg4percent)}
                />
              )}
            />
            {errors.seg4percent && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg4percent.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5percent'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนหมวดที่ 5'
                  label='คะแนนหมวดที่ 5'
                  error={Boolean(errors.seg5percent)}
                />
              )}
            />
            {errors.seg5percent && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5percent.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_1'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.1'
                  label='คะแนนข้อ 5.1'
                  error={Boolean(errors.seg5_1)}
                />
              )}
            />
            {errors.seg5_1 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_1.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_2'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.2'
                  label='คะแนนข้อ 5.2'
                  error={Boolean(errors.seg5_2)}
                />
              )}
            />
            {errors.seg5_2 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_2.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_3'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.3'
                  label='คะแนนข้อ 5.3'
                  error={Boolean(errors.seg5_3)}
                />
              )}
            />
            {errors.seg5_3 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_3.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_4'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.4'
                  label='คะแนนข้อ 5.4'
                  error={Boolean(errors.seg5_4)}
                />
              )}
            />
            {errors.seg5_4 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_4.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_5'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.5'
                  label='คะแนนข้อ 5.5'
                  error={Boolean(errors.seg5_5)}
                />
              )}
            />
            {errors.seg5_5 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_5.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_6'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.6'
                  label='คะแนนข้อ 5.6'
                  error={Boolean(errors.seg5_6)}
                />
              )}
            />
            {errors.seg5_6 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_6.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_7'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.7'
                  label='คะแนนข้อ 5.7'
                  error={Boolean(errors.seg5_7)}
                />
              )}
            />
            {errors.seg5_7 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_7.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_8'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.8'
                  label='คะแนนข้อ 5.8'
                  error={Boolean(errors.seg5_8)}
                />
              )}
            />
            {errors.seg5_8 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_8.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_9'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.9'
                  label='คะแนนข้อ 5.9'
                  error={Boolean(errors.seg5_9)}
                />
              )}
            />
            {errors.seg5_9 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_9.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_10'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.10'
                  label='คะแนนข้อ 5.10'
                  error={Boolean(errors.seg5_10)}
                />
              )}
            />
            {errors.seg5_10 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_10.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_11'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.11'
                  label='คะแนนข้อ 5.11'
                  error={Boolean(errors.seg5_11)}
                />
              )}
            />
            {errors.seg5_11 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_11.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='seg5_12'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุคะแนนข้อ 5.12'
                  label='คะแนนข้อ 5.12'
                  error={Boolean(errors.seg5_12)}
                />
              )}
            />
            {errors.seg5_12 && <FormHelperText sx={{ color: 'error.main'}}>{errors.seg5_12.message}</FormHelperText>}
          </FormControl>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddDrugstoreDrawer
