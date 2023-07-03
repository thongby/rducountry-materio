// ** React Imports
import React, { useEffect, useRef } from "react";

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

//** Redux Imports */
import { useSelector, useDispatch } from "react-redux";
import { fetchChwprofile } from "src/store/apps/chwprofile";
import { AppDispatch, RootState } from "src/store";

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
interface IChwprofile {
  region: string;
  chw_id: string;
  chw_name: string;
  logo_url: string;
  lat: number;
  long: number;
  amphoecnt: number;
  tamboncnt: number;
  moobancnt: number;
  ytargetrdu: string;
  tamphoecnt: number;
  tgroceriescnt: number;
  rduampurcnt: number;
  rduampurpercent: number;
  chwrdupass: boolean;
  hosmophsp: number;
  hosmophnonsp: number;
  hosuniversity: number;
  hosinterior: number;
  hosmilitary: number;
  hosothers: number;
  healthprimary: number;
  drugstorecat1: number;
  drugstorecat2: number;
  drugstorecat3: number;
  drugstorecat4: number;
  shop711: number;
  groceries: number;
  factory: number;
  schoolgov: number;
  schoolprivate: number;
  schoollocal: number;
  schoolothers: number;
  others: number;
}


export default function RDUProvinceList() {
  const userRef = useRef(false);

  const { data, loading } = useSelector(
    (state: RootState) => state.chwprofile
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchChwprofile());
    }

    return () => {
      userRef.current = true;
    };
  }, []);

  return (
    <Grid container spacing={6}>     
      {data && Array.isArray(data) && data.map((item:IChwprofile, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ position: 'relative' }}>
              <CardContent>
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <Avatar src={item.logo_url} sx={{ mb: 6, width: 100, height: 100 }} />
                  <Typography variant='h6'>{item.chw_id}</Typography>
                  <Typography variant='h5' sx={{ mb: 3, color: 'text.primary' }}>{item.chw_name}</Typography>
                  <Typography sx={{ mb: 6, color: 'text.primary' }}>เขตสุขภาพ: {item.region}</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary' }}>จำนวนอำเภอ: {item.amphoecnt}</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary' }}>อำเภอRDU: {item.rduampurcnt}</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary' }}>ร้อยละอำเภอ: {item.rduampurpercent}</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary' }}>ผลการดำเนินการ: {item.chwrdupass}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' , flexDirection: 'column'}}>
                  <Button sx={{ mr: 4 }} variant='outlined' color='primary'>
                    ดูเพิ่มเติม...
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  );
}
