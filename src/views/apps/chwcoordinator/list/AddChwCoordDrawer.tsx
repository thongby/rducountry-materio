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

interface SidebarAddChwCoordType {
  open: boolean
  toggle: () => void
}

interface ChwCoordData {
  fullname: string
  position: string
  email: string
  tel: string
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
  fullname: yup.string().required(),
  position: yup.string().required(),
  email: yup.string().required(),
  tel: yup.string().required(),
})

const defaultValues = {
  fullname: '',
  position: '',
  email: '',
  tel: ''
}

const SidebarAddChwCoord = (props: SidebarAddChwCoordType) => {
  // ** Props
  const { open, toggle } = props

  //** State */
  const [changwat, setChangwat] = useState<string>('')
  const [ampur, setAmpur] = useState<string>('')
  const [tambon, setTambon] = useState<string>('')
  const [hagency, setHAgency] = useState<string>('')

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
    setHAgency('')
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
        <Typography variant='h6'>เพิ่มผู้ประสานงานจังหวัด</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form>
          <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
              name='fullname'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุชื่อ-นามสกุล'
                  label='ชื่อ-นามสกุล'
                  error={Boolean(errors.fullname)}
                />
              )}
            />
            {errors.fullname && <FormHelperText sx={{ color: 'error.main'}}>{errors.fullname.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
              name='position'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุตำแหน่ง'
                  label='ตำแหน่ง'
                  error={Boolean(errors.position)}
                />
              )}
            />
            {errors.position && <FormHelperText sx={{ color: 'error.main'}}>{errors.position.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
              name='email'
              control={control}
              rules={{required:true}}
              render={({field:{value,onChange}})=>(
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder='ระบุอีเมล์'
                  label='อีเมล์'
                  error={Boolean(errors.email)}
                />
              )}
            />
            {errors.email && <FormHelperText sx={{ color: 'error.main'}}>{errors.email.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
              name='tel'
              control={control}
              rules={{required:true}}
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

export default SidebarAddChwCoord
