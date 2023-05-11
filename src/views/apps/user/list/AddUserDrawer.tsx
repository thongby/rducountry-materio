import React, { useState } from 'react'

//** MUI Imports */
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

//** Third Party Imports */
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

interface UserData {
  fullname: string
  position: string
  agency: string
  tel: string
  email: string
  username: string
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

const schema = yup.object().shape({
  agency: yup.string().required(),
  position: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup.string().email().required(),
  fullName: yup
    .string()
    .min(3, obj => showErrors('ชื่อ-นามสกุล', obj.value.length, obj.min))
    .required(),
  username: yup
    .string()
    .min(3, obj => showErrors('Username', obj.value.length, obj.min))
    .required()
})

const defaultValues = {
  fullname: '',
  position: '',
  angency: '',
  tel: '',
  email: '',
  username: ''
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  return (
    <Drawer>
      <Header>
        <Typography variant='h6'>Add user</Typography>
      </Header>
      <Box>
        <form>
          <FormControl></FormControl>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
