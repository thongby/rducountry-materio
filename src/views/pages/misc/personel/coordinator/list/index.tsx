import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

type Props = {}

function createData(name: string, calories: string, fat: string, carbs: string, protein: string) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('A', 'xxx', 'xxx', 'xxx', 'xxx'),
  createData('B', 'xxx', 'xxx', 'xxx', 'xxx'),
  createData('C', 'xxx', 'xxx', 'xxx', 'xxx'),
  createData('D', 'xxx', 'xxx', 'xxx', 'xxx'),
  createData('E', 'xxx', 'xxx', 'xxx', 'xxx')
]

const CoordinatorList = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ชื่อ-นามสกุล</TableCell>
            <TableCell align='right'>ตำแหน่ง</TableCell>
            <TableCell align='right'>สังกัด</TableCell>
            <TableCell align='right'>บทบาท</TableCell>
            <TableCell align='right'>จังหวัด</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CoordinatorList
