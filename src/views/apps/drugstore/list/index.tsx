import React, { MouseEvent, useEffect, useCallback, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
//import { DataGrid } from '@mui/x-data-grid'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchDrugStore } from 'src/store/apps/drugstore'

// ** Third Party Components
import axios from 'axios'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { ThemeColor } from 'src/@core/layouts/types'
import { drugstoreType } from 'src/types/apps/drugstoreTypes'

// ** Custom Table Components Imports
import TableHeaderDrugstoreList from './TableHeaderDrugstoreList'
import AddDrugstoreDrawer from './AddDrugstoreDrawer'

const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

type Props = {}

const columns: any = [
  {
    flex: 0.2,
    minWidth: 50,
    field: 'chwname',
    headerName: 'จังหวัด',
  },
  {
    flex: 0.2,
    minWidth: 50,
    field: 'licenseno',
    headerName: 'เลขที่ใบอนุญาต',
  },
  {
    flex: 0.2,
    minWidth: 50,
    field: 'dstorename',
    headerName: 'ชื่อร้านขายยา',
  },
  {
    flex: 0.2,
    minWidth: 50,
    field: 'tamname',
    headerName: 'ตำบล',
  },
  {
    flex: 0.2,
    minWidth: 50,
    field: 'ampname',
    headerName: 'อำเภอ',
  },
  {
    flex: 0.2,
    minWidth: 50,
    field: 'passgpp',
    headerName: 'GPP',
  },
]

const  RowOptions = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    //dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          onClick={handleRowOptionsClose}
          href='/apps/user/view/overview/'
        >
          <Icon icon='mdi:eye-outline' fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:pencil-outline' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

const DrugstoreList = (props: Props) => {
  //** State */
  const [region, setRegion] = useState<string>('')
  const [changwat, setChangwat] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [addDrugstoreOpen, setAddDrugstoreOpen] = useState<boolean>(false)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.grocery)

  useEffect(() => {
    dispatch(fetchDrugStore())
  },[dispatch])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handleRegionChange = useCallback((e: SelectChangeEvent) => {
    setRegion(e.target.value)
  }, [])

  const handleChwChange = useCallback((e: SelectChangeEvent) => {
    setChangwat(e.target.value)
  }, [])

  const handleStatusChange = useCallback((e: SelectChangeEvent) => {
    setStatus(e.target.value)
  }, [])

  const toggleAddDrugstoreDrawer = () => setAddDrugstoreOpen(!addDrugstoreOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ร้านขายยา' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='region-select'>เลือกเขต</InputLabel>
                  <Select
                    fullWidth
                    value={region}
                    id='select-region'
                    label='เลือกเขต'
                    labelId='region-select'
                    onChange={handleRegionChange}
                    inputProps={{ placeholder: 'เลือกเขต' }}
                  >
                    <MenuItem value=''>เลือกเขต</MenuItem>
                    <MenuItem value='rone'>1</MenuItem>
                    <MenuItem value='rtwo'>2</MenuItem>
                    <MenuItem value='rthree'>3</MenuItem>
                    <MenuItem value='rfour'>4</MenuItem>
                    <MenuItem value='rfive'>5</MenuItem>
                    <MenuItem value='rsix'>6</MenuItem>
                    <MenuItem value='rseven'>7</MenuItem>
                    <MenuItem value='reight'>8</MenuItem>
                    <MenuItem value='rnine'>9</MenuItem>
                    <MenuItem value='rten'>10</MenuItem>
                    <MenuItem value='releven'>11</MenuItem>
                    <MenuItem value='rtwelve'>12</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='chw-select'>เลือกจังหวัด</InputLabel>
                  <Select
                    fullWidth
                    value={changwat}
                    id='select-chw'
                    label='เลือกจังหวัด'
                    labelId='chw-select'
                    onChange={handleChwChange}
                    inputProps={{ placeholder: 'เลือกจังหวัด' }}
                  >
                    <MenuItem value=''>เลือกจังหวัด</MenuItem>
                    <MenuItem value='chwa'>จังหวัด ก</MenuItem>
                    <MenuItem value='chwb'>จังหวัด ข</MenuItem>
                    <MenuItem value='chwc'>จังหวัด ค</MenuItem>
                    <MenuItem value='chwd'>จังหวัด ง</MenuItem>
                    <MenuItem value='chwe'>จังหวัด จ</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='status-select'>สถานะ</InputLabel>
                  <Select
                    fullWidth
                    value={status}
                    id='select-status'
                    label='สถานะ'
                    labelId='status-select'
                    onChange={handleStatusChange}
                    inputProps={{ placeholder: 'สถานะ' }}
                  >
                    <MenuItem value=''>เลือกสถานะ</MenuItem>
                    <MenuItem value='rduyes'>ผ่าน</MenuItem>
                    <MenuItem value='rduno'>ไม่ผ่าน</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <TableHeaderDrugstoreList value={value} toggle={toggleAddDrugstoreDrawer} handleFilter={handleFilter} />
          <DataGrid
              autoHeight
              rows={store.data}
              columns={columns}
              checkboxSelection
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
              getRowId={(row:any) => row._id}
          />
        </Card>
      </Grid>
      <AddDrugstoreDrawer open={addDrugstoreOpen} toggle={toggleAddDrugstoreDrawer}/>
    </Grid>
  )
}

export default DrugstoreList
