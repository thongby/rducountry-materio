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

interface SidebarAddGroceryType {
  open: boolean
  toggle: () => void
}

interface GroceryData {
  shopname: string
  shopowner: string
  /* changwat: string
  ampur: number
  tambon: string */
  tel: string
  /* rdupass: string */
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
  shopname: yup.string().required(),
  shopowner: yup.string().required(),
  tel: yup.string(),
  /* changwat: yup.string(),
  ampur: yup.string(),
  tambon: yup.string(), */
  rdupass: yup.string().required()
})

const defaultValues = {
  shopname: '',
  shopowner: '',
  /* changwat: '',
  ampur: '',
  tambon: '', */
  tel: '',
  /* rdupass: '' */
}

const SidebarAddGrocery = (props: SidebarAddGroceryType) => {
  // ** Props
  const { open, toggle } = props

  //** State */
  const [changwat, setChangwat] = useState<string>('')
  const [ampur, setAmpur] = useState<string>('')
  const [tambon, setTambon] = useState<string>('')
  const [rdupass, setRDUPass] = useState<string>('ยังไม่ประเมิน')

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
        <Typography variant='h6'>เพิ่มข้อมูลร้านชำ</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='shopname'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุชื่อร้าน'
                  label='ชื่อร้าน'
                  error={Boolean(errors.shopname)}
                />
              )}
            />
            {errors.shopname && <FormHelperText sx={{ color: 'error.main'}}>{errors.shopname.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='shopowner'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุชื่อเจ้าของ/ผู้จัดการ'
                  label='ชื่อเจ้าของ/ผู้จัดการ'
                  error={Boolean(errors.shopowner)}
                />
              )}
            />
            {errors.shopowner && <FormHelperText sx={{ color: 'error.main'}}>{errors.shopowner.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='tel'
              control={control}
              rules={{required:false}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุหมายเลขโทรศัพท์'
                  label='หมายเลขโทรศัพท์'
                  error={Boolean(errors.tel)}
                />
              )}
            />
            {errors.tel && <FormHelperText sx={{ color: 'error.main'}}>{errors.tel.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='rdupass-select'>ผลการประเมิน</InputLabel>
            <Select
              fullWidth
              id='select-rdupass'
              value={rdupass}
              labelId='rdupass-select'
              label='ผลการประเมิน'
              onChange={e=>setRDUPass(e.target.value)}
              inputProps={{placeholder:'เลือกผลการประเมิน'}}
            >
              <MenuItem value='evala'>ยังไม่ประเมิน</MenuItem>
              <MenuItem value='evalb'>ประเมินไม่ผ่าน</MenuItem>
              <MenuItem value='evalc'>ประเมินผ่าน</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='changwat-select'>เลือกจังหวัด</InputLabel>
            <Select 
              fullWidth 
              id='select-changwat'
              value={changwat}
              labelId='changwat-select' 
              label='จังหวัด'
              onChange={e=>setChangwat(e.target.value)}
              inputProps={{placeholder:'เลือกจังหวัด'}}
            >
              <MenuItem value='chwa'>จังหวัด ก</MenuItem>
              <MenuItem value='chwb'>จังหวัด ข</MenuItem>
              <MenuItem value='chwc'>จังหวัด ค</MenuItem>
              <MenuItem value='chwd'>จังหวัด ง</MenuItem>
              <MenuItem value='chwe'>จังหวัด จ</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='ampur-select'>อำเภอ</InputLabel>
            <Select
              fullWidth
              id='select-ampur'
              value={ampur}
              labelId='ampur-select'
              label='อำเภอ'
              onChange={e=>setAmpur(e.target.value)}
              inputProps={{placeholder:'เลือกอำเภอ'}}
            >
              <MenuItem value='ampa'>อำเภอ ก</MenuItem>
              <MenuItem value='ampb'>อำเภอ ข</MenuItem>
              <MenuItem value='ampc'>อำเภอ ค</MenuItem>
              <MenuItem value='ampd'>อำเภอ ง</MenuItem>
              <MenuItem value='ampe'>อำเภอ จ</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='tambon-select'>ตำบล</InputLabel>
            <Select
              fullWidth
              id='select-tambon'
              value={tambon}
              labelId='tambon-select'
              label='ตำบล'
              onChange={e=>setTambon(e.target.value)}
              inputProps={{placeholder:'เลือกตำบล'}}
            >
              <MenuItem value='tama'>ตำบล ก</MenuItem>
              <MenuItem value='tamb'>ตำบล ข</MenuItem>
              <MenuItem value='tamc'>ตำบล ค</MenuItem>
              <MenuItem value='tamd'>ตำบล ง</MenuItem>
              <MenuItem value='tame'>ตำบล จ</MenuItem>
            </Select>
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

export default SidebarAddGrocery
