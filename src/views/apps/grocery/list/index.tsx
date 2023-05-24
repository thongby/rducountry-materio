import React, { useCallback, useState } from 'react'

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

// ** Custom Table Components Imports
import TableHeaderGroceryList from './TableHeaderGroceryList'
import AddGroceryDrawer from './AddGroceryDrawer'

type Props = {}

//const columns = []
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
]

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


const GroceryList = (props: Props) => {
    //** State */
    const [region, setRegion] = useState<string>('')
    const [changwat, setChangwat] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [pageSize, setPageSize] = useState<number>(10)
    const [addGroceryOpen, setAddGroceryOpen] = useState<boolean>(false)
  
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
  
    const toggleAddGroceryDrawer = () => setAddGroceryOpen(!addGroceryOpen)

    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='ค้นหาข้อมูล' />
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
            <TableHeaderGroceryList value={value} toggle={toggleAddGroceryDrawer} handleFilter={handleFilter} />
            {/* <DataGrid
              autoHeight
              rows={store.data}
              columns={columns}
              checkboxSelection
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
            /> */}
  
            <DataGrid
              autoHeight
              rows={rows}
              columns={columns}
              /* initialState={{
                pagination: {
                      paginationModel: {
                      pageSize: 5,
                    },
                  },
                }} */
              pageSize={5}
              rowsPerPageOptions={[10, 25, 50]}
              /* pageSizeOptions={[5]} */
              checkboxSelection
              disableSelectionOnClick
            />
          </Card>
        </Grid>
        <AddGroceryDrawer open={addGroceryOpen} toggle={toggleAddGroceryDrawer}/>
      </Grid>
    )
  }

export default GroceryList