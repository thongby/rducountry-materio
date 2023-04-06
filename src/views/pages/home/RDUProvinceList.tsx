import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('A', 'xxx', 'xxx', 'xxx', 'ผ่าน'),
  createData('B', 'xxx', 'xxx', 'xxx', 'ผ่าน'),
  createData('C', 'xxx', 'xxx', 'xxx', 'ผ่าน'),
  createData('D', 'xxx', 'xxx', 'xxx', 'ผ่าน'),
  createData('E', 'xxx', 'xxx', 'xxx', 'ผ่าน'),
];

export default function RDUProvinceList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>จังหวัด</TableCell>
            <TableCell align="right">จำนวนอำเภอทั้งหมด</TableCell>
            <TableCell align="right">จำนวนอำเภอ RDU</TableCell>
            <TableCell align="right">ร้อยละ</TableCell>
            <TableCell align="right">จังหวัดRDU</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
