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
  changwat: string
  ampur: number
  tambon: string
  tel: string
  rdupass: string
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const defaultValues = {
  shopname: '',
  shopowner: '',
  changwat: '',
  ampur: '',
  tambon: '',
  tel: '',
  rdupass: ''
}

const AddGroceryDrawer = (props: SidebarAddGroceryType) => {
  // ** Props
  const { open, toggle } = props

  const handleClose = () => {
    // setPlan('basic')
    // setRole('subscriber')
    // setValue('contact', Number(''))
    // toggle()
    // reset()
  }

  return (
    <Drawer anchor='right' variant='temporary'>
        <Header>
        <Typography variant='h6'>เพิ่มข้อมูลร้านชำ</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
        <Box>
            <div>AddGroceryDrawer</div>
        </Box>
    </Drawer>
  )
}

export default AddGroceryDrawer
