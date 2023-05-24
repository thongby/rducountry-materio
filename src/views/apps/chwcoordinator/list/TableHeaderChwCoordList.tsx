import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface TableHeaderProps {
   value: string
//   toggle: () => void
   handleFilter: (val: string) => void
}

type Props = {}

const TableHeaderChwCoordList = (props: TableHeaderProps) => {
    // ** Props
    const { handleFilter, value } = props

    return (
      <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
          sx={{ mr: 4, mb: 2 }}
          color='secondary'
          variant='outlined'
          startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
          >
              ส่งออก
          </Button>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            size='small'
            value={value}
            sx={{ mr: 4, mb: 2 }}
            placeholder='ค้นหา'
            onChange={e => handleFilter(e.target.value)}
          />
        </Box>
      </Box>   
    )
}

export default TableHeaderChwCoordList